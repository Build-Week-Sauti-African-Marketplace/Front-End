import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchData, searchData, deleteItem } from "./actionCreators";
import "./Search.css";

const Search = props => {
  const [input, setInput] = useState("");

  useEffect(() => {
    props.fetchData();
  }, []);

  const searchItems = e => {
    e.preventDefault();
    props.searchData(input);
  };
  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="item-container">
      <form onSubmit={searchItems}>
        <ul>
          {props.data.map(i => (<div>
            <p className="delete-list" key={i.itemid}>
              {i.name}
              </p>
              <button
                onClick={e => {
                  e.preventDefault();
                  props.deleteItem(i.itemid);
                }}>
                delete
              </button>
              </div>
          ))}
        </ul>
        <label htmlFor="delete">Delete Item:</label>
        <input id="delete" name={input} value={input} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    data: state.data
  };
}
const mapDispatchToProps = {
  fetchData,
  searchData,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
