import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import mrf from "../../images/bats/mrf1.jpg";
import kkr from "../../images/bats/kokaburra.jpg";
import gm from "../../images/bats/gm.jpg";
import { Link } from 'react-router-dom';


const batsImages = [
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
    {
        _id: 4,
        src: mrf,
      },
      {
        _id: 5,
        src: kkr,
      },
      {
        _id: 6,
        src: gm,
      },
      {
        _id: 7,
        src: mrf,
      },
      {
        _id: 8,
        src: kkr,
      },
      {
        _id: 9,
        src: gm,
      },
      {
        _id: 10,
        src: mrf,
      },
      {
        _id: 11,
        src: kkr,
      },
      {
        _id: 12,
        src: gm,
      },
  ];
export const Shoes = () => {
  return (
   
        
<Container >
      <h3 className="text-center mt-3 mb-4">Cricket Shoes</h3>
      <div className="bat-home d-flex flex-wrap justify-content-around">
        {batsImages.map((item, i) => (
           <Card className='cardComp p-2 mb-3' style={{ width: '16rem'}}>
            <Link to={`/product-landing/${item._id}`}>
           <Card.Img variant='top' height='240px' src={item.src} />
           </Link>
         </Card>
        ))}
      </div>
    </Container>
  )
}
