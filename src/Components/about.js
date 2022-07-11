import React, {useState, useEffect} from 'react';
import axios from "axios";
export default function About ()
{
    const [about, setAbout] = useState([])
    useEffect(() =>
    {
        axios.get("http://localhost:3004/about").then(res => setAbout(res.data))

    },
    []
    )
    return(
        <section id="about-us">
            {
                about.map(item => {
                    return(
                        <div className="container">
            <h1 className="title text-center">  Nama </h1>
            <div className="row">
                <div className="col-md-6 about-us">
                <ul>
                    <li><h1>{item.section}</h1></li>
                    <img src={item.image} alt="" width="200px" height="200px"/>
                </ul>
                </div>
                <div className="col-md-6">
                </div>
            </div> 
            </div>
                    )
                }
                    )
            }
        </section>
    )
}