import React from "react";

function Experiences(props) {
  const { expName, terms, desc } = props;
  return (
    <main className="experiences__main">
      <article className="riwayat">
        <div className="riwayat__group">
          <h1>{expName}</h1>
          <p rentang-waktu={terms}>{desc}</p>
        </div>
      </article>
    </main>
  );
}

export default Experiences;
