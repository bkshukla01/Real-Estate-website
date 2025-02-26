import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='"Choose your package and unlock exclusive benefits tailored to your real estate needs. Select from a range of options designed to enhance your buying or selling experience."' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
