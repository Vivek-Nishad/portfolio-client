import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "./ContactErrModal.css";

const ContactErrModal = ({ mailStatus }) => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    onOpenModal();
  }, [mailStatus]);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="resMsg">{mailStatus ? <p>{mailStatus}</p> : null}</div>
      </Modal>
    </div>
  );
};

export default ContactErrModal;
