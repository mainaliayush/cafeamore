import React from 'react'
import './index.css'
// import galleryImages from '../utils/data'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const galleryImages = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079755284-86Z6O1H8MCTYXOTU792T/2011+035.JPG?format=1000w'
  },
  {
    img: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/241646484_357473292502997_8718897822951933786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=8JrHitFmYN4AX-mKR4J&_nc_ht=scontent-lga3-1.xx&oh=00_AfBpO-EOY-yTWgrA04tCCfjviAFh0yl4sEN0-YYgULfYwA&oe=63EE893F'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1669756261899-DUPJE0A7IYGSLEPV9VQD/2011%2B032.jpg?format=1000w'
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079768771-O0CTF835MFYT9YQ6RC00/ANTIPASTO+PLATTER.jpeg?format=1000w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079781870-V27ONBZYJ52Y37WTHLKY/BAKERY+%26+PASTRY+BUFFET.JPG?format=1000w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079801594-7BY0Q5PIH0X7EKFOPR3R/FRITTATA+PLATTER.jpg?format=1000w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079845012-SKJML7B8M8DX8I55M55M/ROAST+BEEF+CANAPE.JPG?format=750w"
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1591288578745-A61SQ0K64BOH7D85XBHZ/CAPRESE+SKEWERS.jpg'
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1622666851978-YZHWD7WK0N51VHH0CIXM/20200916_113150.jpg"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1589299795499-OMYLTJG7NF5AF9W63O6P/20200414_155537.jpg?format=1500w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1622666379683-LCFVEH0VVRTXNHX25RPH/20265.jpg?format=2500w"
  },
  {
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1591288578745-A61SQ0K64BOH7D85XBHZ/CAPRESE+SKEWERS.jpg'
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079768771-O0CTF835MFYT9YQ6RC00/ANTIPASTO+PLATTER.jpeg?format=1000w"
  },
  {
    img: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/45776540_2140837582901173_5545858911594086400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=_vRBYoiE33UAX_XiNsT&_nc_ht=scontent-lga3-1.xx&oh=00_AfCznFZGDG8iqZHl-aLgH9mncZ-r9d_tqdtgi_k3O6bz-w&oe=6410EA36"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079768771-O0CTF835MFYT9YQ6RC00/ANTIPASTO+PLATTER.jpeg?format=1000w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1589299795499-OMYLTJG7NF5AF9W63O6P/20200414_155537.jpg?format=1500w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1622666379683-LCFVEH0VVRTXNHX25RPH/20265.jpg?format=2500w"
  },
  {
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079845012-SKJML7B8M8DX8I55M55M/ROAST+BEEF+CANAPE.JPG?format=750w"
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1591288578745-A61SQ0K64BOH7D85XBHZ/CAPRESE+SKEWERS.jpg'
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1622666851978-YZHWD7WK0N51VHH0CIXM/20200916_113150.jpg"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1589299795499-OMYLTJG7NF5AF9W63O6P/20200414_155537.jpg?format=1500w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1590079845012-SKJML7B8M8DX8I55M55M/ROAST+BEEF+CANAPE.JPG?format=750w"
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5b02e06e70e8028ef1aa9dba/1622667184608-X0G1GXXOI094IO46GC2C/53159.jpeg?format=1500w"
  },
  {
    img: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/45776540_2140837582901173_5545858911594086400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=_vRBYoiE33UAX_XiNsT&_nc_ht=scontent-lga3-1.xx&oh=00_AfCznFZGDG8iqZHl-aLgH9mncZ-r9d_tqdtgi_k3O6bz-w&oe=6410EA36"
  },

]

const Gallery = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="mt-10">

      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose text-3xl' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev text-3xl ml-20' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext text-3xl mr-20' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery