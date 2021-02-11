import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [term, setTerm] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("search!");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term,
    });

    history.push(`/search`);
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
