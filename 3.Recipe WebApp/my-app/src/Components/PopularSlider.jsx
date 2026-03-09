import React from 'react'
import Slider from "react-slick";
//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'

const ArrowButton = ({ className, onClick, direction }) => (
  <button
    type='button'
    onClick={onClick}
    className={`${className} !flex !items-center !justify-center !w-10 !h-10 !rounded-full !bg-black/70 hover:!bg-black !z-20 before:!content-none`}
    aria-label={direction === 'next' ? 'Next slide' : 'Previous slide'}
  >
    <span className='text-white text-xl leading-none'>
      {direction === 'next' ? '>' : '<'}
    </span>
  </button>
)

const NextArrow = (props) => <ArrowButton {...props} direction='next' />
const PrevArrow = (props) => <ArrowButton {...props} direction='prev' />


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
 
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <>
      <div className='container mx-auto mt-6 mb-6 max-w-5xl px-4'>
        <Slider {...settings}>
          {data.map((meal) => {
            return (
              <div className='px-2'>
                <div className='overflow-hidden rounded-lg'>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className='w-full h-[220px] object-cover rounded-lg transition-transform duration-300 ease-out hover:scale-125'
                />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default PopularSlider
