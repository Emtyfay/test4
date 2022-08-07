import React from "react";

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <h1>Test</h1>
      </div>
      <div className="buttons">
        <a href="google.com" className="button">Home</a>
        <a href="google.com" className="button">Products</a>
        <a href="google.com" className="button">Contacts</a>
        <a href="google.com" className="button">About Us</a>
      </div>
    </div>
  );
};
