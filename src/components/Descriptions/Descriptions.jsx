import React from "react";

import css from "./Descriptions.module.css";

import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const winUnit = units === "metric" ? "m/s" : "km/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: winUnit,
    },
  ];

  return (
    <div className={`${css.section} ${css.section__descriptions}`}>
      {cards.map(({ id, icon, title, data, unit }) => (
        <div className={css.card} key={id}>
          <div className={css.description__cardicon}>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}

      {/* <div className={css.card}>
        <div className={css.description__cardicon}>
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 &deg;C</h2>
      </div> */}
      {/* <div className={css.card}>
        <div className={css.description__cardicon}>
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 &deg;C</h2>
      </div>
      <div className={css.card}>
        <div className={css.description__cardicon}>
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 &deg;C</h2>
      </div>
      <div className={css.card}>
        <div className={css.description__cardicon}>
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 &deg;C</h2>
      </div> */}
    </div>
  );
};

export default Descriptions;
