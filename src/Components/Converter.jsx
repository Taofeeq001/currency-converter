import React, { useState } from "react";
import './Converter.css';
import axios from 'axios'

const Converter = ()=>{
    const [input, setInput] = useState("");
    const [naira, setNaira] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit= async(e)=>{
        e.preventDefault(); 
        if(!input){
            setError("The above space can not be empty")
        }
        const base_url = 'https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate';
        const token = '0Coc24mjYhIsJ8bPSZWYKGjVKYHeWBhDjgqIqiFK4Hf9FsLN5HTMpRxej85pMwGx';

        axios.post(base_url,{
            "amount": input,
            "coin_name": "busd"    
           }, {
            headers: {
              token: token
            },
             
          })
          .then(response => {
            const { coin } = response.data;
            setNaira(coin);
          })
          .catch(error => {
            console.error('Conversion API Error:', error);
        });
    }
    return(
        <div className="container">
            <div className="container-box">
                <h1>Crypto currency converter</h1>
                <form onSubmit={handleSubmit} action="">
                    <input type="number" 
                        placeholder="Input the amount to be converted"
                        value={input}
                        onChange={(event)=> setInput(event.target.value)}
                    />

                    <button>Click here to Convert</button>
                    <p className="error">{error}</p>
                </form>
                    <p>Coin value in Naira:{naira}</p>
            </div>
            
        </div>
    )
}
export default Converter;