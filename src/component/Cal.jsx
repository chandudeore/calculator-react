import React from "react";
import "./Cal.css";

export default function Cal() {
  return (
    <>
      <div className="container">
        <div className="block">1</div>
        <div className="block">2</div>
        <div className="block">3</div>

        <div className="block">+</div>

        <div className="block">4</div>
        <div className="block">5</div>
        <div className="block">6</div>

        <div className="block">-</div>

        <div className="block">7</div>
        <div className="block">8</div>
        <div className="block">9</div>

        <div className="block">*</div>

        <div className="block">0</div>
        <div className="block wide">=</div>
        <div className="block">/</div>
      </div>
    </>
  );
}
