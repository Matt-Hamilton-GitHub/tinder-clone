import React, {useState} from 'react'
import styled from '@emotion/styled/'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people, setPeople] = useState([
        {name: 'Elon Musk',
        url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'

    },{name: 'Jeff Bezos',
    url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142'
    
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
                 >
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
