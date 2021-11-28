import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios'
import './Fun.css'




export default function Fun() {
    
        const [word, setword] = useState();
        const [data, setdata] = useState();
        var randomWords = require('random-words');

        
        let random;
        console.log(random)
        let def;
        if(data !== undefined){
            def= data[0].meanings[0].definitions
        }
        random = randomWords()
        function getRandom (){
            
            setword(random)
            console.log(random)
            axios
            .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + random )
            .then((res) => {
                setdata(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
    return (
        <div className='fun'>
            <button className='btn2' onClick={getRandom}>generate fun word</button>
            {random !== undefined && (
                <div>
                <p className="newp">{random}</p>
                </div>
            )}
            {random === undefined && (
                <div>
                <p>belum ada data</p>
                </div>
            )}
            {data !== undefined && (
                    <>
                    {data.length <= 1 && (
                        <>
                        <p>{data[0].meanings[0].definitions[0].definition}</p>
                        </>
                    )}
                    {data.length > 1 &&(
                        <>
                        {def.map((item)=> (
                        <p>{item.definition}</p>
                    ))}
                        </>
                    )}
                        
                    
                    
                    </>
                )}
        </div>
    )
}
