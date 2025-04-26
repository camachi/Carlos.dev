function ProjectsCard({image})
{
    return(
        <div className='projects-card'>
        <img className='project-image' src={image}></img>
        </div>
    );
}

export default ProjectsCard