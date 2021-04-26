import React, {useState} from 'react';
import './App.css';
import ImageGrid from './display/ImageGrid';
import Modal from './display/Modal';
import UploadForm from './display/UploadForm';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

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
          <UploadForm />
          <ImageGrid setSelectedImage={setSelectedImage}/>
          {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
          <hr className="nav-div-hr"/>
          <footer className="footer"> All Rights Reserved <span className="footer-sitename">@</span>Tasveer</footer>
        </header>
    </div>
  );
}

export default App;
