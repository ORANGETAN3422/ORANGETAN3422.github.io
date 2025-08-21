import "./hardest-completions.css";

import easy from "/icons/demon-easy.png";
import medium from "/icons/demon-medium.png";
import hard from "/icons/demon-hard.png";
import insane from "/icons/demon-insane.png";
import extreme from "/icons/demon-extreme.png";

import trophy_1 from "/icons/trophy-1.png";
import trophy_2 from "/icons/trophy-2.png";
import trophy_3 from "/icons/trophy-3.png";

const trophies = {
  1: trophy_1,
  2: trophy_2,
  3: trophy_3,
};

const difficulties = {
  Easy: easy,
  Medium: medium,
  Hard: hard,
  Insane: insane,
  Extreme: extreme,
};

function LevelCard({ level }) {
  const icon = trophies[level.position] || difficulties[level.difficulty] || easy;

  return (
    <div className="level-card">
      <img src={icon} alt="O" className="card-icon"/>
      <p>
        - {level.name}
      </p>
    </div>
  );
}

export default LevelCard;
