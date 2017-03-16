import React from 'react';
import './card.css';
import moment from 'moment';

const DATE_FORMAT = 'DD.MM.YYYY h:mm';

export default function Card ({direction, arrival, departure, carrier}) {
    const departureFormatted = moment(departure).format(DATE_FORMAT);
    const arrivalFormatted = moment(arrival).format(DATE_FORMAT);

    return (
      <section className="card">
        <h4>
          <span>Откуда: {direction.from}</span>
          <span> - </span>
          <span>Куда: {direction.to}</span>
        </h4>

        <div>
          <div>Время вылета: {departureFormatted}</div>
          <div>Время прилета: {arrivalFormatted}</div>
        </div>

        <footer>
          Компания: {carrier}
        </footer>
      </section>
    );
}
