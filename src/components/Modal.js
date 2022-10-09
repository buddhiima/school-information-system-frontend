import React from "react";
import "./Modal.css";
import { useState } from 'react';

function Modal({closeModal}){

    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[index_no,setIndex_no]=useState('')
    const[grade,setGrade]=useState('')
    const[contact,setContact]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address,index_no,grade,contact}
        console.log(student)
        fetch("http://localhost:8080/home/add",
        {
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
          console.log("New Student Added")
        }
        )
        window.location.reload(false);
      }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
            <div className="titleClosebtn">
                <button onClick={()=> closeModal(false)}> X </button>
            </div>

        <h2 className="main-heading">Enter Students Details </h2>
            <form>
                <table>
                    <tr>
                        <td><label>Index No: </label></td>    
                        <td><input type="text" name="index_no" value={index_no} 
                        onChange={(e)=>setIndex_no(e.target.value)}
                        /></td>   
                    </tr>

                    <tr>
                        <td><label>Name: </label></td>   
                        <td><input type="text" name="name" value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        
                        /></td>  
                    </tr>
                     
                    <tr>
                        <td><label>Grade: </label></td>   
                        <td><input type="text" name="grade" value={grade} 
                        onChange={(e)=>setGrade(e.target.value)}
                        
                        /></td>  
                    </tr>
                     
                    
                    
                    <tr>
                        <td><label>Address: </label></td>   
                        <td><input type="text" name="address" value={address} 
                        onChange={(e)=>setAddress(e.target.value)}
                        /></td>   
                    </tr>
                                 
                    <tr>
                        <td> <label>Contact: </label></td>   
                        <td> <input type="text" name="contact" value={contact} 
                        onChange={(e)=>setContact(e.target.value)}
                        /></td>
                    </tr>

                    
           
                       
                </table>
                

            </form>
                <div className="footer">
                    <button onClick={()=> closeModal(false)} className="btn" style={{backgroundColor:"#EF3417"}}>Cancel</button> 
                    <button className="btn" style={{backgroundColor:"#8DA9E1"}}onClick={handleClick} >Continue</button>
                </div>
            </div>
        </div> 
    )
}

export default Modal