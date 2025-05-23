import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    api.get("/swim_program").then(res => setPrograms(res.data));
  }, []);

  return (
    <div>
      <h1>Swim Programs</h1>
      {programs.map(p => (
        <div key={p.id}>
          <h3><Link to={`/program/${p.id}`}>{p.title.rendered}</Link></h3>
        </div>
      ))}
    </div>
  );
}

export default Programs;
