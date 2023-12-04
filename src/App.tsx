import './App.css'

import * as React from "react";
import AppHeader from "./components/app_header/app_header";
import { Outlet } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";


function App() {
  return (
      <Container className="align-self-start">
          <Row className="align-self-start">
              <Col>
                <AppHeader></AppHeader>
              </Col>
          </Row>
          <Row className="align-self-start">
              <Col>
                  <Outlet/>
              </Col>
          </Row>
      </Container>
  );
}

export default App
