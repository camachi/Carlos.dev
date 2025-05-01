import TechSkills from "./TechSkills";
import image1 from './assets/skills1.png';
import image2 from './assets/skills2.png';
import image3 from './assets/skills3.png';
import image4 from './assets/skills4.png';
import image5 from './assets/skills5.png';
import image6 from './assets/skills6.png';
import image7 from './assets/skills7.png';
import image8 from './assets/skills8.png';
import image9 from './assets/skills9.png';
import image10 from './assets/skills10.png';
import image11 from './assets/skills11.png';
import image12 from './assets/skills12.png';
import image13 from './assets/skills13.png';
import image14 from './assets/skills14.png';
import image15 from './assets/skills15.png';
import SkillBar from "./Skillbar";
function SkillsPage()
{
    return(
        <div className="skillspage-div">
            <TechSkills></TechSkills>
            <div className="skills-title">
                <h2><span className="colorp">Technologies </span>- I use.</h2>
            </div>
            <div className="skills-description">
                <p>Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</p>
            </div>
            <div className="skills-content-div">
                <SkillBar name={"Html"} img={image1}></SkillBar>
                <SkillBar name={"CSS"} img={image2}></SkillBar>
                <SkillBar name={"JavaScript"} img={image3}></SkillBar>
                <SkillBar name={"React"} img={image4}></SkillBar>
                <SkillBar name={"Node"} img={image5}></SkillBar>
                <SkillBar name={"PHP"} img={image6}></SkillBar>
                <SkillBar name={"Electron"} img={image7}></SkillBar>
                <SkillBar name={"Git"} img={image8}></SkillBar>
                <SkillBar name={"GitHub"} img={image9}></SkillBar>
                <SkillBar name={"SQL"} img={image10}></SkillBar>
                <SkillBar name={"C#"} img={image11}></SkillBar>
                <SkillBar name={"Blender"} img={image12}></SkillBar>
                <SkillBar name={"AE"} img={image13}></SkillBar>
                <SkillBar name={"UE"} img={image14}></SkillBar>
                <SkillBar name={"Unity"} img={image15}></SkillBar>
            </div>
            <div className="skills-title">
                <p>...and many more!</p>
            </div>
        </div>
    );

}

export default SkillsPage