import React, {useState} from 'react'
import Collections from '../components/Collections'
import Header from '../components/Header'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import {Gents} from '../data';
import { Womens } from '../data';
import WomensCollection from '../components/WomensCollection'

const Mainpage = () => {

  const [gentsFashion, SetGentsFashion] = useState(Gents)
  const [womensFashion, SetWomensFashion] = useState(Womens)

  return (
    <div>
        <Header />
        <Banners />
        <Collections gentsFashion = {gentsFashion}/>
        <WomensCollection womensFashion = {womensFashion}/>
        <Footer/>
    </div>
  )
}

export default Mainpage