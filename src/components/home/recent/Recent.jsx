import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Explore our latest property listings, featuring prime real estate opportunities that meet diverse needs and preferences. Discover your next dream home with us today.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
