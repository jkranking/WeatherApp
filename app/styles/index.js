var background = require('../images/pattern.svg')

var styles = {

  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },

  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },

  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  
  weather: {
    height: 130 
  },

  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },

  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },

  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
    
}

module.exports = styles