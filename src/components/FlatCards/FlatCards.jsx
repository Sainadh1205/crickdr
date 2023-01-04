import { Data } from "../../Data/Data";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./flat-cards.css";

export const FlatCards = () => {
  const { flatCardsData } = Data;
  return (
    <Container>
      {flatCardsData.map((data, index) => (
        <Container
          className="flat-cards links"
          key={index}
          as={NavLink}
          to={`/flatCardsData/${index}`}
        >
          <img className="card-img" width={100} src={data.img} alt="loading" />
          <Container>
            <p style={{ marginBottom: 0 }}>News</p>
            <h3 className="flat-card-heading links text-align-left">
              {data.title}
            </h3>
            <h5 className="links">{data.subTitle}</h5>
            <p>{data.description}</p>
          </Container>
        </Container>
      ))}
    </Container>
  );
};
