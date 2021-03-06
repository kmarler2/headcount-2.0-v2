import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div 
      className={`card ${props.select ? ' select' : ''}`}
      onClick={()=> { props.findDistrictByClick(props.location); }}
    >
      <h3 className='location'>{props.location}</h3>
      <ul>
        {Object.keys(props.stats).map((stat, index) => {
          return <li 
            key={index}
            style={props.stats[stat] >= 0.5 ? {color: '#F7F7FF'} : {color: '#495867'}}
          >
            {stat}: {props.stats[stat]}
          </li>; 
        })
        }
      </ul>
    </div>
  );
};

Card.propTypes = {
  select: PropTypes.string,
  findDistrictByClick: PropTypes.func,
  location: PropTypes.string,
  stats: PropTypes.number
};

export default Card;