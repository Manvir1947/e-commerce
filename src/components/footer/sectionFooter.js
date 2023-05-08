import React from "react";
import FooterElement from "./footerElement";

const SectionFooter = () => {
  const footerElementsData = [
    {
      title: "Home",
      links: ["contacts", "aboutus", "careers"],
      textTitles: ["Contacts", "About Us", "Careers"],
    },

    {
      title: "Help",
      links: ["cancellation", "CancellationsReturns", "shipping", "payments"],
      textTitles: [
        "Cancellation",
        "Cancellations & Returns",
        "Shipping",
        "Payments",
      ],
    },
    {
      title: "Policy",
      links: ["returnPolicy", "privacy", "security", "siteMap"],
      textTitles: ["Return Policy", "Privacy", "Security", "Site Map"],
    },
    {
      title: "Social Media",
      links: ["faceBook", "twitter", "instagram"],
      textTitles: ["FaceBook", "Twitter", "Instagram"],
    },
  ];
  const footerElements = footerElementsData.map((ele, index) => (
    <FooterElement key={index} footerData={ele} />
  ));
  return (
    <footer className="footer-section">
      <div className="footer-container-div">{footerElements}</div>
    </footer>
  );
};

export default SectionFooter;
