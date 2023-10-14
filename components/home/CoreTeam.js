import React from "react";
import { useState } from 'react';
import Photo from "../common/Photo";
import Popup from '../common/Popup';

export default function CoreTeam() {
  const cofounders = [    
    {
      avatar: "/team/neha.jpg",
      name: "Neha Shrishrimal",
      position: "Co-Founder",
      desc: "Neha is a dynamic woman who has worn many hats in various fields, Neha is confident go - getter who believes “Things which bring sparkle to your eyes is what your heart truly desires. That is your calling in life”. Neha has always had an instant connection with children and teenagers and through this foundation, She has pledged to support their dreams.",
    },
    {
      avatar: "/team/hemangi.jpg",
      name: "Dr. Hemangi",
      position: "Co-Founder",
      desc: "A dermatologist by profession, Hemangi can do it all! She is a dedicated, responsible and optimist who believes, “We need to be the change that we want to see in the world”. With her love for children, She has played a pivotal role in shaping the idea of Sampoorna and bringing it to life."
    },
  ];

  const people = [
    {
      avatar: "/team/aishwarya.png",
      name: "Aishwarya Bothra",
      position: "",
      desc: "Meet Aishwarya, an enthusiast techie with right skills and intuitive knowledge. She’s an MBA in retail management and previously worked with “MAKE A DIFFERENCE” for 1.5 years. Her wonderful place to be is in between the pages of a book. Her love for music, exceptional attention to details, makes her multi task with Sampoorna. With her oomph and zeal of writing, Aishwarya is the Technocrat of Sampoorna."
    },
    {
      avatar: "/team/anmol.png",
      name: "Anmol Parwani",
      position: "",
      desc: "Meet Anmol, a textile designer from NIFT Bhopal. Anmol is a passionate and a dedicated entrepreneur who owns a kids brand Cozy Cribs and raises her own bar year after year. With her enterprising skills and eagerness to take new challenges, Anmol is the the creative member of Sampoorna."
    },
    {
      avatar: "/team/apurva.png",
      name: "Apurva Rathi",
      position: "",
      desc: "Meet Apoorva, a believer in learning, unlearning and relearning. A teacher of Social science by profession in DPS Raipur, she loves the magic of books, music, food and nature. With her intellect and command in language Apoorva teaches our kids the ultimate language skills."
    },
    {
      avatar: "/team/bhakti.jpg",
      name: "Bhakti Gajjar",
      position: "",
      desc: "With an artistic soul and a keen eye for design, Bhakti from team Social Momo brings life to Sampoorna NGO's mission through captivating graphics and visuals. Her creative touch transforms ideas into visually stunning realities, making every creative a work of art."
    },
    {
      avatar: "/team/gazal.jpg",
      name: "Gazal Chauhan",
      position: "",
      desc: "Gazal from Social Momo is the digital architect behind Sampoorna NGO's impactful outreach and strategic initiatives. With a blend of innovation and strategy, she drives the organization's online presence, ensuring its message reaches far and wide, touching hearts and inspiring change."
    },
    {
      avatar: "/team/krishna.png",
      name: "Krishna Wadhwani",
      position: "",
      desc: "Meet Krishna, a bright scholar, graduated from IIT Bombay with a B.Tech in Aerospace Engineering. He has worked as a research engineer at Sony for 2 years and is currently managing and bringing laurels to his family business. With his conversant and dedicated outlook , hard skill aptitude and expertise Krishna is the Technocrat of Sampoorna."
    },
    {
      avatar: "/team/mehak.png",
      name: "Mehak Parakh",
      position: "",
      desc: "Meet Mehak, a freelance creative director, a dog mom and a tarot card reader. A fashionista who loves to read and carries a tremendous spirit of life. Being a social media enthusiast, Mehak helps with events at Sampoorna and also handles the digital media with us."
    },
    {
      avatar: "/team/neelima.png",
      name: "Neelima Parakh",
      position: "",
      desc: "Meet Neelima, A homemaker finding beauty in the humblest things. She pours all her love for Sampoorna and works for the day to day functioning of the foundation. She makes us feel hopeful every moment of the day with her constant and extraordinary efforts. With her gentle Midas touch and strong continual support she is an integral part of our Operations team."
    },
    {
      avatar: "/team/priya.png",
      name: "Priya Sabhlok",
      position: "",
      desc: "Meet Priya Sabhlok, A qualified professional with a total of 15 years of experience as an academician (teaching MBA students), a corporate and an artist. She is a  Certified Zentangle Teacher from US indulged in Meditative and mindful drawing since last 6 years.  With her Cognition, effective communication and relationship management skills, Priya is the Brain trust of Sampoorna."
    },
    {
      avatar: "/team/rishi.jpg",
      name: "Rishi Shrishrimal",
      position: "",
      desc: "Meet Rishi, the backbone of Sampoorna. A catalyst inspiring people and igniting a larger spark within all of us. Rishi, is currently in the University of Toronto pursuing Finance and is a bright alumnus of Doon School, Dehradun. He has been the recipient of the International Scholar award- Rotman commerce and Dean list scholar recipient. A Sportaholic and a globetrotter, Rishi does it all. With his Sharp and Snappy Vantage point, he is the Think Tank of Sampoorna."
    },
    {
      avatar: "/team/ritika.png",
      name: "Ritika Ramnani",
      position: "",
      desc: "Meet Ritika, an MBA in Finance and an advance diploma holder in Interior and Jewellery designing. Her fondness for painting, art & craft makes her eager to learn new things. Being a mother she has a soft connect with kids and thereby indulges in a magical connection with Sampoorna kids too. She is allied with Sampoorna as a teacher and conducts extra curricular activities."
    },
    {
      avatar: "/team/sarita.png",
      name: "Sarita Golechha",
      position: "",
      desc: "Meet Sarita, a captivating woman who effortlessly juggles the roles of both a skilled artist and a dedicated home maker. Sarita’s unwavering dedication to both her family and her artistic pursuits. With her passion and resourcefulness, Sarita is the creative member of Sampoorna."
    },
    {
      avatar: "/team/shweta.png",
      name: "Sweta Padia",
      position: "",
      desc: "Meet Sweta, a strong believer in exchanging positive energy. A happy homemaker and a mother of 2 young and intelligent boys makes her celebrate every blessing. Being passionate for art and craft, Sweta handles the creative responsibilities of Sampoorna."
    },
  ];
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleClickPhoto = (person) => {
    setSelectedPerson(person);
  };
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14" id="team">
      <p className="text-4xl font-bold">Core Team</p>
      {/* <div className="w-max-[90vw] w-full md:w-8/12">
        <div className="flex justify-center">
          {/* Card 
          {cofounders.map((person, index) => (
            <div
              key={index}
              className="flex flex-col m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <Photo person={person} onClick={handleClickPhoto} />
            </div>
          ))}
          {selectedPerson && <Popup person={selectedPerson} onClose={() => setSelectedPerson(null)} />}
        </div>
      </div> */}

<div className="w-max-[90vw] w-full md:w-8/12">
      <div className="flex  justify-center">
        {/* Card */}
        {cofounders.map((person, index) => (
          <div
            key={index}
            className="flex flex-col m-2  py-10 brightness-90 rounded-md w-56"
          >
            <Photo person={person} onClick={handleClickPhoto} />
          </div>
        ))}
        {selectedPerson && <Popup person={selectedPerson} onClose={() => setSelectedPerson(null)} />}
      </div>
    </div>

      <div className="w-max-[90vw] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 flex justify-center">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col py-10 p-4 sm:p-4 md:p-2 lg:p-2 brightness-90 rounded-md w-42 sm:w-36 md:w-48 lg:w-48 "
          >
            <Photo person={person} onClick={handleClickPhoto} />
          </div>
        ))}
        {selectedPerson && <Popup person={selectedPerson} onClose={() => setSelectedPerson(null)} />}
    </div>


    </div>
  );
}