import React from "react";

const StoreFinder = () => {
  return (
    <div className="store-finder">
      <iframe
        className="maps-element"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734514.340865631!2d-79.54208472640934!3d44.01733076488125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a641e645df%3A0xf5b63df4538043ea!2sScarborough%20Town%20Centre!5e0!3m2!1sen!2sca!4v1678169565892!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default StoreFinder;
