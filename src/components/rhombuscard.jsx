import React from 'react';
import './rhombuscard.css';
import programs from '../images/program.png';
const RhombusCard = ({ logoSrc, title }) => {
  return (
    <div className="col-md-2 col-12 mb-0 mx-3 my-3 ">
      <div className="rhombus-card mx-auto">
        <div className="rhombus-content">
          <img src={programs} alt="Logo" className="rhombus-logo" />
          <h6 className="rhombus-title">{title}</h6>
        </div>
      </div>
    </div>
  );
};

const RhombusCardContainer = () => {
  const cardsData = [
    { id: 1, logoSrc: 'logo1.png', title: 'Weight management' },
    { id: 2, logoSrc: 'logo2.png', title: 'Diabetes management' },
    { id: 3, logoSrc: 'logo3.png', title: 'Cardiac Care' },
    { id: 4, logoSrc: 'logo4.png', title: 'Pain management' },
    { id: 5, logoSrc: 'logo5.png', title: 'Hormonal Care' },
    { id: 6, logoSrc: 'logo6.png', title: 'Skin Care' },
    { id: 7, logoSrc: 'logo7.png', title: 'Allergy Care' },
    { id: 8, logoSrc: 'logo8.png', title: 'Pregnancy Care' },
    { id: 9, logoSrc: 'logo9.png', title: 'Stress Management' },
    { id: 10, logoSrc: 'logo10.png', title: 'Detoxification' },
  ];

  return (
    <div className="container mx-auto">
        <h1 className='text-center mb-5'>Our Programs</h1>
      <div className="row row-cols-1 row-cols-md-5 ">
        {cardsData.map((card) => (
          <RhombusCard key={card.id} logoSrc={card.logoSrc} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default RhombusCardContainer;
