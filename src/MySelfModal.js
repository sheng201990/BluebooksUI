import React from "react";
import Modal from "react-bootstrap/Modal";

type modalProps = {
  modalShow: boolean,
  onClose: () => void,
};

export const MySelfModal = ({ modalShow, onClose }: modalProps) => {
  return (
    <div>
      <Modal
        show={modalShow}
        onHide={() => {
          onClose();
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div style={{ fontWeight: "bolder", fontSize: "30px" }}>About Me</div>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "left", padding: "10px", fontSize: "20px" }}>
            Results-driven Front-End Developer with 5+ years of experience
            building scalable, user-centric applications. Proficient in React,
            TypeScript, Node.js, and testing frameworks. Such as Cypress and
            Playwright. Skilled in API integration, e-commerce workflows, CI/CD
            pipelines, and team leadership. Passionate about creating seamless
            user experiences and improving web performance through clean,
            maintainable code.
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
