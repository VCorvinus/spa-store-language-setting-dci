import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

import "../index.css";
import "../styles.js";

function WelcomeMessage() {
  const { language } = useContext(LanguageContext);

  const messages = {
    ENG: "Hello World!",
    GER: "Hallo Welt!",
    NOB: "Hallo, verden!",
    FI: "Hei maailma!",
    EE: "Tere, maailm!",
    RU: "Здравствуй, мир!",
    RO: "Salut, lume!",
  };

  return (
    <div className="text-center font-bold font-shantell text-[#be123c] text-5xl font mt-16">
      <p>{messages[language]}</p>
    </div>
  );
}

export default WelcomeMessage;
