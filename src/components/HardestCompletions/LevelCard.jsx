import "./hardest-completions.css";

function LevelCard({ index , level }) {

  return (
    <div className="level-card">
      <p>{index + 1} - {level}</p>
    </div>
  );
}

export default LevelCard;
