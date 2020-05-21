import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: 'Istok Web', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #6D1A36;
    background-color: #B1B695;
    border: 4px solid #53917E;
    border-radius: 1px;
    margin: 1vw;
`;

const Button = (props) => {
   
    return (
        <div className="button-container">
            <StyledButton
                type="button" 
                id={props.name} 
                name="cardOptions" 
                value={props.name} 
                onClick={props.click}>
                  {props.name}
            </StyledButton>
            
        </div>

    )
}

export default Button;