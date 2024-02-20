import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState();
  const alertFunc = () => {
    alert("Thank you, Your message was submitted");
  };

  return (
    <div
      style={{
        display: "block",
        width: "90%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "top",
        backgroundColor: "white",
        marginLeft: "5%",
      }}
    >
      <Row style={{ marginTop: "100px" }}>
        <div
          style={{
            fontSize: "40px",
            fontFamily: "normal",
            fontWeight: "bolder",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Free to Contact Me
        </div>

        <Col md={6}>
          <Card>
            <Form
              onSubmit={() => {
                setIsLoading(true);
                setTimeout(alertFunc(), 1000);
              }}
            >
              <Card.Body>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bolder",
                      padding: "10px",
                    }}
                  >
                    First Name:
                  </span>
                  <span>
                    <Form.Control
                      id="first_name"
                      required={true}
                      style={{
                        height: "40px",
                        padding: "10px",
                        width: "100%",
                      }}
                    />
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bolder",
                      padding: "10px",
                    }}
                  >
                    Last Name:
                  </span>
                  <span>
                    <Form.Control
                      id="last_name"
                      required={true}
                      style={{
                        height: "40px",
                        padding: "10px",
                        width: "100%",
                      }}
                    />
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bolder",
                      padding: "10px",
                    }}
                  >
                    Your Email:
                  </span>
                  <span>
                    <Form.Control
                      type="email"
                      required={true}
                      id="email"
                      style={{
                        height: "40px",
                        padding: "10px",
                        width: "100%",
                      }}
                    />
                  </span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bolder",
                      padding: "10px",
                    }}
                  >
                    What is your question, comment, or issues?:
                  </span>
                  <span>
                    <Form.Control
                      as="textarea"
                      required={true}
                      rows="2"
                      id="text"
                      style={{
                        marginLeft: "10px",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  </span>
                </div>

                <div style={{ textAlign: "right", padding: "10px" }}>
                  <Button className="bg-primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Card.Body>
            </Form>
          </Card>
        </Col>
        {isLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </Row>
    </div>
  );
};
