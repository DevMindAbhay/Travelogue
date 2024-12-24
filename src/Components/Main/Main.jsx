import React, {useEffect} from 'react'
import './main.css'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaClipboardCheck } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'


import img from '../../assets/img(1).webp';
import img2 from '../../assets/img(2).jpg';
import img3 from '../../assets/img(3).jpg';
import img4 from '../../assets/img(4).jpg';
import img5 from '../../assets/img(5).jpg';
import img6 from '../../assets/img(6).webp';
import img7 from '../../assets/img(7).jpg';
import img8 from '../../assets/img(8).jpg';
import img9 from '../../assets/img(9).jpg';

const Data = [
  {
    id: 1,
    imgSrc: img,
    deskTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description:
      'Machu Picchu, located in the Andes Mountains of Peru, is one of the most iconic archaeological sites in the world. This ancient Incan citadel, built in the 15th century, is renowned for its stunning architecture, mysterious history, and breathtaking mountain vistas. Visitors can explore the intricately constructed stone structures, including temples, terraces, and residential areas, while marveling at the ingenuity of Incan engineering.',
  },
  {
    id: 2,
    imgSrc: img2,
    deskTitle: 'The Great Wall of China',
    location: 'China',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description:
      'The Great Wall of China is a series of fortifications built across the historical northern borders of China to protect the Chinese states from various nomadic groups for more than 2,000 years. It is one of the most recognizable landmarks in the world, and it is considered one of the Seven Wonders of the Ancient World.',
  },
  {
    id: 3,
    imgSrc: img3,
    deskTitle: 'The Colosseum of Rome',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description:
      'The Colosseum of Rome, also known as the Flavian Amphitheatre, is a large amphitheatre in the center of the city that was built to hold gladiatorial battles and other public spectacles. It is one of the most iconic landmarks in the world, and it is still a popular tourist destination today.',
  },
  {
    id: 4,
    imgSrc: img4,
    deskTitle: 'The Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$1800',
    description:
      'The Taj Mahal is a stunning white marble mausoleum located in Agra, India. It is one of the most iconic landmarks in the world, and it is considered a symbol of love, immortality, and the beauty of the Indian subcontinent. It is also one of the most expensive and elaborate tombs in the world.',
  },
  {
    id: 5,
    imgSrc: img5,
    deskTitle: 'The Eiffel Tower',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$1400',
    description:
      'The Eiffel Tower is a wrought-iron lattice tower in the city of Paris, France. It is one of the most recognizable landmarks in the world, and it is often used as a symbol of the city and its rich history. It is also a popular tourist destination, attracting millions of visitors each year.',
  },
  {
    id: 6,
    imgSrc: img6,
    deskTitle: 'The Statue of Liberty',
    location: 'New York City',
    grade: 'CULTURAL RELAX',
    fees: '$1600',
    description:
      'The Statue of Liberty is a colossal copper statue located on Liberty Island in New York Harbor, near the New York City skyline. It is one of the most recognizable landmarks in the world, and it is a symbol of freedom and democracy. It is also a popular tourist destination, attracting millions of visitors each year.',
  },
  {
    id: 7,
    imgSrc: img7,
    deskTitle: 'The Great Pyramid of Giza',
    location: 'Egypt',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description:
      'The Great Pyramid of Giza is the oldest and largest of the three pyramids at the Giza Plateau, located in Egypt. It is one of the Seven Wonders of the Ancient World, and it is considered a symbol of the ancient Egyptians and their legacy. It is also a popular tourist destination, attracting millions of visitors each year.',
  },
  {
    id: 8,
    imgSrc: img8,
    deskTitle: 'The Sistine Chapel',
    location: 'Rome',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description:
      'The Sistine Chapel is a church located in the Vatican City, Rome. It is one of the most famous churches in the world, and it is known for its stunning mural paintings by Leonardo da Vinci. It is also a popular tourist destination, attracting millions of visitors each year.',
  },
  {
    id: 9,
    imgSrc: img9,
    deskTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$2500',
    description:
      'The epitome of Romance, Bora Bora is one of the best traveldestinationin the World. This place is known for its Luxuriousstays and adventrous activities. '
  },
    
  
];

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})

    
})
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, deskTitle, location, grade, fees, description }) => {
          return (
            <div key={id} 
            data-aos="fade up"
            className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={deskTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="cardTitle">{deskTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="location">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS <FaClipboardCheck className="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main
