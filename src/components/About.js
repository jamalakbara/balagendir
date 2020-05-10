import React, { Component } from "react";
import Social from "./Social";
import Helmet from "react-helmet";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      social: [
        {
          id: 1,
          name: "akbar",
          soc: "facebook",
          socLink: "http://www.facebook.com/jamalakbara",
        },
        {
          id: 2,
          name: "jamal akbar alam",
          soc: "twitter",
          socLink: "http://www.twitter.com/jamalakbara",
        },
        {
          id: 3,
          name: "jamal akbar alam",
          soc: "instagram",
          socLink: "http://www.instagram.com/jamalakbara",
        },
        {
          id: 4,
          name: "jamal akbar alam",
          soc: "linkedin",
          socLink: "https://www.linkedin.com/in/jamal-akbar-alam-0940a3198/",
        },
        {
          id: 5,
          name: "jamal akbar alam",
          soc: "github",
          socLink: "http://www.github.com/jamalakbara",
        },
      ],
    };
  }

  render() {
    const { social } = this.state;
    const { title } = this.props;
    const socmed = social.map((item) => (
      <Social
        key={item.id}
        soc={item.soc}
        name={item.name}
        link={item.socLink}
      />
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
          <div className="mine">
            <h1 className="mine__head">this is mine</h1>
            <div className="mine__container">{socmed}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
