import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p> ""Our agency, RentUP, blends passion for real estate with a commitment to client satisfaction. With integrity and expertise, we guide clients through personalized journeys, ensuring transparent and communicative experiences."
</p>
            <p>"At RentUP, our streamlined process starts with understanding client goals. We leverage market insights for effective strategies, offering detailed analysis, strategic marketing, and expert negotiation. Trust us to turn your real estate aspirations into reality."
</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
