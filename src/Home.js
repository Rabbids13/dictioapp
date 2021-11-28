import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import './Home.css'
import { useNavigate } from "react-router-dom";

export default function Home({detail}) {
    let navigate = useNavigate();

    const [word, setword] = useState();
    const [data, setdata] = useState();
    let def;
    let search;
    if(data !== undefined){
        def= data[0].meanings[0].definitions
    }
    function kirimdata() {
    
    search = document.getElementById("search").value
    axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
        .then((res) => {
            setdata(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    function kirimDetail(item){
        detail(item)
        navigate('/Detail');
    }

    return (
        <div>
            <div className="homeApp">
                <div className="mainCon">
                    <input className='input' type="text" id="search"></input>
                    <button className="btn" onClick={kirimdata}>Cari</button>
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
                                <p onClick={kirimDetail(item)}>{item.definition}</p>
                            ))}
                            </>
                        )}
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}
