import React from "react";
import { Card, CardBody, CardTitle, Container, Button } from "reactstrap";

const Home=()=>{
return(
    <div>
        <Card className="text-center" border="success">
            <CardBody>
                <CardTitle>Learn code with pranjali</CardTitle>
                    <p>Developed by pranjali for basic understanding of react</p>
                <Container className="text-center">
                    <Button color="primary" outline> Start Learning</Button>
                </Container>
            </CardBody>
        </Card>

       
          
         

       

    </div>

    
);
};
export default Home;
