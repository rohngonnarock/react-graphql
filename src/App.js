import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

import { gql, useQuery } from "@apollo/client";

const getData = gql`
  {
    users {
      firstName
      lastName
      email
    }
  }
`;

function App() {
  const { error, loading, data } = useQuery(getData);
  const [gData, setGData] = useState();

  useEffect(() => {
    if (data && data.users) {
      setGData(data.users);
    }
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        {gData &&
          gData.map &&
          gData.map((user) => (
            <div>
              {" "}
              {user.firstName} : {user.lastName} : {user.email}{" "}
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
