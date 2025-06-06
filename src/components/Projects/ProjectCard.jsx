import React, { useEffect, useState } from 'react';
import './project-card.css';

function ProjectCard({ projectKey }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/card-info.json')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  const project = data.project_card_information[projectKey];

  return (
    <div className="card">
      <div className="card-border" />
      <input
        className="card-hitbox"
        onClick={() => window.open(project.hyperlink, "_self")}
        type="button"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;