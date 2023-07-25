import React, { useState } from "react";
import './Converter.css'

const Converter = ()=>{
    const [input, setInput] = useState({});
    const [naira, setNaira] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit= async(e)=>{
        e.preventDefault(); 
        if(!input){
            setError("The above space can not be empty")
        }
        const base_url = `https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate`
        const token = `0Coc24mjYhlsJ8bPSZWYKGjVKYHeWBhDjgqlqiFK4Hf9FsLN5HTMpRxej85pMwGx`

        try {
            const response = await fetch(base_url, {
                method: "POST",
                headers: {token: token}
            })
            .then((res)=>res.json())
            setNaira(response)
        } catch (error) {
            console.log(error)
        }
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