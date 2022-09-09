import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../common.css'

export default function Grade() {

    // declare variables and set their deafult values
    const[students, setStudents] = useState([])

    // function to get the students from db
    useEffect(() => {
            fetch("http://localhost:8080/home")
            .then(res => res.json())
            .then((result) => {
                console.log('result' ,result)
                setStudents(result)
            })
    }, [])

    // html render
    return(
        <div className="home-body">
            <center>
                <p className="main-heading">STUDENTS</p>

                <hr/>

                <button className="btn" style={{backgroundColor:"#00C5AB"}}>NEW</button>

                <table>
                    <tr>
                        <th>INDEX NO</th>
                        <th>NAME</th>
                        <th>GRADE</th>
                        <th>ADDRESS</th>
                        <th>CONTACT</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {students.map((student) => {
                        return (
                            <tr key={student.indexNo}>
                                <td>{student.indexNo}</td>
                                <td>{student.name}</td>
                                <td>{student.grade}</td>
                                <td>{student.address}</td>
                                <td>{student.contact}</td>
                                <td> <button className="btn" style={{backgroundColor:"#FEC045"}}>UPDATE</button></td>
                                <td> <button className="btn" style={{backgroundColor:"#FF7170"}}>REMOVE</button></td>
                            </tr>
                        )
                    })}
                </table>
            </center>
        </div>
    )
}