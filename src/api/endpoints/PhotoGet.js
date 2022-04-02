import React from "react";

const PhotoGet = () => {
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/photos")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"></input>
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
