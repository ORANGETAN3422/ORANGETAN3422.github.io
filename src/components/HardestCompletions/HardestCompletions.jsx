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
    <div className="completions-container">
      {list.main_list.map((level, index) => (
        <LevelCard key={index} level={level} />
      ))}
    </div>
  );
}

export default HardestCompletions;
