import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./Home.css";
import "./Modals.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [skills, setSkills] = useState();
  const [welcomeText, setWelcomeText] = useState();
  const [showModal, setShowModal] = useState(false);
  const [skillToShow, setSkillToShow] = useState();
  const [skillUpdated, setSkillUpdated] = useState("");

  const loadUser = async () => {
    let user = "Usuário logado";

    var formatName = user.split(" ");

    setWelcomeText("Olá, " + formatName[0]);
  };

  const loadSkills = async () => {
    let skills = [
      {
        id: "0",
        username: "abc@email.com",
        name: "Javascript",
        description: "Descricao 1",
        image_url: "",
        skill_level: "3",
      },
      {
        id: "1",
        username: "def@email.com",
        name: "PHP",
        description: "Descricao 2",
        image_url: "",
        skill_level: "2",
      },
      {
        id: "2",
        username: "ghi@email.com",
        name: "C#",
        description: "Descricao 3",
        image_url: "",
        skill_level: "1",
      },
      {
        id: "3",
        username: "jkl@email.com",
        name: "Java",
        description: "Descricao  4",
        image_url: "",
        skill_level: "1",
      },
    ];

    return setSkills(skills);
  };

  useEffect(() => {
    loadUser();
    loadSkills();
  }, []);

  const changeUserSkill = (user) => {
    let skillsBefore = skills;
    skillsBefore[user.id].name = skillUpdated;

    setSkills(skillsBefore);
    setShowModal(false);
  };

  const Modal = ({}) => {
    return (
      <div key={skillToShow.id} className="modalBackground">
        <div class="modalContent">
          <div class="modalTop">
            <label class="modalTitle">Detalhes</label>
            <span
              class="modalCloseButton"
              onClick={() => {
                setShowModal(false);
              }}
            >
              &times;
            </span>
          </div>

          <div class="modalBodyContent">
            <label class="modalLabelBold">{skillToShow.username}</label>
            <label class="modalLabel">{skillToShow.name}</label>
            <br />
            <br />

            <label class="modalLabelBold">Habilidade</label>
            <select
              class="modalInput"
              id="skillSelect"
              value={skillUpdated}
              onChange={(e) => {
                setSkillUpdated(e.target.value);
              }}
            >
              <option value="">Selecione</option>
              <option value="Javascript">Javascript</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Java">Java</option>
            </select>

            <button
              className="loginButtonModal"
              onClick={() => {
                changeUserSkill(skillToShow);
              }}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SkillsCard = ({ item }) => {
    return (
      <div
        key={item.id}
        className="skillCard"
        onClick={() => {
          setShowModal(true);
          setSkillToShow(item);
        }}
      >
        <span>
          <strong>{item.username}</strong>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <span>{item.name}</span>
          <span>
            <strong>Skill Level:</strong> {item.skill_level}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Box className="box">
      <Box className="divHome">
        <div className="divHeaderHome">
          <img
            alt="company logo"
            className="img"
            src="http://www.neki-it.com.br/brand/assets/images/logo-neki-oficial-1596x452.png"
          />
          <Link className="logoutText" to="/">
            Sair{" "}
          </Link>
        </div>
        <div className="divWelcomeHome">{welcomeText}</div>
        <div className="divCards">
          {skills &&
            skills?.map((item, index) => {
              return <SkillsCard key={item.id} item={item} />;
            })}
        </div>
        {showModal && <Modal key={skillToShow.id} />}
      </Box>
    </Box>
  );
};

export default Home;
