import React from 'react';
import Card from './Card';

const CardList = (props) => {

  return (
    props.robots.map(function(robot) {
      return (
        <Card key={robot.id} 
        id={robot.id} 
        name={robot.name} 
        email={robot.email} />
      )
    })
  );
}

export default CardList;