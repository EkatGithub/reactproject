import React from "react";
import "./styles.css";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Rooms = [
  {
    id: 1,
    roomType: "One Bedroom Villa",
    description: "these is some description",
    img: "https://ibb.co/LxTGdGp"
  },
  {
    id: 2,
    roomType: "Two Bedrooms Villa",
    description: "these is some description",
    img: "https://ibb.co/RYKdytH"
  },
  {
    id: 3,
    roomType: "Three Bedrooms Villa",
    description: "these is some description",
    img: "https://ibb.co/3y9hvqV"
  }
];

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={RoomCards} />
        <Route path="/rooms/:id" component={FullDescription} />
      </Router>
    </div>
  );
}

const RoomCards = () => {
  return (
    <Container>
      <Row>
        {Rooms &&
          Rooms.map(({ id, roomType, img, description }, index) => (
            <Col key={index}>
              <Link to={`/rooms/${id}`}>
                <Card>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{roomType}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

const FullDescription = (props) => {
  let id = props.match.params.id;
  const { roomType, description, img } = Rooms && Rooms[id - 1];

  return (
    <Table responsive>
      <thead>
        <tr>
          <th> Room Type </th>
          <th> description </th>
          <th> Image </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h5> {roomType} </h5>
          </td>
          <td>
            <p> {description} </p>
          </td>
          <td>
            <img src={img} alt="" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
