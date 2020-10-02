import React, { useState, useEffect } from "react";
/**
 *  Redux
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userDataReducer } from "./redux/actions/index";

function App({ name, userDataReducer }) {
  const [value, setvalue] = useState("");

  function chageValueInput(e) {
    console.log(e.target.value);
    setvalue(e.target.value);
  }


  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <input onChange={chageValueInput} value={value} type="text" />
      <button onClick={() => userDataReducer(value)}>Click me!</button>
      <h1>{name}</h1>
    </div>
  );
}

export default connect(
  (store) => ({ name: store.userReducer.name }),
  (dispatch) => bindActionCreators({ userDataReducer }, dispatch)
)(App);
