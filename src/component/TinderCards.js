import React from 'react'
import './TinderCards.css'
import  TinderCard from 'react-tinder-card'

function TInderCards() {

  //Hooks
  const [cars,setCars]=React.useState([
  {
    name:'Tesla',
    url:'https://www.tesla.com/xNVh4yUEc3B9/08_Desktop.jpg'
  },
  {
    name:'BMW j8',
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryhMktkl9rvoKMMyWDEZ5FGoRXGRmZg4cGw&usqp=CAU'
  },{
    name:'Lykan',
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtjFIGJiwWWBZBO7dBcumDnUjkRadoancqA&usqp=CAU'
  }
])
  return (

    <div className='card-container'>TinderCards
    {
      cars.map(car=>(
        <TinderCard 
        className='swipe'
        key={car.name}
        preventSwipe={['up','down']}>

          <div style={{backgroundImage:`url(${car.url})`}}  className='card'>

            <h2>{car.name}</h2>
          </div>
        </TinderCard>
      ))
    }
    </div>
  )
}

export default TInderCards