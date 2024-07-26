/* import React from "react";
import LanguageChooser from "./LanguageChooser";

function Header() {
  return (
    <header>
      <h1>Language Chooser</h1>
      <p>Please select your Language:</p>
      <LanguageChooser />
    </header>
  );
}

export default Header;
 */

import React from "react";
import LanguageChooser from "./LanguageChooser";

import "./Header.css";

function Header() {
  return (
    <header>
      <div className="flex flex-col items-center">
        {" "}
        <h1
          className="text-[#be123c] text-3xl font-bold mb-16 mt-16 shake"
          style={{ fontFamily: "Protest Revolution, system-ui, sans-serif" }}
        >
          🍆Please select your Language🥒
        </h1>
        <div style={{ width: "100%", maxWidth: "375px" }}>
          {" "}
          <LanguageChooser />
        </div>
      </div>
    </header>
  );
}

export default Header;
