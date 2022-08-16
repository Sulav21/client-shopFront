import React from "react";
import { Container } from "react-bootstrap";
import { CardComp } from "../../components/card-comp/CardComp";
import mrf from "../../images/bats/mrf1.jpg";
import kkr from "../../images/bats/kokaburra.jpg";
import gm from "../../images/bats/gm.jpg";
import "./batHome.css";
import { Link } from "react-router-dom";

const batHomeImages = [
  {
    _id: 1,
    src: mrf,
  },
  {
    _id: 2,
    src: kkr,
  },
  {
    _id: 3,
    src: gm,
  },
];

export const BatHome = () => {
  return (
    <Container >
      <h3 className="text-center mt-3 mb-4">Cricket Bats</h3>
      <div className="bat-home d-flex flex-wrap justify-content-around">
        {batHomeImages.map((item, i) => (
          <CardComp img={item.src} />
        ))}

        <div className="view-more text-small">
          <Link className="text-decoration-none" to="/cricket-bats">
            View More <i class="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </Container>
  );
};
