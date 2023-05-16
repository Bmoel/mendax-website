import Navbar from "../components/navbar";
import { useRef } from "react";
import "./Home.css";

const DESTOP_SIZE: number = 800;

function Home() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  var displayType: string = "";
  if (windowSize.current[0] < DESTOP_SIZE && windowSize.current[1] < DESTOP_SIZE) {
    displayType = "Mobile";
  } else {
    displayType = "Desktop";
  }
  return (
    <>
      <Navbar currentPage={0}></Navbar>
      <div className="homeMargin">
        <p>
          This was a game built to better learn networking capabilities and
          player cooperation in games
        </p>
        <p>
          The goal of Mendax is to fight your way through a cave with friends,
          with different minigames to experience along the way
        </p>
        <h2>
          <b>Minigames</b>
        </h2>
        <p>
          We have developed 3 different minigames for players to compete or work
          together in:
        </p>
        <div>
          <h5>
            <b>Riddle game</b>
          </h5>
          <p className={"minigameText" + displayType}>
            A random riddle will be generated for all players, whoever guesses
            right first in the game chat we implemented wins the most points!
            There are also helpful hints to collect along the way
          </p>
          <img
            className={"minigameImg" + displayType}
            src="./riddle.webp"
            alt="Riddle Mingame Gameplay"
          />
        </div>
        <div>
          <h5>
            <b>Arena battler</b>
          </h5>
          <p className={"minigameText" + displayType}>
            This mingame gives the players a chance at combat, where the enemies
            are synced between all players and the game ends whenever players
            have defeated all opponents. Just make sure to complete it fast
            enough, or the enemies might become too powerful to handle.
          </p>
          <img
            className={"minigameImg" + displayType}
            src="./arena.webp"
            alt="Arena Mingame Gameplay"
          />
        </div>
        <div>
          <h5>
            <b>Rhythm game</b>
          </h5>
          <p className={"minigameText" + displayType}>
            The rhythm game is a bit of a different pace from the two prior
            minigames, but it gives the players the opportunity to show off
            their reaction time and adaptability. Scores for each player are
            calcualted and dynamically updated and shown, and the players
            receive coin depending on their placement in the minigame.
          </p>
          <img
            className={"minigameImg" + displayType}
            src="./rhythm.webp"
            alt="Rhythm Mingame Gameplay"
          />
        </div>
        <div>
          <h2>
            <b>Final Boss</b>
          </h2>
          <p className={"minigameText" + displayType}>
            We implemented the final boss have a lot of unique mechanics that
            players would need to figure out as they played through the game.
            The boss battle consists of multiple rounds where players will need
            to be able to think of ways to beat the boss before their health
            reduces to zero.
          </p>
          <img
            className={"minigameImg" + displayType}
            src="./boss.webp"
            alt="Final Boss Gameplay"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
