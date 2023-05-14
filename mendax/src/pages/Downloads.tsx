import Navbar from "../components/navbar";
import "./Downloads.css";

function Downloads() {
  return (
    <div className="download_margin">
      <Navbar currentPage={1}></Navbar>
      <p >Check out our game on itch.io!</p>
      <iframe
        src="https://itch.io/embed/2064079"
        width="552"
        height="167"
      >
        <a href="https://freemanspray.itch.io/mendax">Mendax by freemanspray</a>
      </iframe>
    </div>
  );
}

export default Downloads;
