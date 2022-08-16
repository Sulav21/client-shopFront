import React from 'react'
import { Container } from 'react-bootstrap'
import { CardComp } from '../../components/card-comp/CardComp'
import kkr from '../../images/helmets/kokkaburra.jpg'
import sg from '../../images/helmets/masuri.webp'
import sss from '../../images/helmets/shrey.webp'
import './helmet.css'
import { Link } from 'react-router-dom'

const helmetImages = [
    {
       _id: 1,  
       src: kkr
    },
    {
        _id: 2,  
        src: sg
     },
     {
        _id: 3,  
        src: sss
     }

]

export const HelmetHome = () => {
  
  return (
    <Container>
       
        <h3 className="text-center mt-3 mb-4"> Helmets</h3>
        <div className="bat-home d-flex flex-wrap justify-content-around">
  
        {helmetImages.map((item,i)=>(
    <CardComp img={item.src}/>

    ))}
    
 <div className="view-more text-small"><Link className='text-decoration-none' to='/accessories'>View More <i class="fa-solid fa-angles-right"></i></Link></div>

        </div>
      

    </Container>

  )
}
