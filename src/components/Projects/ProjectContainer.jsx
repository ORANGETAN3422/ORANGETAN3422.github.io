import ProjectCard from './ProjectCard';
import './project-container.css'

function ProjectContainer() {
    return (
        <>
            <section className='project-section'>
                <ProjectCard projectKey="kf_list" />
                <ProjectCard projectKey="gd_spam_trainer" />
            </section>
        </>
    );
}

export default ProjectContainer