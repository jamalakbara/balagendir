import React, { useState } from "react";
import Social from "./Social";
import Helmet from "react-helmet";

function Contact(props) {
  const [social, setSocial] = useState([
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
      socLink: "https://www.linkedin.com/in/jaabalagendir/",
    },
    {
      id: 5,
      name: "jamal akbar alam",
      soc: "github",
      socLink: "http://www.github.com/jamalakbara",
    },
  ]);

  const socmed = social.map((item) => (
    <Social key={item.id} soc={item.soc} name={item.name} link={item.socLink} />
  ));

  const { title } = props;

  return (
    <div className="contact-socmed" judul="mine">
      <div className="mine container">
        <Helmet>
          <title>{title ? title : "Balagendir"}</title>
        </Helmet>
        <div className="mine__container">{socmed}</div>
      </div>
    </div>
  );
}

export default Contact;
