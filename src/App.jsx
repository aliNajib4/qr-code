import qrImg from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="qr-card">
      <div className="img">
        <img src={qrImg} alt="qr img" />
      </div>
      <div className="description">
        <h2 className="head-card">
          Improve your front-end skills by building projects
        </h2>
        <p className="content-card">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
