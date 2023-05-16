import Navbar from "../components/navbar";
import { useRef } from "react";
import "./Downloads.css";

const X_RATIO:number = 0.75
const Y_HEIGHT:number = 167

function Downloads() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  var x:number = windowSize.current[0] * X_RATIO
  var y:number = Y_HEIGHT
  return (
    <>
      <Navbar currentPage={1}></Navbar>
      <div className="download_margin">
        <p>Check out our game on itch.io!</p>
        <iframe src="https://itch.io/embed/2064079" width={x} height={y}>
          <a href="https://freemanspray.itch.io/mendax">
            Mendax by freemanspray
          </a>
        </iframe>
      </div>
    </>
  );
}

export default Downloads;
