import React from "react";
import { Link } from "react-router-dom";

const FooterElement = (props) => {
  const { title, links, textTitles } = props.footerData;
  const listElement = links.map((ele, index) => {
    return (
      <li>
        <Link key={index} className="footer-links" to={ele}>
          {textTitles[index]}
        </Link>
      </li>
    );
  });
  return (
    <div className="footer-each-section ">
      <h3 className="footer-title">{title}</h3>
      <ul className="ul-footer-elements">{listElement}</ul>
    </div>
  );
};

export default FooterElement;
