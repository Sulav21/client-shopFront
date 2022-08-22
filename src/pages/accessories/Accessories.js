import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {DefaultLayout} from '../../components/layout/DefaultLayout'
import { Balls } from './Balls'
import { Gloves } from './Gloves'
import { Helmets } from './Helmets'
import { Shoes } from './Shoes'
import './accessories.css'

export const Accessories = () => {
  const [showItem, setShowItem] = useState(0)
  const handleOnClick=(index)=>{
    setShowItem(index)
  }
  return (
   <DefaultLayout>
    <Dropdown className='mt-3'>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>handleOnClick(0)}>Gloves</Dropdown.Item>
        <Dropdown.Item onClick={()=>handleOnClick(1)}>Balls</Dropdown.Item>
        <Dropdown.Item onClick={()=>handleOnClick(2)}>Helmets</Dropdown.Item>
        <Dropdown.Item onClick={()=>handleOnClick(3)}>Shoes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {(showItem===0)&&<Gloves/>}
    {(showItem===1)&&<Balls/>}
    {(showItem===2)&&<Helmets/>}
    {(showItem===3)&&<Shoes/>}

   

   </DefaultLayout>
  )
}
