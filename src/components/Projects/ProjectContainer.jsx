import ProjectCard from './ProjectCard';
import './project-container.css'

function ProjectContainer() {
    return (
        <>
            <section className='project-section'>
                <ProjectCard jsonid="kflist" />
                <ProjectCard jsonid="gdspamtrainer" />
            </section>
        </>
    );
}

export default ProjectContainer