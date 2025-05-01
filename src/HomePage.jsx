import profileImg from './assets/profile2.png';

function HomePage()
{
  return(
    <div className="homepage-div">
      <div className='homepage-text'>
            <h1>Carlos <span className='colorp'>Manuel</span>.</h1>
            
            
        </div>
        <div className="homepage-contenido">
           <div className='homepage-imagen'>
            <img className='profileimage0' src={profileImg} alt="Foto de perfil" />
            </div>
        </div>
        <div className='homepage-text-footer'>
            <h1><span className='colorp'>Software</span> Developer.</h1>
        </div>
    </div>
  );  
}

export default HomePage