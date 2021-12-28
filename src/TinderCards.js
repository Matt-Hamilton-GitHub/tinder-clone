import React, {useState} from 'react'
import styled from '@emotion/styled/'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people, setPeople] = useState([
        {name: 'Elon Musk',
        url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'

    },{name: 'Jeff Bezos',
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fjeffbezos&psig=AOvVaw2A9HMw-QvrsaFlDtEy0iaU&ust=1640748762822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiY3MzHhfUCFQAAAAAdAAAAABAD'
    
        },

    ])

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
                props={person} >
                <div style={{backgroundImage:`url(${person.url})`}}
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


`