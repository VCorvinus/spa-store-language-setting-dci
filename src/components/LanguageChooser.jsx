import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { NO, FI, EE, RU, RO, ENG, GER } from "../assets/flags";

function LanguageChooser() {
  const { setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="mt-4 flex justify-center">
      <select
        className="p-2 pr-10 bg-secondary text-[#db2777] rounded-[5px] border border-none shadow-md appearance-none flex items-center"
        onChange={handleChange}
        style={{
          width: "375px",
          fontFamily: "Shantell Sans, system-ui, sans-serif",
        }}
      >
        <option value="NOB" className="flex items-center">
          <img src={NO} alt="Norwegian Flag" className="w-4 h-auto mr-2" />
          Norsk Bokmål
        </option>
        <option value="FI" className="flex items-center">
          <img src={FI} alt="Finnish Flag" className="w-4 h-auto mr-2" />
          Suomi
        </option>
        <option value="EE" className="flex items-center">
          <img src={EE} alt="Estonian Flag" className="w-4 h-auto mr-2" />
          Eesti
        </option>
        <option value="RU" className="flex items-center">
          <img src={RU} alt="Russian Flag" className="w-4 h-auto mr-2" />
          Русский
        </option>
        <option value="RO" className="flex items-center">
          <img src={RO} alt="Romanian Flag" className="w-4 h-auto mr-2" />
          Română
        </option>
        <option value="ENG" className="flex items-center">
          <img src={ENG} alt="English Flag" className="w-4 h-auto mr-2" />
          English
        </option>
        <option value="GER" className="flex items-center">
          <img src={GER} alt="German Flag" className="w-4 h-auto mr-2" />
          Deutsch
        </option>
      </select>
    </div>
  );
}

export default LanguageChooser;
