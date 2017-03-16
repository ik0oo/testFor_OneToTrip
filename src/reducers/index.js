const initialState = {
    flights: [],
    filteredFlights: []
};

export const FLIGHT_TYPES = {
    CHANGE_CARRIER: 'CHANGE_CARRIER',
    RECEIVE_FLIGHTS: 'RECEIVE_FLIGHTS'
};

export default function reduser (state = initialState, action) {
  switch (action.type) {

    case FLIGHT_TYPES.RECEIVE_FLIGHTS:
        return {
            ...state,
            flights: action.json
        };


    case FLIGHT_TYPES.CHANGE_CARRIER:
        return {
        ...state,
        filteredFlights: action.id ? state.flights.filter(flight => flight.carrier === action.id): state.flights
        };

    default:
        return state;
  }
}
