
var React = require('react');
var styles = require('../styles')
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayContainer} onClick={props.handleClick}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
}

module.exports = DayItem;