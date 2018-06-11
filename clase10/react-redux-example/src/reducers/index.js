import { combineReducers } from 'redux'
import WeatherReducer from './weather'

const reducers = combineReducers({
  weather: WeatherReducer
});

export default reducers