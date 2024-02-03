import * as Yup from "yup";

const validation = () => {
  return Yup.object({
    text: Yup.string()
      .min(8, "Must be more than 5 characters")
      .required("Required"),
    textarea: Yup.string()
      .min(8, "Must be more than 10 characters")
      .required("Required"),
  });
};

export default validation;
