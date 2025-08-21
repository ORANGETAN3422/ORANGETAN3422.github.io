import "./hardest-completions.css";
import LevelCard from "./LevelCard";
import { useMainList } from "../../context/MainListContext";

function HardestCompletions() {
  const mainList = useMainList();

  if (!mainList || mainList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="completions-wrapper">
      <h2 className="completions-con-title">My Hardest Completions</h2>
      <br />
      <div className="completions-container">
        <div className="completions-container-border" />
        {mainList.map((level, index) => (
          <LevelCard
            key={level.id ? `${level.id}` : `level-${index}`}
            index={index}
            level={level}
          />
        ))}
      </div>
    </div>
  );
}

export default HardestCompletions;
