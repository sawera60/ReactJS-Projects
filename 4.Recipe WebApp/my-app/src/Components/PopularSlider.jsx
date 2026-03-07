import React from 'react'
import Slider from "react-slick";
//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'


const PopularSlider = () => {
  const [data, setData] = useState([
    {

    }
  ])
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s"
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setData(data.meals)
    }
    fetchData();
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  return (
    <>
      <div className='w-full h-auto bg-gray-200 py-10'>
        <Slider {...settings}>
          {data.map((meal) => {
            return (
              <div>
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default PopularSlider