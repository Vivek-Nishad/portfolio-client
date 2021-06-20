import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Works.css";
import WorkCard from "../components/WorkCard";

const WORKS_DATA_URL = "https://portfolio-data-vk.herokuapp.com/api/worksdata";

const Works = () => {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    axios
      .get(WORKS_DATA_URL)
      .then((res) => {
        setWorkData(res.data);
      })
      .catch((err) => {
        console.error("err => " + err);
      });
  }, []);

  return (
    <div className="works" id="works">
      <div className="worksContainer">
        <div className="worksHead">
          <h3>Works</h3>
          <h1>Projects</h1>
          <p>Here you can find some of the projects that I created</p>
        </div>
        <div className="cardsContainer">
          {workData.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
        {/* <div className="cardsContainer">
          {WorksData.map((workData) => (
            <WorkCard key={workData.id} workData={workData} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Works;
