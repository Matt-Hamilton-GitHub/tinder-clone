import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled/'
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {

    const [people, setPeople] = useState([]);

    async function fetchData(){
        const req = await axios.get('/tinder/cards');
        setPeople(req.data);
    }


    useEffect(() => {
      
    fetchData();
    },[] )

    console.table(people)
    const swiped = (direction, nameToDelete)=>{
    // setLastDirection(direction)
    }

    const outOfFrame = (name)=>{
    }

    return (
        <Wrapper>
            <div className='tinderCards__cardContainer'>
        {people.map((person)=>{
            return(<TinderCard 
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                 >
                <div style={{backgroundImage:`url(${person.imgUrl})`}}
                    className='card'>
                        <h3>{person.name}</h3>
                </div>
                
                </TinderCard>)
        })}
        </div>
        </Wrapper>
    )
}



export default TinderCards

const Wrapper = styled.main`

.card{
    position:relative;
    background-color:white;
    width:600px;
    padding:20px;
    max-width:85vw;
    height:50vh;
    background-size:cover;
    box-shadow: 0px 18px 53px 0px rgba(0,0,0,2);
    background-position: center;
    border-radius:20px;
}

.tinderCards__cardContainer{
    display:flex;
    justify-content:center;
    margin-top: 10vh;

}

.swipe{
    position:absolute;
}

.cardContent{
    width:100%;
    height:100%;
}

.card h3{
    position:absolute;
    bottom:0;
    margin:10px;
    color:white;

}


`
