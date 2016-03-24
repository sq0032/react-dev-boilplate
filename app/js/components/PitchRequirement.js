import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
window.$ = window.jQuery = require('jquery');
require('jquery.hotkeys');
require('bootstrap-wysiwyg/src/bootstrap-wysiwyg.js');
//require('wysiwyg');
//  
//    id:1,
//    link:"8UZA_YijTos",
//    name:"Jamii First Pitch",
//    order:1,
//    requirement:"test",
//    thread:1,
//    type:"firstpitch",

export default class PitchRequirement extends Component {
  componentDidMount(){
    const $Description = $(findDOMNode(this.refs.cardDescription));
    $Description.html(this.props.requirement);
    $Description.wysiwyg();
  }
  handleKeyUp(e){
    var text = $(findDOMNode(this.refs.cardDescription)).cleanHtml();
//    this.props.handleDescriptionChange(text);
  }  
  render() {
    return (
      <div>
        <div style={style.base} id='cardDescription' className='form-control' ref="cardDescription" onKeyUp={this.handleKeyUp.bind(this)}></div>
        <div className='btn-toolbar' data-role='editor-toolbar' data-target='#cardDescription'>
            <div className='btn-group'>
                <a className='btn' data-edit='bold' title='Bold (Ctrl/Cmd+B)'><i className='icon-bold'></i></a>
                <a className='btn' data-edit='italic' title='Italic (Ctrl/Cmd+I)'><i className='icon-italic'></i></a>
                <a className='btn' data-edit='underline' title='Underline (Ctrl/Cmd+U)'><i className='icon-underline'></i></a>
            </div>

            <div className='btn-group'>
                <a className='btn' data-edit='insertunorderedlist' title='Bullet list'><i className='icon-list-ul'></i></a>
                <a className='btn' data-edit='insertorderedlist' title='Number list'><i className='icon-list-ol'></i></a>
            </div>
        </div>
      </div>
    )
  }
}

const style = {
  base: {
    height: '150px',
    overflowY: 'auto'
  }
};

//      <div>
//        {this.props.requirement}
//      </div>

PitchRequirement.propTypes = {
  
}