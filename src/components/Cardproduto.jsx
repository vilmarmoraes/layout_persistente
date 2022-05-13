import { Button, Card } from "react-bootstrap";

export default function Cardproduto(props) {
  return (
    <Card border="success" style={{ width: "18rem", margin: "10px"}}>
      <Card.Img variant="top" src={props.src} style={{border: "solid 1px blue",height: "100%", width: "18rem"}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Button variant="primary">Ir pra item</Button>
      </Card.Body>
    </Card>
  );
}
