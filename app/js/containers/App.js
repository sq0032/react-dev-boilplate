import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { GameScreens } from '../actions';

import Screen from '../screens/Screen';
import Nav from '../components/Nav';
import VideoChat from '../components/VideoChat';

  
class App extends Component {
    
  renderScreen() {
    const offset = this.props.screen.cur_screen;
    const Screens = GameScreens.map((screen, index)=>{
      if (index >= offset - 1 && index <= offset + 1 ){
        return (
          <Screen screen={screen} offset={-offset+index} key={screen}/>
        );
      }
    });
    console.log('renderScreen');
    return Screens;
  }
  render() {
    const Screen = this.renderScreen();
    const { dispatch, screen } = this.props
    return (
      <div>
        <Nav/>
        {Screen}
        <VideoChat/>
      </div>
    )
  }
}

const style = {
  screen: {
    left:'0px',
    right:'1px',
    top:'100px',
    bottom: '0px',
    border: '1px solid black',
    position: 'absolute',
  }
}

App.propTypes = {
//  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//    text: PropTypes.string.isRequired,
//    completed: PropTypes.bool.isRequired
//  }).isRequired).isRequired,
//  visibilityFilter: PropTypes.oneOf([
//    'SHOW_ALL',
//    'SHOW_COMPLETED',
//    'SHOW_ACTIVE'
//  ]).isRequired
}

function select(state) {
  return {
    screen: state.screens,
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)