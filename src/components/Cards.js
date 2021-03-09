import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Avaliable Charging Stations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-stations.jpg'
              text='Αθήνα'
              label='Συγγρού 25'
              path='/services'
            />
            <CardItem
              src='images/img-stations.jpg'
              text='Αθήνα'
              label='Νίκης 18'
              path='/services'
            />
            <CardItem
              src='images/img-stations.jpg'
              text='Αθήνα'
              label='Βύρωνα 22'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-stations.jpg'
              text='Αταλάντη'
              label='Βελή 22'
              path='/services'
            />
            <CardItem
              src='images/img-stations.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-stations.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-stations.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
