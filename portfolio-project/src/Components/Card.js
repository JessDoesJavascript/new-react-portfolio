import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 7vw;
    h1 { 
        font-family: 'Alegreya', serif;
        letter-spacing: 0.1rem;
        font-size: 2rem;
        text-align: center;
        }
    p { 
        font-family: 'Istok Web', sans-serif; 
        text-align: justify;
        }
`;

const Card = (props) => {
        return(
            <StyledCard>
                <div className="title-container">
                    <h1> {props.title} </h1>
                </div>
                <div className="paragraph-container">
                    <p> {props.paragraph} </p>
                </div>
            </StyledCard>

        )
    }


export default Card;