import React from "react";
import Card from "react-bootstrap/Card";

export const ProfileInfo = () => {
  return (
    <div style={{ margin: "10px" }}>
      <Card
        style={{ minWidth: "200px", minHeight: "400px", marginTop: "20px" }}
      >
        <Card.Title
          style={{ color: "grey", fontSize: "16px", marginLeft: "10px" }}
        ></Card.Title>
        <Card.Body>
          <div style={{ textAlign: "center" }}>
            {/* <img src="/photo.jpg" alt="My Image" width="100" height="100"></img> */}
          </div>

          <p style={{ fontWeight: "bold", textAlign: "center" }}>Photo</p>
        </Card.Body>
      </Card>
    </div>
  );
};
