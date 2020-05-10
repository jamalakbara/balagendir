import React from "react";

const Social = props => {
  const { name, soc, link } = props;
  const src = `/img/${soc}.svg`;
  const style = `mine__social ${soc}`;

  const clickHandler = link => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={() => clickHandler(link)} className={style}>
      <div className="mine__logo">
        <img src={src} alt={soc} />
      </div>
      <div className="mine__soc">
        <h1>{soc}</h1>
        <p>{name}</p>
      </div>
      {/* <div className="mine__hilite">
        <img src="/img/ppfb.png" alt="pp" />
      </div> */}
    </div>
  );
};

export default Social;
