/* function App() {
  return "Hello world";
}

export default App;
 */

import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import LanguageContextProvider from "./components/LanguageContext";

function App() {
  return (
    <LanguageContextProvider>
      <Header />
      <Content />
    </LanguageContextProvider>
  );
}

export default App;
