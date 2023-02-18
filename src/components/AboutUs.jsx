import React from 'react'
import AboutUsImg from '../img/AboutUsImg.jpeg'

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-5" id="home">
      <div className="py-8 flex-1 flex flex-col items-start  justify-start gap-6">
        <img
          src={AboutUsImg}
          // className="h-420 w-250"
          alt="hero-bg"
        />
      </div>
      <div className="py-2 mx-10 ml-10 mt-10 items-start relative ">
      <br/>
      <h1 className="text-xl">ABOUT US ...</h1>
      <br/>
        <p>
        A dream to bring people together over a great quality meal, even in their own office. A dream to inspire a community with the food at their event. A dream that people did not have to think twice about where their food comes from. 
        </p><br/>
        <p>
        While Raju and Silva, owners of Cafe Amore, only started building what they would consider their most prized possession in 2002, they both have backgrounds in country clubs, delis, and businesses alike throughout their lives. As they came together to start Cafe Amore, this husband and wife duo brought together not just their business experience, but their standard for excellence and build a business from the ground up without compromising their standards. 
        </p><br/>
        <p>
        As the years went on and as the word spread about this mom-and-pop cafe that served cuisine from around the world, the demand beyond the cafe grew; offices, weddings, graduations, bridal showers -- you name it, we got the call for it. Thus the catering side of Cafe Amore was born.
        </p><br/>
        <p>
        Since then, our once mom-and-pop has become a booming business, both corporately and through our catering with locations throughout New Jersey. We have also launched a sushi bar and a long-time dream of the owners, called Meal By Chef -- a service that delivers fresh made dinners to your home or office.
        </p>
      </div>
    </section>
  )
}

export default AboutUs