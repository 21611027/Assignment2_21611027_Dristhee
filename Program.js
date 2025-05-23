import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

function Program() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    api.get(`/swim_program/${id}`).then(res => setProgram(res.data));
  }, [id]);

  if (!program) return <p>Loading...</p>;

  return (
    <div>
      <h1>{program.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: program.content.rendered }} />
    </div>
  );
}

export default Program;
