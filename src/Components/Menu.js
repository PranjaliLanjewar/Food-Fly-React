import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const Menu=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-food"> Add Food</ListGroupItem>
            <ListGroupItem tag="a" href="/view-food">View Food</ListGroupItem>
            <ListGroupItem tag="a" href="/Home.js">About</ListGroupItem>
            <ListGroupItem tag="a" href="/Home.js">Contact</ListGroupItem>
        </ListGroup>
    );
}

export default Menu;