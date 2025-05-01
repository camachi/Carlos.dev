function SkillBar({img,name})
{
    return(
        <div className="skills-card">
                
                <img alt="tech-logo" src={img} className='tech-images' />
              
                <h4>{name}</h4>
                

            </div>
    );
}

export default SkillBar