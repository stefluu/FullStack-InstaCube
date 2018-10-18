import React from 'react';
import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import imageIdReducer from './image_id_reducer';

const UiReducer = combineReducers({
  modal: modalReducer,
  imageId: imageIdReducer

});

export default UiReducer;
