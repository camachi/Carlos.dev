function ProjectsCard({image})
{
    return(
        <div className='projects-card'>
        <img className='project-image'alt='projects image' src={image}></img>
        </div>
    );
}

export default ProjectsCard