import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Specialities = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ justifyContent: "space-evenly", display: "flex" }}>
        <Card
          style={{
            width: "300px",
            height: "300px",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <Card.Title
            style={{
              color: "blue",
              fontSize: "20px",
              fontWeight: "bolder",
              padding: "5px",
            }}
          >
            Stripe
          </Card.Title>
          <Card.Body>
            <div style={{ textAlign: "center" }}>
              <img src="/stripe.png" width="200"></img>
            </div>

            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "2px",
              }}
            ></p>

            <div style={{ textAlign: "center" }}>
              <Button
                className="bg-primary"
                size="sm"
                style={{ borderRadius: "25px", fontWeight: "bold" }}
              >
                Try
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "300px",
            height: "300px",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <Card.Title
            style={{
              color: "blue",
              fontSize: "20px",
              fontWeight: "bolder",
              padding: "5px",
            }}
          >
            Chat GPT
          </Card.Title>
          <Card.Body>
            <div style={{ textAlign: "center" }}>
              <img src="/chat-gpt.png" width="150"></img>
            </div>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "2px",
              }}
            ></p>

            <div style={{ textAlign: "center" }}>
              <Button
                className="bg-primary"
                size="sm"
                style={{ borderRadius: "25px", fontWeight: "bold" }}
                onClick={() => {
                  navigate("/gpt");
                }}
              >
                Try
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "300px",
            height: "300px",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <Card.Title
            style={{
              color: "blue",
              fontSize: "20px",
              fontWeight: "bolder",
              padding: "5px",
            }}
          >
            Chart
          </Card.Title>
          <Card.Body>
            <div style={{ textAlign: "center" }}>
              <img src="/chart.png" width="150"></img>
            </div>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "2px",
              }}
            ></p>

            <div style={{ textAlign: "center" }}>
              <Button
                className="bg-primary"
                size="sm"
                style={{ borderRadius: "25px", fontWeight: "bold" }}
                onClick={() => {
                  navigate("/chart");
                }}
              >
                Try
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
