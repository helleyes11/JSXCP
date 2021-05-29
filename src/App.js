import logo from './logo.svg';
import './App.css';
import MHL from './MHL.jpg'
import style from './style.css'


function App() {
  return (
    <div className="App">
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title-red">Aida Brahim</h1>
          <br />
          <img src={MHL} alt="heroes" width={400} height={300}/>
          <br />
          <img src="/MH.jpg" alt="heroes" width={400} height={300} />
        </div>
        {/* <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/72MeeEMDXps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
