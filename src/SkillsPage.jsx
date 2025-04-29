import TechSkills from "./TechSkills";
import image1 from './assets/skills1.png';
function SkillsPage()
{
    return(
        <div className="skillspage-div">
            <TechSkills></TechSkills>
            <div className="skills-title">
                <h2><span className="colorp">Technical</span> - Skills</h2>
            </div>
            <div className="skills-content-div">
                <div className="skills-card">
                <div className="skills-card-logo-div">
                <img alt="tech-logo" src={image1} className='tech-images' />
                </div>

                <div className="skills-card-name">
                <h3>Html</h3>
                </div>

                </div>

            </div>
        </div>
    );

}

export default SkillsPage