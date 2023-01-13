import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "./LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main ">
      <Container >
        <Row >
          <div className="intro-text">
            <div >
              <h1 className="title ">Welcome to iNoTes</h1>
              <p className="subtitle">Place for all your Notes</p>
            </div>
            <div className="buttonContainer">
              <Button
                variant="primary"
                size="lg"
                className="landingbutton"
                onClick={() => navigate("/Loginscreen")}
              >
                LOGIN
              </Button>

              <Button
                size="lg"
                className="landingbutton"
                variant="outline-danger"
                onClick={() => navigate("/Register")}
              >
                Sign-Up
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
