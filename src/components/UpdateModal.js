import React from "react";
import "./Modal.css";

function Modal({closeModal}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
            <div className="titleClosebtn">
                <button onClick={()=> closeModal(false)}> X </button>
            </div>

        <h2 className="main-heading">Edit Students Details </h2>
            <form>
                <table>
                    <tr>
                        <td><label>Index No: </label></td>    
                        <td><input type="text" name="indexNo" /></td>   
                    </tr>

                    <tr>
                        <td><label>Name: </label></td>   
                        <td><input type="text" name="name" /></td>  
                    </tr>
                     
                    <tr>
                        <td><label>Grade: </label></td>   
                        <td><input type="text" name="grade"></input></td>   
                    </tr>
                    
                    <tr>
                        <td><label>Address: </label></td>   
                        <td><input type="text" name="address" /></td>   
                    </tr>
                                 
                    <tr>
                        <td> <label>Contact: </label></td>   
                        <td> <input type="text" name="contact" /></td>
                    </tr>

                    
           
                       
                </table>
                

            </form>
                <div className="footer">
                    <button onClick={()=> closeModal(false)} className="btn" style={{backgroundColor:"#EF3417"}}>Cancel</button> 
                    <button className="btn" style={{backgroundColor:"#8DA9E1"}}>Continue</button>
                </div>
            </div>
        </div> 
    )
}

export default Modal