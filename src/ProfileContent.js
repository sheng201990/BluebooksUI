import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MySelfModal } from "./MySelfModal";

export const ProfileContent = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div
      style={{
        color: "black",
        fontSize: "20px",
        fontFamily: "normal",
        fontWeight: "bold",
        textAlign: "left",
      }}
    >
      <div style={{ marginTop: "20px", padding: "10px" }}>
        <div
          style={{
            fontSize: "40px",
            fontFamily: "normal",
            color: "black",
          }}
        >
          Hi,
        </div>
        <div style={{ fontSize: "50px", fontFamily: "normal", color: "black" }}>
          <span>I am</span>
          <span style={{ color: "orange" }}> Aaron</span>
        </div>
        <div style={{ fontSize: "50px", fontFamily: "normal", color: "black" }}>
          <span>Front End</span>
          <span style={{ color: "blue" }}> Developer</span>
        </div>
      </div>
      <div
        style={{
          fontSize: "14px",
          marginTop: "40px",
          fontFamily: "unset",
          padding: "10px",
        }}
      >
        Reliable, energetic, and resourceful front-end developer with more than
        three years of experience resolving complex client problems with coding
        solutions.
      </div>
      <div style={{ marginTop: "40px", marginBottom: "20px", padding: "10px" }}>
        <Button
          className="bg-primary"
          style={{
            fontFamily: "normal",
            fontWeight: "bold",
            borderRadius: "20px",
          }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          About Me
        </Button>

        <div style={{ marginTop: "10px", padding: "10px" }}>
          <img
            src="/facebook.jpg"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.facebook.com/rainbowback/");
            }}
          ></img>
          <img
            src="/linkedin.jpg"
            width="20"
            height="20"
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.linkedin.com/in/aaron-luan-6b8448196/");
            }}
          ></img>
          <img
            src="/github.jpg"
            width="20"
            height="20"
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              window.open("https://github.com/sheng201990");
            }}
          ></img>
          <img
            src="/research.jpg"
            width="20"
            height="20"
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://mavmatrix.uta.edu/electricaleng_theses/365/"
              );
            }}
          ></img>
        </div>
      </div>
      <MySelfModal modalShow={showModal} onClose={onClose} />
    </div>
  );
};
