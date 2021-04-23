import './App.css';
import UploadForm from './display/UploadForm';

function App() {
  return (
    <div className="App">
        <nav className="navigation">
          <a className="nav-icon" href="/">@Tasveer</a>
        </nav>
        <hr className="nav-div-hr"/>
        <header>
          <h1 className="hero-heading">
            Your Gallery
          </h1>
          <p className="hero-quote">
            Add your home or family pics to your profile.
          </p>
          <UploadForm/>
        </header>
    </div>
  );
}

export default App;
