import React from "react";

function Portofolio(props) {
  const { name, img } = props;

  const figureStyle = {
    backgroundImage: `url(./img/${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <article className="portofolio__item">
      <figure className="img" style={figureStyle}></figure>
      <p>{name}</p>
    </article>
  );
}

export default Portofolio;
