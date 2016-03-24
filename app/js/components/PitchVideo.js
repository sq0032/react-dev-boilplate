import React, { Component, PropTypes } from 'react';
//  
//    id:1,
//    link:"8UZA_YijTos",
//    name:"Jamii First Pitch",
//    order:1,
//    requirement:"test",
//    thread:1,
//    type:"firstpitch",

export default class PitchVideo extends Component {
  render() {
    return (
      <div>
        {this.props.requirement}
      </div>
    )
  }
}

PitchVideo.propTypes = {
  
}