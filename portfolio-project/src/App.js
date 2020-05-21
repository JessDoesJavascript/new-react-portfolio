import React from 'react';
import './App.css';
import Card from './Components/Card';
import Button from './Components/Button';
import Self from './Components/ProfilePic.png';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 250px;
  border-radius: 100%;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jess Chapman is a front-end web developer based in Hove, East Sussex.",
      paragraph: <StyledImg src={Self} alt="Jess Chapman"></StyledImg>
    }
  }; 
  
  updateCardInfo = (string) => {
    if (string === "about") {
      this.setState({
        title: "About.",
        paragraph: "I am a self-taught front-end web developer looking for a role with a company as a junior, where I can learn from experienced developers and continue to build on my skills. After leaving my job in September, I have been learning to code in HTML, CSS and Javascript with an emphasis on design, creative use of colour, and making the internet a more accessible and inclusive place."
      })}
       else if (string === "home") {
      this.setState({
        title: "Jess Chapman is a front-end web developer based in Hove, East Sussex.",
        paragraph: <StyledImg src={Self} alt="Jess Chapman"></StyledImg>
      })
    }
       else if (string === "skills") {
      this.setState({
        title: "Skills.",
        paragraph: "Most of my experience is in HTML5, CSS3 and JavaScript ES6. I also have some knowledge and experience of React.js, Webpack, bash, Node Package Manager, Terminal, GIT Version Control, jQuery, reading and debugging code, creating wireframes, and coding to WCAG 2.0 standards. You can see examples of my code by clicking the links below."
      })
    }
       else if (string === "contact") {
      this.setState({
        title: "Contact & Links.",
        paragraph: "I can be reached via email on jessie.chapman@live.co.uk."
      })
    }
    
  }
  
 

  render() {
    return (
      <div className="App">
          <Card title={this.state.title} paragraph={this.state.paragraph} />
          <div 
            className="buttons-container"
            style={{
              width: "100vw",
              margin: "0.5vw",
              marginBottom: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              bottom: "0.5vh",
            
            }}
          >
            <Button name="Home" click={() => this.updateCardInfo("home")}/> 
            <Button name="About" click={() => this.updateCardInfo("about")}/>
            <Button name="Skills" click={() => this.updateCardInfo("skills")}/>
            <Button name="Contact" click={() => this.updateCardInfo("contact")}/>
          </div>
      </div>
    );
  } 
}
export default App;
