import React from "react";

export default function Map() {
  return (
    <div className="container">
      <iframe title="This is a unique title"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12158.764671675179!2d49.8385151!3d40.3713717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d03cde0be6b%3A0x5950df3ab3ed2fca!2sRed%20cup%20beer!5e0!3m2!1sen!2saz!4v1682677466111!5m2!1sen!2saz"
        width="600"
        height="450"
        style={{ border: 0 + "px" }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
