import * as Yup from "yup";

const validation = () => {
  return Yup.object({
    text: Yup.string()
      .min(8, "Must be more than 8 characters")
      .required("Required"),
  });
};

export default validation;