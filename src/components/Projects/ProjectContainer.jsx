import ProjectCard from "./ProjectCard";
import "./project-container.css";

function ProjectContainer() {
  return (
    <div className="project-container">
      <h2 className="project-con-title">My Projects</h2>
      <section className="project-section">
        <ProjectCard projectKey="kf_list" />
        <ProjectCard projectKey="gd_spam_trainer" />
        <ProjectCard projectKey="kf_challenges" />
      </section>
    </div>
  );
}

export default ProjectContainer;
