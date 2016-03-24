import Firebase from 'firebase';
//var rootRef = new Firebase('https://blazing-fire-2123.firebaseio.com');

/* Action types */
export const TYPE = {
  //GENERAL
  ERROR: 'ERROR',
  GO_NEXT_SCREEN: 'GO_NEXT_SCREEN',
  GO_PREVIOUS_SCREEN: 'GO_PREVIOUS_SCREEN',
  ENABLE_NEXT_SCREEN: 'ENABLE_NEXT_SCREEN',
  //INTRO
  INTRO_OPEN_ENVELOP: 'INTRO_OPEN_ENVELOP',
  INTRO_VOTE_LEADER: 'INTRO_VOTE_LEADER',
  //READ
  READ_ORDER_SECTION: 'READ_ORDER_SECTION',
  //PLAN
  PLAN_SELECT_ANSWER: 'PLAN_SELECT_ANSWER',
  PLAN_ASSIGN_PLAYER: 'PLAN_ASSIGN_PLAYER',
  PLAN_SET_OUTPUT_NUMBER: 'PLAN_SET_OUTPUT_NUMBER',
  //DO
  DO_SWITCH_SECTION: 'DO_SWITCH_SECTION',
  DO_ADD_VARIABLE: 'DO_ADD_VARIABLE',
  DO_REMOVE_VARIABLE: 'DO_REMOVE_VARIABLE',
  DO_SELECT_VARIABLE: 'DO_SELECT_VARIABLE',
  DO_NAME_VARIABLE: 'DO_NAME_VARIABLE',
  DO_REMOVE_OUTPUT: 'DO_REMOVE_OUTPUT',
  DO_OPEN_SECTION: 'DO_OPEN_SECTION',
  DO_SELECT_OPERATION: 'DO_SELECT_OPERATION',
  DO_EDIT_COMMENT: 'DO_EDIT_COMMENT',
  
  //REALTIME
  FETCH_GAME_STATE: 'FETCH_GAME_STATE',
  UPDATE_GAME_STATE: 'UPDATE_GAME_STATE'
}
export const VARIABLETYPE = {
  INPUT: 'input',
  OUTPUT: 'output',
  RESULT: 'result',
  OPERATION: 'operation',
  QUESTION: 'question',
}
/* Component types (for DnD) */
export const DNDTYPE = {
  DRAGABLE_PARAGRAPH: 'DRAGABLE_PARAGRAPH',
  DROPPABLE_SLOT: 'DROPPABLE_SLOT',
}
/* Other constants */
export const SECTIONTYPE = {
  INPUT: 'INPUT',
  OPERATION: 'OPERATION',
  QUESTION: 'QUESTION',
  RESULT: 'RESULT',
  OUTPUT: 'OUTPUT'
}
export const OPERATIONTYPE = {
  ADDITION: 'ADDITION',
  SUBTRACTION: 'SUBTRACTION'
}
export const GameScreens = [
  'INTRO',
  'READ',
  'PLAN',
  'DO',
  'TEST',
]
/* General actions */
export function reportError(message){
  return {
    type: TYPE.ERROR,
    message: message,
  };
}
export function goNextScreen(cur_screen){
  return {
    type: TYPE.GO_NEXT_SCREEN,
    cur_screen: cur_screen,
  };
}
export function goPreviousScreen(cur_screen){
  return {
    type: TYPE.GO_PREVIOUS_SCREEN,
    cur_screen: cur_screen,
  };
}
export function enableNextScreen(){
  return {
    type: TYPE.ENABLE_NEXT_SCREEN
  }
}
/* Intro actions */
export function openEnvelop(){
  return {
    type: TYPE.INTRO_OPEN_ENVELOP
  }
}
export function voteLeader(user_id){
  return {
    type: TYPE.INTRO_VOTE_LEADER,
    user_id: user_id
  }  
}
/* Read actions */
export function orderSection(section_index, section_order){
  return {
    type: TYPE.READ_ORDER_SECTION,
    section_index: section_index,
    section_order: section_order,
  }
}
/* Plan actions */
export function selectAnswer(section_index, answer_index){
  return {
    type: TYPE.PLAN_SELECT_ANSWER,
    section_index: section_index,
    answer_index: answer_index,
  }
}
export function assignPlayer(section_index, player_id){
  return {
    type: TYPE.PLAN_ASSIGN_PLAYER,
    section_index: section_index,
    player_id: player_id,
  }
}
export function setOutputNumber(section_index, output_number){
  return {
    type: TYPE.PLAN_SET_OUTPUT_NUMBER,
    section_index: section_index,
    output_number: output_number,
  }
}
/* Do actions */
export function switchSection(section_index){
  return {
    type: TYPE.DO_SWITCH_SECTION,
    section_index: section_index,
  }
}
export function addVariable(section_index, line_num, variable_type, variable_id = null){
  return {
    type: TYPE.DO_ADD_VARIABLE,
    section_index: section_index,
    line_num: line_num,
    variable_type: variable_type.toLowerCase(),
    variable_id: variable_id
  }
}
export function addAndUpdateVariable(section_index, line_num, variable_type, variable_id = null){
  return function (dispatch, getState){
    dispatch(addVariable(section_index, line_num, variable_type, variable_id));
//    return rootRef.child('game').update(getState().game);
    return null;
  }
}
export function removeVariable(section_index, line_num, variable_type){
  return {
    type: TYPE.DO_REMOVE_VARIABLE,
    section_index: section_index,
    line_num: line_num,
    variable_type: variable_type
  }
}
export function removeAndUpdateVariable(section_index, line_num, variable_type){
  return function (dispatch, getState){
    dispatch(removeVariable(section_index, line_num, variable_type));
//    return rootRef.child('game').update(getState().game);
    return null;
  }
}
export function selectVariable(section_index, line_num, variable_type, vid){
  return {
    type: TYPE.DO_SELECT_VARIABLE,
    section_index: section_index,
    line_num: line_num,
    variable_type: variable_type,
    vid: vid
  }
}
export function nameVariable(name_id, name_section, vid){
  return {
    type: TYPE.DO_NAME_VARIABLE,
    name_id: name_id,
    name_section: name_section,
    vid: vid
  }
}
export function removeOutput(section_index, line_num){
  return {
    type: TYPE.DO_REMOVE_OUTPUT,
    section_index: section_index,
    line_num: line_num
  }
}
export function openSection(section_index, section_name){
  return {
    type: TYPE.DO_OPEN_SECTION,
    section_index: section_index,
    section_name: section_name
  }
}
export function selectOperation(section_index, operation){
  return {
    type: TYPE.DO_SELECT_OPERATION,
    section_index: section_index,
    operation: operation
  }
}
export function editComment(comment, vid){
  return {
    type: TYPE.DO_EDIT_COMMENT,
    comment: comment,
    vid: vid
  }
}
/* Real-time actions */
export function fetchGameState(game_state){
  return {
    type: TYPE.FETCH_GAME_STATE,
    game_state: game_state
  }
}
export function updateGameState(game_state){
  return {
    type: TYPE.UPDATE_GAME_STATE,
    game_state: game_state
  }
}