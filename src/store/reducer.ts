import { combineReducers } from 'redux';
import comics from './ducks/comics';
import creators from './ducks/creators';
import characters from './ducks/characters';

export default combineReducers({ comics, creators, characters });
