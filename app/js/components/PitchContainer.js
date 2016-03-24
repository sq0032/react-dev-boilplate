import React, { Component, PropTypes } from 'react';
import PitchRequirement from './PitchRequirement';
  
export default class PitchContainer extends Component {
  render() {
    return (
      <div>
        {this.props.pitch.name}
        <PitchRequirement requirement={this.props.pitch.requirement}/>
      </div>
    )
  }
}

//      <div>
//        <ul id='video-pitch-nav' className='nav nav-tabs'>
//            <% for( var i in pitches ){ %>
//                <li id='nav_<%=pitches[i].type%>' className='<%=(i==0)?'active':''%>' link='video-pitch-<%=pitches[i].type%>'>
//                    <a><%= pitches[i].name %></a>
//                </li>
//            <% } %>
//        </ul>
//        <div id='video-pitch-container'>
//            <% for( var i in pitches ){ %>
//                <div id='video-pitch-<%=pitches[i].type%>' className='video-pitch-tab' style='<%=(i==0)?'':'display:none'%>' >
//                    <div id='<%=pitches[i].type%>' className='video-iframe'></div>
//                    <div id='<%=pitches[i].type%>-thread' className='comments-view'></div>
//                </div>
//            <% } %>
//        </div>
//      </div>

PitchContainer.propTypes = {
  
}