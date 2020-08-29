import { combineReducers } from 'redux';
import comics from './ducks/comics';
import creators from './ducks/creators';

export default combineReducers({ comics, creators});
