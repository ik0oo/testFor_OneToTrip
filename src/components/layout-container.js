import React from 'react';
import Card from './view/card';
import Select from './view/select';
import { connect } from 'react-redux';
import { changeCarrier, receiveFlights } from '../actions';
import './layout.css';

class Layout extends React.Component {
  componentDidMount () {
      receiveFlights();
  }

  render () {
    const { flights, options } = this.props;

    return (
      <div className="container layout">
        <div className="row">
          <div className="col-xs-12 select-container">
              <div className="row">
                  <div className="col-xs-4">
                      Выберете авиаперевозчика
                      <Select options={options} onChange={({id}) => changeCarrier(id)}/>
                  </div>
              </div>
          </div>
        </div>

        <div className="row">
          {flights.map(item => {
            return <div className="col-xs-4" key={item.id}>
                <Card {...item}/>
              </div>
          })}
        </div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    flights: store.filteredFlights,
    options: [...new Set(store.flights.map(item => item.carrier))]
  }
})(Layout);
