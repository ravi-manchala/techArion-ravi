import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import { Link } from "react-router-dom";

const TableData = () => {
  const [getdata, setData] = useState();

  useEffect(() => {
    axios
      .get(" https://gorest.co.in/public/v1/todos")
      .then((resp) => setData(resp.data.data));
  }, []);
  return (
    <div>
      <div className={classes.containers}>
        {getdata &&
          getdata.map((data) => {
            return (
              <div key={data.user_id} className={classes.table}>
                <h6>{data.id}</h6>
                <h6>{data.user_id}</h6>
                <h6>{data.status}</h6>
                <h6>{data.title}</h6>
                <h6>{data.user_id}</h6>
              </div>
            );
          })}
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableData;
