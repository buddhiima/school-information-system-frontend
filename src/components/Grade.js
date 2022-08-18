import React from "react";
import { useState, useEffect } from "react";
import Select from 'react-select'
import Subject from './Subject';

import '../common.css'

export default function Grade() {

    // declare variables and set their deafult values
    const[grades, setGrades] = useState([])
    const[selectedGrade, setSelectedGrade] = useState(null)
    const[showSubjects, setShowSubjects] = useState(false)

    // function to get the selected option from the drop down list
    const handleChange = (selectedOption) => {
        console.log('selectedOption ',selectedOption)
        setSelectedGrade(selectedOption.value)
        setShowSubjects(true)
    };

    // function to get the grades from db
    useEffect(() => {
            fetch("http://localhost:8080/home")
            .then(res => res.json())
            .then((result) => {
                console.log('result' ,result)
                setGrades(result)
                
            })
    }, [])

    // html render
    return(
        <div className="grade-label">
            <center>
                <p>GRADE</p>
                <Select 
                    onChange={handleChange}
                    options={grades}
                    className="grade-dropdown"
                >
                </Select>

                <hr className="horizontal-rule"></hr>

                {
                    showSubjects ? (
                        <Subject selectedGrade={selectedGrade} />
                    ): (<p></p>) 
                }

            </center>
        </div>
    )
}