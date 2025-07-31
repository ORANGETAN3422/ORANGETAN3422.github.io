import React, { useEffect, useState } from "react";
import "./hardest-completions.css";
import LevelCard from "./LevelCard";

function HardestCompletions() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch("/hardest-info.json")
      .then((res) => res.json())
      .then(setList)
      .catch(console.error);
  }, []);

  if (!list) return <div>Loading...</div>;

  return (
    <div className="completions-wrapper">
      <h2 className="completions-con-title">My Hardest Completions</h2>
      <br />
      <div className="completions-container">
                <div className="completions-container-border" />
        {list.main_list.map((level, index) => (
          <LevelCard key={toString(index) + window.btoa(level)} index={index} level={level} />
        ))}
      </div>
    </div>
  );
}

export default HardestCompletions;
