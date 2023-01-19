import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, Container, CardImg, Placeholder, PlaceholderButton} from 'reactstrap';

const Food=({food})=>{
return (
    <div>
    <Card className='text-center'>
        <CardBody>
            <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger' onClick={()=>{

                }}> Delete </Button>{' '}

                <Button color='warning ml-5'>Update</Button>
            </Container>
        </CardBody>
    </Card>
</div>

);
};
export default Food;
