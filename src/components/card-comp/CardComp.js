// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardComp.css'

export const CardComp=({img})=> {
  return (
    <Card className='cardComp p-2 mb-3' style={{ width: '16rem'}}>
      <Card.Img variant='top' height='240px' src={img} />
      {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
  );
}
