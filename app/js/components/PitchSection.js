import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import PitchContainer from './PitchContainer';
//  
//    id:1,
//    link:"8UZA_YijTos",
//    name:"Jamii First Pitch",
//    order:1,
//    requirement:"test",
//    thread:1,
//    type:"firstpitch",

export default class PitchSection extends Component {
  renderTabs() {
    const { pitches } = this.props;
    console.log(pitches);
    const Tabs = pitches.map((pitch, index)=>{
      return (
        <Tab eventKey={index} key={index} title={pitch.name}>
          <PitchContainer pitch={pitch}/>
        </Tab>
      );
    });
    return Tabs;
  }
  render() {
    const PitchTabs = this.renderTabs();
    return (
      <Tabs defaultActiveKey={0}>
        {PitchTabs}
      </Tabs>
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

PitchSection.propTypes = {
  
}