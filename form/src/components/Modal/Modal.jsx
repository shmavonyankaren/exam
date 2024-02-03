import React, { useState } from "react";
import Form from "../Form/Form";
import "./Modal.css";
import { Button } from "@mui/material";

export default function Modal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <div className="button-container">
      <Button onClick={handleOpen}>Open</Button>
      <Form handleClose={handleClose} show={show} />
    </div>
  );
}
