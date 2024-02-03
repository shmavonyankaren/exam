import postToServer from "../server/postToServer";

const handlerSubmit = function (values) {
  const response = postToServer(values);
};

export default handlerSubmit;
