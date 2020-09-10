import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";

const Navbar1 = ()=>{
return(
   
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand  href="/alltask">All Tasks</Navbar.Brand>
    <Navbar.Brand href="/add">Add Task</Navbar.Brand>
    
    </Navbar>
    
)
}

export default Navbar1;