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
import Steafenpic from "../../assets/stefan.png";
import AnubhaPic from "../../assets/anubha-pic.jpeg";
import BomaPic from "../../assets/boma-pic.jpg";
import state from "../../store";

function LandingPage() {
  const teamMembers = [
    {
      name: "Stefan Hafele",
      designation: "Project Manager",
      profilePic: Steafenpic,
      socialLinks: "",
    },
    {
      name: "Stefan Hafele",
      designation: "Project Manager",
      profilePic: Steafenpic,
      socialLinks: "",
    },
    {
      name: "Stefan Hafele",
      designation: "Project Manager",
      profilePic: Steafenpic,
      socialLinks: "",
    },
    {
      name: "Rishabh Raghwendra",
      designation: "Blockchain Developer",
      profilePic: Rishbhpic,
      socialLinks: "",
    },
    {
      name: "Anubha Kumari",
      designation: "Frontend Developer",
      profilePic: AnubhaPic,
      socialLinks: "",
    },
    {
      name: "Mercy Boma",
      designation: "Frontend Developer",
      profilePic: BomaPic,
      socialLinks: "",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <section className="hero_section">
          <div className="text_container">
            <span className="name_text">STAKEBOOST</span>
            <span className="small_text">
              Stakeboost is a yield staking aggregator. It stakes & restakes
              based on best APR provided by Different provide
            </span>
            <span className="button_conatiner">
              <AppButton
                styles={{
                  display: "flex",
                  gap: "0.5rem",
                  backgroundColor: "rgb(135,169,240)",
                }}
                onClick={() => (state.isLandingPage = false)}
              >
                <b>Launch App</b>
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
            <h1>$60.30m</h1>
            <small>TOTAL LIQUIDITY STAKED</small>
          </span>
          <span>
            <h1>$3.18m</h1>
            <small>TOTAL APR EARNED</small>
          </span>
          <span>
            <h1>$40.37k</h1>
            <small>AMOUNT DEPOSITED IN LAST 24HR</small>
          </span>
        </section>
      </div>
      <section className="team_section">
        <div>
          <span className="team_heading">Our Team</span>
        </div>
        <div className="team_cards">
          {teamMembers.map((member, index) => (
            <div className="rishabh_infodiv" key={index}>
              <span>
                <img className="rishabh_card" src={member.profilePic}></img>
              </span>
              <span>{member.name}</span>
              <span>{member.designation}</span>
              <span>
                <BsLinkedin style={{ marginRight: "1rem" }}></BsLinkedin>
                <BsGithub></BsGithub>
              </span>
            </div>
          ))}
          {/* <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Steafenpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin style={{ marginRight: "1rem" }}></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div>
          <div className="rishabh_infodiv">
            <span>
              <img className="rishabh_card" src={Steafenpic}></img>
            </span>
            <span>Rishabh Raghwendra</span>
            <span>Frontend developer</span>
            <span>
              <BsLinkedin style={{ marginRight: "1rem" }}></BsLinkedin>
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
              <BsLinkedin style={{ marginRight: "1rem" }}></BsLinkedin>
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
              <BsLinkedin style={{ marginRight: "1rem" }}></BsLinkedin>
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
              <BsLinkedin style={{ marginRight: "1rem" }}></BsLinkedin>
              <BsGithub></BsGithub>
            </span>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
