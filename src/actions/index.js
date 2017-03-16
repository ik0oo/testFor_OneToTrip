import store from '../store';
import { FLIGHT_TYPES } from '../reducers';
import fetch from 'isomorphic-fetch';

export const receiveFlights = (data) => {
  return fetch('../data/flights.json')
      .then(response => response.json())
      .then(
          json => store.dispatch({
            type: FLIGHT_TYPES.RECEIVE_FLIGHTS,
            json: json.flights
          })
      )
      .then(() => store.dispatch({
          type: FLIGHT_TYPES.CHANGE_CARRIER
      }))
};

export const changeCarrier = id => {
  return store.dispatch({
    type: FLIGHT_TYPES.CHANGE_CARRIER,
    id
  });
};
