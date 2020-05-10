import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

function Home(props) {
  const { gambar, title } = props;
  return (
    <div className="container">
      <Helmet>
        <title>{title ? title : "Balagendir"}</title>
      </Helmet>
      <main className="content">
        <div className="home-content">
          <h1 className="home-content__head">welcome to balagendir</h1>
          <p className="home-content__body">
            Eiusmod voluptate adipisicing labore Lorem proident tempor nostrud
            fugiat culpa deserunt.
          </p>
          <Link to="/about" className="btn btn-hover">
            more about me
          </Link>
        </div>
        <div className="img-home">
          <img src={gambar} alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home;
