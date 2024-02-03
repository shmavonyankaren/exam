import { Modal } from "@mui/material";
import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import handlerSubmit from "../../handlers/handlerSubmit";
import validation from "../../utils/valitation";
import { Button } from "@mui/material";
import SelectComp from "../SelectComp/SelectComp";
import TextAreaComp from "../TextAreaComp/TextAreaComp";
import InputComp from "../InputComp/InputComp";

export default function Form({ handleClose, show }) {
  const formik = useFormik({
    initialValues: {
      text: "",
      textarea: "",
      selectInput: "",
    },
    validationSchema: validation(),
    onSubmit: handlerSubmit,
  });
  let arrayOfOptions = ["Pizza", "Tacco", "Burger"];
  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <form
          id="form"
          onSubmit={formik.handleSubmit}
          className="form-container"
        >
          <InputComp formik={formik} />
          <TextAreaComp formik={formik} />
          <SelectComp arrayOfOptions={arrayOfOptions} formik={formik} />
          <Button variant="contained" type="submit">
            Order
          </Button>
        </form>
      </Modal>
    </div>
  );
}
