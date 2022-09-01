const Instrument = require('./instrument')


class Guitar extends Instrument {
    constructor(name, family) {
      super(name, family)
    }
  
  
    strumGuitar() {
      console.log('strumming guitar');
    }
    
  }

module.exports = Guitar
