import { Carousel, Container } from "react-bootstrap";
import "./body.css";
import { Data } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import { FlatCards } from "../FlatCards/FlatCards";

export const Body = () => {
  const { carouselData, minorCardsData, bodySideCards } = Data;

  return (
    <div className="body-container">
      <div className="body-main-content">
        <Carousel
          slide={true}
          className="card links"
          style={{ backgroundColor: "#4f5e5e" }}
          interval={5000}
          // fade
          indicators={false}
        >
          {carouselData.map((data, index) => (
            <Carousel.Item
              as={NavLink}
              className="links"
              to={`/carouselData/${index}`}
              key={index}
            >
              <img className="d-block w-100" src={data.img} alt="First slide" />
              <Container style={{ height: "15vh" }}>
                <h2
                  className="carousel-font text "
                  style={{ color: "white", textAlign: "center" }}
                >
                  {data.title}
                </h2>
                <h6 style={{ textAlign: "right" }}>
                  {data.imgCreditBy.length
                    ? data?.imgCreditBy
                    : "google images"}
                </h6>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="minor-cards">
          {minorCardsData.map((data, index) => (
            <Container
              className="minor-card card links"
              key={index}
              as={NavLink}
              to={`/minorCardsData/${index}`}
            >
              <div className="card-div">
                <p className="card-tag">{data.tag}</p>
                <img className="card-img" src={data.img} alt="loading" />
              </div>
              <h6 className="minor-card-title">{data.title}</h6>
            </Container>
          ))}
        </div>
        <div className="divider "></div>
        <FlatCards className="card" />
      </div>
      <div className="body-side-content">
        {bodySideCards.map((data, index) => (
          <Container
            className="side-card card links"
            key={index}
            as={NavLink}
            to={`/bodySideCards/${index}`}
          >
            <p className="card-tag">{data.tag}</p>
            <img
              width={"100%"}
              className="card-img"
              src={data.img}
              alt="loading"
            />
            <h6 className="side-card-title">{data.title}</h6>
          </Container>
        ))}
      </div>
    </div>
  );
};
