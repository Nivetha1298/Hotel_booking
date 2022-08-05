import React from 'react'

import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'

import  "./home.css"
const Home = () => {
  return (
    <div>
       <Navbar/>
       <Header type={undefined}/> 
       <div className="homeContainer">
       
       
       
        <h1 className="homeTitle">Top Places</h1>
        <FeaturedProperties/>
        <MailList/>
        

       </div> 

       

    </div>
  )
}

export default Home