import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Settings from "./components/Settings/Settings";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [isRussian, setIsRussian] = useState(true);
  const [isSort, setIsSort] = useState(false);
  const [isSettings, setIsSettings] = useState(false);

  const setLang = (isRus) => {
    setIsRussian(isRus);
  };
  const setSort = (isRus) => {
    setIsSort(isRus);
  };
  const setPage = (isRus) => {
    setIsSettings(isRus);
  };

  return (
    <>
      <Header lang={isRussian} setPage={setPage} isSettings={isSettings} />
      <div className="container">
        <div className="content">
          {!isSettings ? (
            <MainPage lang={isRussian} />
          ) : (
            <Settings lang={isRussian} setLang={setLang} sort={isSort} setSort={setSort} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
