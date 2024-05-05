import { useState } from "react";
import Select from "../Select/Select";
import SelectItem from "../Select/SelectItem/SelectItem";
import SelectSubitem from "../Select/SelectSubitem/SelectSubitem";
import { data } from "./data";

import search from "../../assets/search.svg";
import A1 from "../../assets/level_a1.svg";
import A2 from "../../assets/level_a2.svg";
import B1 from "../../assets/level_b1.svg";
import B2 from "../../assets/level_b2.svg";
import C1 from "../../assets/level_c1.svg";
import C2 from "../../assets/level_c2.svg";

import "./style.css";

const MainPage = ({ lang }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState([]);

  const onSearch = (e) => {
    const value = e.target.value;
    const currSearch = value.trim().toLocaleLowerCase();

    setSearched([])
    data.forEach((item) => {
      if (currSearch == item.trim().toLowerCase().slice(0, currSearch.length)) {

        setSearched(prev => [...prev, item])
      }
    });
    setSearchValue(value);
  };

  return (
    <div className="main">
      <label className="search" htmlFor="search">
        <span className="search__icon">
          <img src={search} alt="Search" />
        </span>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={(e) => onSearch(e)}
          placeholder={lang ? "Поиск" : "Search"}
        />
      </label>

      {searchValue.length > 0 ? (
        <div className="show__content">
          <div className="search__content">
            {searched.map((item) => {
              return (
                <>
                  <span>{item}</span>
                  <label htmlFor={`subitem-a1`} className="subitem__label">
                    <input type="checkbox" id={`subitem-a1`} />
                    <span className="subitem__checkmark"></span>
                    <span className="subitem__content">A1</span>
                  </label>
                  <label htmlFor={`subitem-a2`} className="subitem__label">
                    <input type="checkbox" id={`subitem-a2`} />
                    <span className="subitem__checkmark"></span>
                    <span className="subitem__content">A2</span>
                  </label>
                  <label htmlFor={`subitem-b1`} className="subitem__label">
                    <input type="checkbox" id={`subitem-b1`} />
                    <span className="subitem__checkmark"></span>
                    <span className="subitem__content">B1</span>
                  </label>
                  <label htmlFor={`subitem-b2`} className="subitem__label">
                    <input type="checkbox" id={`subitem-b2`} />
                    <span className="subitem__checkmark"></span>
                    <span className="subitem__content">B2</span>
                  </label>
                </>
              );
            })}
          </div>
          <a href="https://grammarway.com/ru/demonstrative-pronouns" className="search__link">
            Demonstrative pronouns
          </a>
        </div>
      ) : null}

      <Select title={"A1"} icon={A1}>
        <SelectItem title={lang ? "Времена глагола" : "Verb tenses"}>
          <SelectSubitem title={"Present Continuous"} />
          <SelectSubitem title={"Past Simple"} />
          <SelectSubitem title={"Present Simple"} />
        </SelectItem>
        <SelectItem title={lang ? "Словообразование" : "Word formation"}>
          <SelectSubitem title={"Possessive Case"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Parts of speech"}>
          <SelectSubitem title={"Prepositions"} />
          <SelectSubitem title={"Pronouns"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Modal verbs"}>
          <SelectSubitem title={"Can и Could"} />
          <SelectSubitem title={"Dare"} />
          <SelectSubitem title={"Had better"} />
          <SelectSubitem title={"Have to"} />
          <SelectSubitem title={"May и Might"} />
          <SelectSubitem title={"Must"} />
          <SelectSubitem title={"Need"} />
          <SelectSubitem title={"Shall"} />
          <SelectSubitem title={"Should и Ought to"} />
          <SelectSubitem title={"To be to"} />
          <SelectSubitem title={"Will и Would"} />
        </SelectItem>
        <SelectItem title={lang ? "Глаголы" : "Verbs"}>
          <SelectSubitem title={"Infinitive"} />
        </SelectItem>
        <SelectItem title={lang ? "Обороты и Конструкции" : "Turnovers and constructions"}>
          <SelectSubitem title={"There is / There are"} />
          <SelectSubitem title={"To be going to"} />
        </SelectItem>
        <SelectItem title={lang ? "Предложение" : "Sentence "}>
          <SelectSubitem title={"Compound and Complex Sentences"} />
        </SelectItem>
      </Select>
      <Select title={"A2"} icon={A2}>
        <SelectItem title={lang ? "Времена глагола" : "Verb tenses"}>
          <SelectSubitem title={"Present Continuous"} />
          <SelectSubitem title={"Past Simple"} />
          <SelectSubitem title={"Present Simple"} />
        </SelectItem>
        <SelectItem title={lang ? "Словообразование" : "Word formation"}>
          <SelectSubitem title={"Possessive Case"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Parts of speech"}>
          <SelectSubitem title={"Prepositions"} />
          <SelectSubitem title={"Pronouns"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Modal verbs"}>
          <SelectSubitem title={"Can и Could"} />
          <SelectSubitem title={"Dare"} />
          <SelectSubitem title={"Had better"} />
          <SelectSubitem title={"Have to"} />
          <SelectSubitem title={"May и Might"} />
          <SelectSubitem title={"Must"} />
          <SelectSubitem title={"Need"} />
          <SelectSubitem title={"Shall"} />
          <SelectSubitem title={"Should и Ought to"} />
          <SelectSubitem title={"To be to"} />
          <SelectSubitem title={"Will и Would"} />
        </SelectItem>
        <SelectItem title={lang ? "Глаголы" : "Verbs"}>
          <SelectSubitem title={"Infinitive"} />
        </SelectItem>
        <SelectItem title={lang ? "Обороты и Конструкции" : "Turnovers and constructions"}>
          <SelectSubitem title={"There is / There are"} />
          <SelectSubitem title={"To be going to"} />
        </SelectItem>
        <SelectItem title={lang ? "Предложение" : "Sentence "}>
          <SelectSubitem title={"Compound and Complex Sentences"} />
        </SelectItem>
      </Select>
      <Select title={"B1"} icon={B1}>
        <SelectItem title={lang ? "Времена глагола" : "Verb tenses"}>
          <SelectSubitem title={"Present Continuous"} />
          <SelectSubitem title={"Past Simple"} />
          <SelectSubitem title={"Present Simple"} />
        </SelectItem>
        <SelectItem title={lang ? "Словообразование" : "Word formation"}>
          <SelectSubitem title={"Possessive Case"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Parts of speech"}>
          <SelectSubitem title={"Prepositions"} />
          <SelectSubitem title={"Pronouns"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Modal verbs"}>
          <SelectSubitem title={"Can и Could"} />
          <SelectSubitem title={"Dare"} />
          <SelectSubitem title={"Had better"} />
          <SelectSubitem title={"Have to"} />
          <SelectSubitem title={"May и Might"} />
          <SelectSubitem title={"Must"} />
          <SelectSubitem title={"Need"} />
          <SelectSubitem title={"Shall"} />
          <SelectSubitem title={"Should и Ought to"} />
          <SelectSubitem title={"To be to"} />
          <SelectSubitem title={"Will и Would"} />
        </SelectItem>
        <SelectItem title={lang ? "Глаголы" : "Verbs"}>
          <SelectSubitem title={"Infinitive"} />
        </SelectItem>
        <SelectItem title={lang ? "Обороты и Конструкции" : "Turnovers and constructions"}>
          <SelectSubitem title={"There is / There are"} />
          <SelectSubitem title={"To be going to"} />
        </SelectItem>
        <SelectItem title={lang ? "Предложение" : "Sentence "}>
          <SelectSubitem title={"Compound and Complex Sentences"} />
        </SelectItem>
      </Select>
      <Select title={"B2"} icon={B2}>
        <SelectItem title={lang ? "Времена глагола" : "Verb tenses"}>
          <SelectSubitem title={"Present Continuous"} />
          <SelectSubitem title={"Past Simple"} />
          <SelectSubitem title={"Present Simple"} />
        </SelectItem>
        <SelectItem title={lang ? "Словообразование" : "Word formation"}>
          <SelectSubitem title={"Possessive Case"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Parts of speech"}>
          <SelectSubitem title={"Prepositions"} />
          <SelectSubitem title={"Pronouns"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Modal verbs"}>
          <SelectSubitem title={"Can и Could"} />
          <SelectSubitem title={"Dare"} />
          <SelectSubitem title={"Had better"} />
          <SelectSubitem title={"Have to"} />
          <SelectSubitem title={"May и Might"} />
          <SelectSubitem title={"Must"} />
          <SelectSubitem title={"Need"} />
          <SelectSubitem title={"Shall"} />
          <SelectSubitem title={"Should и Ought to"} />
          <SelectSubitem title={"To be to"} />
          <SelectSubitem title={"Will и Would"} />
        </SelectItem>
        <SelectItem title={lang ? "Глаголы" : "Verbs"}>
          <SelectSubitem title={"Infinitive"} />
        </SelectItem>
        <SelectItem title={lang ? "Обороты и Конструкции" : "Turnovers and constructions"}>
          <SelectSubitem title={"There is / There are"} />
          <SelectSubitem title={"To be going to"} />
        </SelectItem>
        <SelectItem title={lang ? "Предложение" : "Sentence "}>
          <SelectSubitem title={"Compound and Complex Sentences"} />
        </SelectItem>
      </Select>
      <Select title={"C1"} icon={C1}>
        <SelectItem title={lang ? "Времена глагола" : "Verb tenses"}>
          <SelectSubitem title={"Present Continuous"} />
          <SelectSubitem title={"Past Simple"} />
          <SelectSubitem title={"Present Simple"} />
        </SelectItem>
        <SelectItem title={lang ? "Словообразование" : "Word formation"}>
          <SelectSubitem title={"Possessive Case"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Parts of speech"}>
          <SelectSubitem title={"Prepositions"} />
          <SelectSubitem title={"Pronouns"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Modal verbs"}>
          <SelectSubitem title={"Can и Could"} />
          <SelectSubitem title={"Dare"} />
          <SelectSubitem title={"Had better"} />
          <SelectSubitem title={"Have to"} />
          <SelectSubitem title={"May и Might"} />
          <SelectSubitem title={"Must"} />
          <SelectSubitem title={"Need"} />
          <SelectSubitem title={"Shall"} />
          <SelectSubitem title={"Should и Ought to"} />
          <SelectSubitem title={"To be to"} />
          <SelectSubitem title={"Will и Would"} />
        </SelectItem>
        <SelectItem title={lang ? "Глаголы" : "Verbs"}>
          <SelectSubitem title={"Infinitive"} />
        </SelectItem>
        <SelectItem title={lang ? "Обороты и Конструкции" : "Turnovers and constructions"}>
          <SelectSubitem title={"There is / There are"} />
          <SelectSubitem title={"To be going to"} />
        </SelectItem>
        <SelectItem title={lang ? "Предложение" : "Sentence "}>
          <SelectSubitem title={"Compound and Complex Sentences"} />
        </SelectItem>
      </Select>
      <Select title={"C2"} icon={C2}>
        <SelectItem title={lang ? "Времена глагола" : "Verb tenses"}>
          <SelectSubitem title={"Present Continuous"} />
          <SelectSubitem title={"Past Simple"} />
          <SelectSubitem title={"Present Simple"} />
        </SelectItem>
        <SelectItem title={lang ? "Словообразование" : "Word formation"}>
          <SelectSubitem title={"Possessive Case"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Parts of speech"}>
          <SelectSubitem title={"Prepositions"} />
          <SelectSubitem title={"Pronouns"} />
        </SelectItem>
        <SelectItem title={lang ? "Части речи" : "Modal verbs"}>
          <SelectSubitem title={"Can и Could"} />
          <SelectSubitem title={"Dare"} />
          <SelectSubitem title={"Had better"} />
          <SelectSubitem title={"Have to"} />
          <SelectSubitem title={"May и Might"} />
          <SelectSubitem title={"Must"} />
          <SelectSubitem title={"Need"} />
          <SelectSubitem title={"Shall"} />
          <SelectSubitem title={"Should и Ought to"} />
          <SelectSubitem title={"To be to"} />
          <SelectSubitem title={"Will и Would"} />
        </SelectItem>
        <SelectItem title={lang ? "Глаголы" : "Verbs"}>
          <SelectSubitem title={"Infinitive"} />
        </SelectItem>
        <SelectItem title={lang ? "Обороты и Конструкции" : "Turnovers and constructions"}>
          <SelectSubitem title={"There is / There are"} />
          <SelectSubitem title={"To be going to"} />
        </SelectItem>
        <SelectItem title={lang ? "Предложение" : "Sentence "}>
          <SelectSubitem title={"Compound and Complex Sentences"} />
        </SelectItem>
      </Select>

      <button className="button__save">{lang ? "Сохранить" : "Save"}</button>
    </div>
  );
};

export default MainPage;
