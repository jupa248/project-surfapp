import React from "react";
import carcavelos from "./carcavelos.jpg";
import guincho from "./guincho.jpg";
import sol from "./sol.svg";
import waves from "./waves.svg";
import waveDirection from "./waveDirection.svg";
import temperaturaAgua from "./tempraturaAgua.svg";

const Temperature = ({ temperature }) => {
  console.log(temperature);

  return (
    <div>
      <section className="header">
        <h1 className="logo">DuckDive</h1>
        <label className="bMenu">
          <span className="bMenu-top"></span>
          <span className="bMenu-middle"></span>
        </label>
      </section>
      <div className="titleSS">
        <h3>Popular surf spots</h3>
        <h4 className="SeeAll">See All</h4>
      </div>
      <section className="surfSpots">
        <div className="card">
          <img className="images" src={carcavelos} alt="cenas" />
          <div className="icons">
            <div className="icon-item">
              <img src={sol}></img>
              <h4>{`${parseInt(temperature[0].sstMax)}º`}</h4>
            </div>
            <div className="icon-item">
              <img src={waves}></img>
              <h4>{`${temperature[0].totalSeaMin} m`}</h4>
            </div>
            <div className="icon-item">
              <img src={temperaturaAgua}></img>
              <h4>{`${temperature[0].sstMin}º`}</h4>
            </div>
            <div className="icon-item">
              <img src={waveDirection}></img>
              <h4>{`${temperature[0].predWaveDir}`}</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="images" src={guincho} alt="cenas" />

          <div className="icons">
            <div className="icon-item">
              <h3 className="card-title">Praia de Carcavelos</h3>
              <img src={sol}></img>
              <h4>{`${parseInt(temperature[1].sstMax)}º`}</h4>
            </div>
            <div className="icon-item">
              <img src={waves}></img>
              <h4>{`${temperature[1].totalSeaMin} m`}</h4>
            </div>
            <div className="icon-item">
              <img src={temperaturaAgua}></img>
              <h4>{`${temperature[1].sstMin}º`}</h4>
            </div>
            <div className="icon-item">
              <img src={waveDirection}></img>
              <h4>{`${temperature[1].predWaveDir}`}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Temperature;
