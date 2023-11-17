import Navbar from "../components/navbar";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <Navbar currentPage={0}></Navbar>
      <div className="container">
        <div className="row">
          <p className="text-wrap">
            This was a game built to better learn networking capabilities and
            player cooperation in games
          </p>
        </div>
        <div className="row">
          <p className="text-wrap">
            The goal of Mendax is to fight your way through a cave with friends,
            with different minigames to experience along the way
          </p>
        </div>
        <div className="row">
          <h2><b>Minigames</b></h2>
        </div>
        <div className="row">
          <p className="text-wrap">
            We have developed 3 different minigames for players to compete or work
            together in:
          </p>
        </div>
        <div className="row">
          <h5><b>Riddle game</b></h5>
        </div>
        <div className="row">
          <p className="text-wrap">
            A random riddle will be generated for all players, whoever guesses
            right first in the game chat we implemented wins the most points!
            There are also helpful hints to collect along the way
          </p>
        </div>
        <div className="row">
          <img
            className="img-fluid pictureSize"
            src="./riddle.webp"
            alt="Riddle Mingame Gameplay"
          />
        </div>
        <div className="row">
          <h5><b>Arena battler</b></h5>
        </div>
        <div className="row">
          <p className="text-wrap">
            This mingame gives the players a chance at combat, where the enemies
            are synced between all players and the game ends whenever players
            have defeated all opponents. Just make sure to complete it fast
            enough, or the enemies might become too powerful to handle.
          </p>
        </div>
        <div className="row">
          <img
            className="img-fluid pictureSize"
            src="./arena.webp"
            alt="Arena Mingame Gameplay"
          />
        </div>
        <div className="row">
          <h5><b>Rhythm game</b></h5>
        </div>
        <div className="row">
          <p className="text-wrap">
            The rhythm game is a bit of a different pace from the two prior
            minigames, but it gives the players the opportunity to show off
            their reaction time and adaptability. Scores for each player are
            calcualted and dynamically updated and shown, and the players
            receive coin depending on their placement in the minigame.
          </p>
        </div>
        <div className="row">
          <img
            className="img-fluid pictureSize"
            src="./rhythm.webp"
            alt="Rhythm Mingame Gameplay"
          />
        </div>
        <div className="row">
          <h2><b>Final Boss</b></h2>
        </div>
        <div className="row">
          <p className="text-wrap">
            We implemented the final boss have a lot of unique mechanics that
            players would need to figure out as they played through the game.
            The boss battle consists of multiple rounds where players will need
            to be able to think of ways to beat the boss before their health
            reduces to zero.
          </p>
        </div>
        <div className="row">
          <img
            className="img-fluid pictureSize"
            src="./boss.webp"
            alt="Final Boss Gameplay"
          />
        </div>
      </div>  
    </React.Fragment>
  );
}

export default Home;
