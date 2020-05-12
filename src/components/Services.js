import React from "react";

function Services(props) {
  const { name, desc, gambar } = props;
  return (
    <article className="offers">
      <figure className="offers__img">
        <img src={`./img/${gambar}`} />
      </figure>
      <h1>{name}</h1>
      <p>{desc}</p>
    </article>
  );
}

export default Services;
