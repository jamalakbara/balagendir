import React, { Component } from "react";
import Helmet from "react-helmet";

class About extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="container">
        <Helmet>
          <title>{title ? title : "Balagendir"}</title>
        </Helmet>
        <div className="about">
          <main className="content">
            <div className="home-content">
              <h1 className="home-content__head">Me !!!!</h1>
              <p className="home-content__body">
                Eiusmod voluptate adipisicing labore Lorem proident tempor
                nostrud fugiat culpa deserunt. Cupidatat tempor pariatur
                incididunt et qui ex minim sit nisi ad et eu esse. In commodo
                anim aute veniam. Magna fugiat in adipisicing occaecat
                officia.Ex cupidatat officia aute esse deserunt nostrud tempor.
                Proident deserunt sunt nisi aliquip qui id nulla officia magna
                sunt occaecat et mollit ullamco. Ea in consectetur culpa minim
                ea nostrud. Proident dolor incididunt et ad. Nisi culpa sint
                elit proident elit irure voluptate dolore cupidatat. Et esse
                cillum quis pariatur. Irure officia officia ea aliquip commodo
                sit laborum nulla excepteur Lorem proident sit. Nulla ipsum
                laboris excepteur anim elit enim.
              </p>
            </div>
          </main>
          <section className="experiences">
            <header className="experiences__header">
              <h1>experience</h1>
            </header>
            <main className="experiences__main">
              <article
                className="riwayat"
                rentang-waktu="31 Jul 19 - 04 Sep 19"
              >
                <div className="riwayat__group">
                  <h1>Freelance At PT Telkom Indonesia</h1>
                  <p>
                    Exercitation sint dolore reprehenderit eu veniam cupidatat.
                    Aliquip ipsum aliquip commodo
                  </p>
                </div>
              </article>
              <article
                className="riwayat"
                rentang-waktu="20 Mei 19 - 20 Jun 19"
              >
                <div className="riwayat__group">
                  <h1>Internship At PT Telkom Indonesia</h1>
                  <p>
                    Exercitation sint dolore reprehenderit eu veniam cupidatat.
                    Aliquip ipsum aliquip commodo consequat velit est magna qui
                    aute exercitation incididunt excepteur consectetur veniam.
                    Nisi mollit esse quis voluptate id dolor aute sit. Quis
                    laborum in minim anim esse amet amet quis excepteur Lorem
                    ipsum cupidatat.
                  </p>
                </div>
              </article>
            </main>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
