var React = require('react');
var styles = require('../styles')
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var DayItem = require('./DayItem');

function ForecastUI (props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>{props.city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <h1 style={styles.header}> Loading </h1>
          : <ForecastUI
              city={props.city}
              forecast={props.forecastData}
              handleClick={props.handleClick} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;