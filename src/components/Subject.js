import React from "react";
import { useState, useEffect } from "react";

import '../common.css'

export default function Subject({selectedGrade}) {

    const[subjects,setSubjects] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/home/${selectedGrade}`)
        .then(res => res.json())
        .then((result) => {
            setSubjects(result)
        })
    }, [])
    
    console.log('subjects ', subjects)

    // html render
    return(
        <div >
            <center>
            <h2>Sectional head</h2>
            <button className="green-btn">ADD NEW</button>
            <div className="list">
            {subjects.map((subject) => {
                return (
                    <span>
                        <p className="big-text" >{subject.subject_name}</p>
                        <p className="small-text">{subject.teacher_name}</p>
                    </span>
                )
            })}
                </div>
            </center>
        </div>
    )
}