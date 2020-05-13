import React, { useState } from "react";
import Helmet from "react-helmet";
import Experiences from "./Experiences";
import Services from "./Services";
import Portofolio from "./Portofolio";

function About(props) {
  const { title } = props;

  const [exp, setExp] = useState([
    {
      id: 0,
      expName: "Freelance At Bea Cukai",
      terms: "24 Feb 20 - 29 Feb 20",
      desc:
        "Occaecat adipisicing officia sit esse nisi deserunt sint cillum mollit velit do ut consequat. Ea aute nisi occaecat anim ad occaecat consequat duis aliquip cupidatat commodo sint anim Lorem. Ipsum ipsum laborum exercitation culpa proident ad culpa ullamco sunt veniam sit.",
    },
    {
      id: 1,
      expName: "Outsource At PT Telkom Indonesia",
      terms: "1 Feb 20 - 27 Mar 20",
      desc:
        "Occaecat adipisicing officia sit esse nisi deserunt sint cillum mollit velit do ut consequat. Ea aute nisi occaecat anim ad occaecat consequat duis aliquip cupidatat commodo sint anim Lorem. Ipsum ipsum laborum exercitation culpa proident ad culpa ullamco sunt veniam sit.",
    },
    {
      id: 2,
      expName: "Outsource At PT Telkom Indonesia",
      terms: "31 Jul 19 - 04 Sep 19",
      desc:
        "Occaecat adipisicing officia sit esse nisi deserunt sint cillum mollit velit do ut consequat. Ea aute nisi occaecat anim ad occaecat consequat duis aliquip cupidatat commodo sint anim Lorem. Ipsum ipsum laborum exercitation culpa proident ad culpa ullamco sunt veniam sit.",
    },
    {
      id: 3,
      expName: "Internship At PT Telkom Indonesia",
      terms: "20 May 19 - 04 Jun 19",
      desc:
        "Occaecat adipisicing officia sit esse nisi deserunt sint cillum mollit velit do ut consequat. Ea aute nisi occaecat anim ad occaecat consequat duis aliquip cupidatat commodo sint anim Lorem. Ipsum ipsum laborum exercitation culpa proident ad culpa ullamco sunt veniam sit.",
    },
  ]);

  const [services, setServices] = useState([
    {
      id: 0,
      serviceName: "web developer",
      desc:
        "Est excepteur nostrud ad do consectetur id aliquip aliquip laborum sint et dolor. Excepteur do occaecat laborum aliquip esse consectetur commodo nulla consequat esse voluptate enim deserunt sit. Lorem ut sint quis cupidatat amet. Eiusmod ex elit eu nisi qui quis occaecat ullamco velit cillum incididunt proident ex. Aliqua qui elit nostrud commodo. Ipsum cupidatat dolor aliquip nulla enim aliqua voluptate ad culpa voluptate mollit.",
      img: "web.svg",
    },
    {
      id: 1,
      serviceName: "python developer",
      desc:
        "Est excepteur nostrud ad do consectetur id aliquip aliquip laborum sint et dolor. Excepteur do occaecat laborum aliquip esse consectetur commodo nulla consequat esse voluptate enim deserunt sit. Lorem ut sint quis cupidatat amet. Eiusmod ex elit eu nisi qui quis occaecat ullamco velit cillum incididunt proident ex. Aliqua qui elit nostrud commodo. Ipsum cupidatat dolor aliquip nulla enim aliqua voluptate ad culpa voluptate mollit.",
      img: "python.svg",
    },
  ]);

  const [portofolio, setPortofolio] = useState([
    {
      id: 0,
      name: "hc wiki",
      img: "hcwiki.jpeg",
    },
    {
      id: 1,
      name: "terbang com",
      img: "terbang.png",
    },
    {
      id: 2,
      name: "refresh",
      img: "refresh.png",
    },
    {
      id: 3,
      name: "simarak",
      img: "simarak.png",
    },
  ]);

  const pengalaman = exp.map((e) => (
    <Experiences key={e.id} expName={e.expName} terms={e.terms} desc={e.desc} />
  ));

  const serpis = services.map((s) => (
    <Services key={s.id} name={s.serviceName} gambar={s.img} desc={s.desc} />
  ));

  const porto = portofolio.map((p) => (
    <Portofolio key={p.id} name={p.name} img={p.img} />
  ));

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
              Eiusmod voluptate adipisicing labore Lorem proident tempor nostrud
              fugiat culpa deserunt. Cupidatat tempor pariatur incididunt et qui
              ex minim sit nisi ad et eu esse. In commodo anim aute veniam.
              Magna fugiat in adipisicing occaecat officia.Ex cupidatat officia
              aute esse deserunt nostrud tempor. Proident deserunt sunt nisi
              aliquip qui id nulla officia magna sunt occaecat et mollit
              ullamco. Ea in consectetur culpa minim ea nostrud. Proident dolor
              incididunt et ad. Nisi culpa sint elit proident elit irure
              voluptate dolore cupidatat. Et esse cillum quis pariatur. Irure
              officia officia ea aliquip commodo sit laborum nulla excepteur
              Lorem proident sit. Nulla ipsum laboris excepteur anim elit enim.
            </p>
          </div>
        </main>
        <section className="experiences">
          <header className="experiences__header">
            <h1>experiences</h1>
          </header>
          {pengalaman}
        </section>
        <section className="services">
          <header className="services__header">
            <h1>services offers</h1>
          </header>
          <main className="services__main">{serpis}</main>
        </section>
        <section className="portofolio" judul="portofolio">
          <header className="portofolio__header">
            <h1>portofolio</h1>
          </header>
          <main className="portofolio__main">{porto}</main>
        </section>
      </div>
    </div>
  );
}

export default About;
