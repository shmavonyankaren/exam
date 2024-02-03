const postToServer = async function (data) {
  const api = "http://localhost:5000/";
  const response = await fetch(api, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

export default postToServer;
