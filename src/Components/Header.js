import React from "react";
import { Card, CardBody , Navbar, NavbarBrand} from "reactstrap";

function Header({name,title}){
    return(
        <div>
            <Navbar className="my-2"
                       color="dark"
                       dark>
                <NavbarBrand href="/">
                    <img 
                    alt="food"
                    src="/food.webp"
                    style={{
                        height:40,
                        width:40
                    }}
                    />
                   
                   
                </NavbarBrand>
            </Navbar>
           

        
        <Card>
            <CardBody className="my-2 bg-warning">
            <h1 className="text-center my-5">Welcome to Course Application</h1>
            </CardBody>
        
        </Card>
        // </div>
        );
}


export default Header;