import React from "react";
import "./phoneInformationCard.css";

export default function PhoneInformationCard({ phoneData }) {
  const {
    valid,
    number,
    local_format,
    international_format,
    country_prefix,
    country_code,
    country_name,
    location,
    carrier,
    line_type,
  } = phoneData;
  return (
    <div className="card">
      <div className="header">
        <h2>Number Information</h2>
        <p className={valid ? "valid" : "invalid"}>
          {valid ? "Valid" : "Invalid"}
        </p>
      </div>
      <div className="body">
        <p>
          <span className=" label">number :</span>
          {number}
        </p>
        <p>
          <span className=" label">Local :</span>
          {local_format}
        </p>
        <p>
          <span className=" label">International :</span>
          {international_format}
        </p>
        <p>
          <span className=" label">Country prefix:</span>
          {country_prefix}
        </p>
        <p>
          <span className=" label">Country code:</span>
          {country_code}
        </p>
        <p>
          <span className=" label">Country name:</span>
          {country_name}
        </p>
        <p>
          <span className=" label">Location:</span>
          {location}
        </p>{" "}
        <p>
          <span className=" label">carrier :</span>
          {carrier}
        </p>
      </div>
    </div>
  );
}
