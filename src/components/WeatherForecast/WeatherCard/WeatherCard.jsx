import "./WeatherCard.css";
import { useState, useContext } from "react";
import ApiContext from "../../../contexts/ApiContext.js";
import moment from "moment";
import { sol, arrowUp, arrowDown } from "../../media/exportMedia.jsx";

const WeatherCard = (props) => {
  const { element, index } = props;
  const { openWeatherInfo } = useContext(ApiContext);
  const date = new Date();
  const [time] = useState(date.getHours());

  // FINISH THIS PART!!!
  let timezone = 3600;
  let sunrise = 1651728839;

  let x = moment.utc(sunrise, "X").add(timezone, "seconds").format("HH:mm a");

  console.log(x);

  return (
    <div key={index} className="weather-card">
      <div className="weather-card-header">
        <div className="weather-name-temp">
          <div className="weather-name">
            <p>{element.name}</p>
            <h6>{time > 12 ? `${time - 12} pm` : `${time} am`}</h6>
          </div>
          <div className="weather-temp">
            <h2>
              {openWeatherInfo &&
                openWeatherInfo
                  .filter((el) => el.name.includes(element.name))
                  .map((el) => parseFloat(el.main.temp).toFixed(1))}
            </h2>
          </div>
        </div>
        <div className="weather-icon">
          <img src={sol} alt="" />
        </div>
      </div>
      <div className="weather-card-body">
        <div className="temperature-max-min">
          <div className="temperature">
            <img src={arrowUp} alt="" />
            <p>{element.tMax}</p>
          </div>
          <div className="temperature">
            <img src={arrowDown} alt="" />
            <p>{element.tMin}</p>
          </div>
        </div>
        <div className="weather-day">
          <h5>Today</h5>
          <label className="days" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
