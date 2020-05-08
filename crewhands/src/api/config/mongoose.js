// @flow

import mongoose from 'mongoose'
import config from './index.js'
// config.db.url

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://crew_hands:Code_78@ds147946.mlab.com:47946/crew_hands_dev', { useNewUrlParser: true })

  const db = mongoose.connection

  if (config.env !== 'test') {
    /* eslint-disable no-console */
    db.on('connected', () => console.log('[  DB connected.  ]'));
    db.on('error', err => console.error(err));
    db.on('disconnected', () => console.log('[  DB disconnected.  ]'));
    /* eslint-enable no-console */
  }
}
