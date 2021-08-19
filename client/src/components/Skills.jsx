import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { render } from 'react-dom';
import $ from 'jquery';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';

const skillsInfoTop = [
  {
    skill: 'Javascript',
    icon: 'fab fa-js skill',
    index: 0
  },
  {
    skill: 'Databases',
    icon: 'fas fa-database skill',
    index: 1
  },
  {
    skill: 'NodeJS',
    icon: 'fab fa-node skill',
    index: 2
  }
];

const skillsInfoBottom = [
  {
    skill: 'React',
    icon: 'fab fa-react skill',
    index: 0
  },
  {
    skill: 'Deployment',
    icon: 'fab fa-aws skill',
    index: 1
  },
  {
    skill: 'Other',
    icon: 'fab fa-aws skill',
    index: 2
  }
];



const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};





class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topSkills: Array.from(skillsInfoTop),
      bottomSkills: Array.from(skillsInfoBottom),
      transition: false
    }

    this.handleEntry = this.handleEntry.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEntry(location, index, node) {
    let tempState = this.state;
    tempState[location][index] = {
      info: 'newInfo',
      index: index
    }
    let $node = $(`#icon-${location}-${index}`);
    $node.stop(true, true);
    $node.animate({opacity:'0'}, 1000);
    setTimeout(() => {
      this.setState(tempState);
      $node.animate({opacity:'100'}, 1000);
    }, 1000)
  }

  handleExit(location, index, node) {
    let tempState = this.state;
    let $node = $(`#icon-${location}-${index}`);
    $node.stop(true, true);
    tempState[location][index] = location === 'topSkills' ? skillsInfoTop[index] : skillsInfoBottom[index];
    $node.animate({opacity:'0'}, 1000);
    $node.removeClass('info');
    setTimeout(() => {
      this.setState(tempState);
      $node.animate({opacity:'100'}, 1000);
    }, 1000)




    // this.setState(tempState);
    // this.setState({transition:false})
  }

  handleClick(location) {
    if (location === 'home') {
      $('#skills').animate({left: '200vw'}, 2000);
      $('#welcome-container').animate({left: '0'}, 2000);
    } else if (location === 'portfolio') {
      $('#skills').animate({left: '200vw'}, 2000);
      $('#portfolio').animate({top: '0'}, 2000);
    }
  }


  renderSingleSkill(skill, row) {
    if (skill.skill) {
      return (
        <Col
          className="skill-icon"
          id={`icon-${row}-${skill.index}`}
          onMouseEnter={(event) => this.handleEntry(row, skill.index, event.target)}
          onMouseLeave={(event) => this.handleExit(row, skill.index, event.target)}
        >
          <Row
            align="center"
            className="skill-icon-top"
          >
            <i className={skill.icon}></i>
          </Row>
          <Row align="center" className="skill-icon-bottom">
            <span className="skill-text">{skill.skill}</span>
          </Row>
        </Col>
        )
      } else {
        return (
          <Col
            className="skill-icon info"
            id={`icon-${row}-${skill.index}`}
            onMouseEnter={(event) => this.handleEntry(row, skill.index, event.target)}
            onMouseLeave={(event) => this.handleExit(row, skill.index, event.target)}
          >
            <Row
              align="center"
              className="skill-icon-top"
            >
              <span>{skill.info}</span>
            </Row>
          </Col>
        )
      }
  }



  renderSkills(topSkills, bottomSkills) {
    return (
      <React.Fragment>
        <Row className="skill-row">
          {topSkills.map(skill => {
            return this.renderSingleSkill(skill, 'topSkills');
          })}
        </Row>
        <Row className="skill-row">
        {bottomSkills.map(skill => {
          return this.renderSingleSkill(skill, 'bottomSkills');
          })}
        </Row>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Container id="skills-container">
        <Row className="portfolio-btn-row skills-btn-row">
          <Col md={2}>
            <div className="portfolio-btn-container">
              <div className="portfolio-btn" onClick={() => this.handleClick('home')}>Home</div>
            </div>
          </Col>
          <Col md={{span:2, offset:3}}>
            <div className="portfolio-btn-container">
              <div className="portfolio-btn" onClick={() => this.handleClick('portfolio')}>Portfolio</div>
            </div>
          </Col>
        </Row>
        <Row align="center" id="skills-header-row">
          <h2>Skills</h2>
        </Row>
        {this.renderSkills(this.state.topSkills, this.state.bottomSkills)}





        {/* <Row className="skill-row">
            {this.state.topSkills.map(skill => {
              if (skill.skill) {
                return (
                    <Transition
                      in={!!skill.skill}
                      timeout={300}
                    >
                      {state => (
                        <Col
                          className="skill-icon"
                          onMouseEnter={(event) => this.handleEntry('topSkills', skill.index, event.target)}
                          onMouseLeave={(event) => this.handleExit('topSkills', skill.index, event.target)}
                          style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                          }}
                        >
                          <Row
                            align="center"
                            className="skill-icon-top"
                          >
                            <i className={skill.icon}></i>
                          </Row>
                          <Row align="center" className="skill-icon-bottom">
                            <span className="skill-text">{skill.skill}</span>
                          </Row>
                        </Col>
                      )}
                    </Transition>
                  )
                } else {
                  return (
                    <Transition
                      in={!!skill.skill}
                      timeout={300}
                    >
                      {state => (
                        <Col
                          className="skill-icon"
                          onMouseEnter={(event) => this.handleEntry('topSkills', skill.index, event.target)}
                          onMouseLeave={(event) => this.handleExit('topSkills', skill.index, event.target)}
                          style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                          }}
                        >
                          <Row
                            align="center"
                            className="skill-icon-top"
                          >
                            <span>{skill.info}</span>
                          </Row>
                        </Col>
                      )}
                    </Transition>
                  )
                }
            })}
        </Row>
        <Row className="skill-row">
        {this.state.bottomSkills.map(skill => {
            if (skill.skill) {
              return (
                <Col
                  className="skill-icon"
                  onMouseEnter={(event) => this.handleEntry('bottomSkills', skill.index, event.target)}
                  onMouseLeave={(event) => this.handleExit('bottomSkills', skill.index, event.target)}
                >
                  <Row
                    align="center"
                    className="skill-icon-top"
                  >
                    <i className={skill.icon}></i>
                  </Row>
                  <Row align="center" className="skill-icon-bottom">
                    <span className="skill-text">{skill.skill}</span>
                  </Row>
                </Col>
              )
            } else {
              return (
                <Col
                  className="skill-icon"
                  onMouseEnter={(event) => this.handleEntry('bottomSkills', skill.index, event.target)}
                  onMouseLeave={(event) => this.handleExit('bottomSkills', skill.index, event.target)}
                >
                  <Row
                    align="center"
                    className="skill-icon-top"
                  >
                    <span>{skill.info}</span>
                  </Row>
                </Col>
              )
            }
          })}
        </Row> */}
      </Container>








    //   <Container id="skills-container">
    //     <Row align="center" id="skills-header-row">
    //       <h2>Skills</h2>
    //     </Row>
    //     <Row>
    //       <Col className="skill-icon">
    //         <Row align="center" className="skill-icon-top" onMouseEnter={() => console.log('enter')} onMouseLeave={() => console.log('exit')}>
    //           <i className="fab fa-js skill"></i>
    //         </Row>
    //         <Row align="center" className="skill-icon-bottom">
    //           <span className="skill-text">Javascript</span>
    //         </Row>
    //       </Col>
    //       <Col className="skill-icon">
    //         <Row align="center" className="skill-icon-top">
    //           <i className="fas fa-database skill"></i>
    //         </Row>
    //         <Row align="center" className="skill-icon-bottom">
    //           <span className="skill-text">Databases</span>
    //         </Row>
    //       </Col>
    //       <Col className="skill-icon">
    //         <Row align="center" className="skill-icon-top">
    //           <i className="fab fa-node skill"></i>
    //         </Row>
    //         <Row align="center" className="skill-icon-bottom">
    //           <span className="skill-text">NodeJS</span>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col className="skill-icon">
    //         <Row align="center" className="skill-icon-top">
    //           <i className="fab fa-react skill"></i>
    //         </Row>
    //         <Row align="center" className="skill-icon-bottom">
    //           <span className="skill-text">React</span>
    //         </Row>
    //       </Col>
    //       <Col className="skill-icon">
    //         <Row align="center" className="skill-icon-top">
    //           <i className="fab fa-aws skill"></i>
    //         </Row>
    //         <Row align="center" className="skill-icon-bottom">
    //           <span className="skill-text">Deployment</span>
    //         </Row>
    //       </Col>
    //       <Col className="skill-icon">
    //         <Row align="center" className="skill-icon-top">
    //           <i className="fab fa-node skill"></i>
    //         </Row>
    //         <Row align="center" className="skill-icon-bottom">
    //           <span className="skill-text">NodeJS</span>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    )
  }
}

render(<Skills />, document.querySelector('#skills'));

export default Skills;