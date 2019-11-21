import './App.css';
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-layout-components';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch('https://sheetdb.io/api/v1/t8zwuswe7w45t')
      .then(response => response.json())
      .then(data => {
        setMovies(data)
        // alert(JSON.stringify(data))
      });

  }, []);

  return (
    <>

      <Container style={{ width: "1000px" }}>
        <Row>
          {
            movies.map(movie => (

              <Col md="4">
                <Card>
                  <CardImg top height="300" src={movie.imageUrl} alt="" />
                  <CardBody>
                    <CardTitle>{movie.title}</CardTitle>
                    <CardText>{movie.description}</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>

            ))
          };
        </Row>
      </Container>

    </>

  );

}

export default App;
