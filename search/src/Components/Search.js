import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const api_data = axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(Error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Search and display functionality</h2>
      {data &&
        data.map((key, index) => (
          <div key={index}>
            <div>Title : {data[0].title}</div>
            <div>Body: {data[0].body}</div>
          </div>
        ))}
    </div>
  );
};

export default Search;
