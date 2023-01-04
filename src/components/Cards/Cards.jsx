import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Data/Data";
import { FlatCards } from "../";
import "./cards.css";

export const Cards = () => {
  const { data, news } = useParams();

  const [newsDetails, setNewsDetails] = useState({});
  // let url =
  //   "https://www.cricbuzz.com/live-cricket-scores/32052/eng-vs-ind-2nd-test-india-tour-of-england-2021";
  // useEffect(() => {
  //   async function getLiveScore(url) {
  //     const data = await fetch(
  //       "https://cricket-api.vercel.app/cri.php?url=" + url
  //     );
  //   }
  //   getLiveScore(url);
  // }, []);
  // set cricbuzz.com live cricket score url.
  // setInterval(function () {}, 10000);

  useEffect(() => {
    setNewsDetails(Data[data][news]);
  }, []);

  return (
    <div className="container card cards-container bg-light">
      <div className="container ">
        <h2>{newsDetails.title}</h2>
        <div className="img-container">
          <img src={newsDetails.img} width={"80%"} alt="loading" />
        </div>
        <div className="container cards-text-container">
          <h6 style={{ textAlign: "right" }}>
            {newsDetails.imgCreditBy && newsDetails.imgCreditBy.length
              ? newsDetails?.imgCreditBy
              : "google image"}
          </h6>
          <p className="cards-text">{newsDetails.fullPageData}</p>
        </div>
      </div>
      <FlatCards />
    </div>
  );
};
