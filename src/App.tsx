
import mobileImage from '../src/assets/Mobile.jpg';

const IMAGES = {
  mobile: mobileImage,
};

import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to the App</h1>
      <img src={IMAGES.mobile} alt="Mobile"  />
    </div>
  );
}

export default App;