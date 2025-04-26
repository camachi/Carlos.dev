import profileImg from './assets/profile2.png';
function HomePage()
{
  return(
    <div className="homepage-div">
        <div className="homepage-contenido">
           <div className='homepage-text'>
            <h1>Carlos Manuel</h1>
            <h2>Software Dev / Full-Stack Dev</h2>
            <button className='hireme-button'>Hire Me!</button>
           </div>

           <div className='homepage-imagen'>
            <img className='profileimage' src={profileImg} alt="Foto de perfil" />
            </div>
        </div>
        
    </div>
  );  
}

export default HomePage