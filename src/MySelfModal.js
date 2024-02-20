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
            Creative Front-End Developer offering 3+ years of experience
            providing high-impact web solutions for diverse industry
            organizations. Skilled in designing, developing and testing multiple
            web-based applications incorporating a range of technologies.
            Aspiring to combine broad background with strong technical skills to
            excel as a Front-End Developer.
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
