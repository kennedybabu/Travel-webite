import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <>
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem  src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'  text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' />
                        <CardItem  src='https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'  text='Travel Through the Islands of Bali in a Private Cruise' label='Luxury' path='/services' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem  src='https://images.unsplash.com/photo-1566419808810-658178380987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'  text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Jungle' path='/services' />
                        <CardItem  src='https://images.unsplash.com/photo-1559700488-2c5c100110f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'  text='Travel Through the Islands of Bali in a Private Cruise' label='Explore' path='/services' />
                        <CardItem  src='https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'  text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Hiking' path='/services' />
                    </ul>

                </div>
            </div>
        </div>

    </>
  )
}

export default Cards