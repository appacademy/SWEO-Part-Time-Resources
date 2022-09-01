const Instrument = require('./instrument')

class Trumpet extends Instrument {
    constructor() {
      super(`Trumpet`, 'Brass');
    }
  
    releaseSpitValve() {
      console.log('releasing spit valve');
    }
  }

module.exports = Trumpet