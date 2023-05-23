import React from "react";
import "./index.css";
import Etheriumpic from "../../assets/etherium.png";
import { Navbar } from "../../components";
import AppButton from "../../components/CustomButton";
import AppCard from "../../components/CustomCard";
import Rishbhpic from "../../assets/rishabh.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function LandingPage() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="hero_section">
        <div className="text_container">
          <span className="name_text">STAKEBOOST</span>
          <span className="small_text">
            Stakeboost is a yield staking aggregator. It stakes & restakes based
            on best APR provided by Different provide
          </span>
          <span className="button_conatiner">
            <AppButton styles={{ display: "flex", gap: "0.5rem" }}>
              Launch App
            </AppButton>
          </span>
        </div>
        <div className="img_conatiner">
          <img className="img_conatiner" src={Etheriumpic}></img>
        </div>
      </section>
      <section className="stats_section">
        <span>
          <h1>$0.91</h1>
          <small>PRICE</small>
        </span>
        <span>
          <h1>$600.30m</h1>
          <small>TOTAL LIQUIDITY</small>
        </span>
        <span>
          <h1>$323.18b</h1>
          <small>TOTAL VOLUME</small>
        </span>
        <span>
          <h1>40.37k</h1>
          <small>TOTAL PAIRS</small>
        </span>
      </section>
      <section className="team_section">
        <div>
          <span className="team_heading">Our Team</span>
        </div>
        <div className="team_cards">
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Rishbhpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Rishbhpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Rishbhpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Rishbhpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Rishbhpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Rishbhpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
