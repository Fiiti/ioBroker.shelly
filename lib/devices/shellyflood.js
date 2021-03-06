/* jshint -W097 */
/* jshint -W030 */
/* jshint strict:true */
/* jslint node: true */
/* jslint esversion: 6 */
'use strict';

const shellyHelper = require('../shelly-helper');

/**
 * Shelly Flood / SHWT-1 / shellyflood
 * CoAP:
 */
let shellyflood = {
  'sensor.battery': {
    coap: {
      coap_publish: '77'
    },
    mqtt: {
      mqtt_publish: 'shellies/shellyflood-<deviceid>/sensor/battery',
    },
    common: {
      'name': 'Battery capacity',
      'type': 'number',
      'role': 'value.battery',
      'read': true,
      'write': false,
      'min': 0,
      'max': 100,
      'unit': '%'
    }
  },
  'sensor.flood': {
    coap: {
      coap_publish: '23',
      coap_publish_funct: (value) => { return value === 1 ? true : false; }, 
    },
    mqtt: {
      mqtt_publish: 'shellies/shellyflood-<deviceid>/sensor/flood',
    },
    common: {
      'name': 'Flood',
      'type': 'boolean',
      'role': 'sensor.alarm.flood',
      'read': true,
      'write': false
    }
  },
  'sensor.temperature': {
    coap: {
      coap_publish: '33'
    },
    mqtt: {
      mqtt_publish: 'shellies/shellyflood-<deviceid>/sensor/temperature',
    },
    common: {
      'name': 'Temperature',
      'type': 'number',
      'role': 'value.temperature',
      'read': true,
      'write': false,
      'min': -100,
      'max': 100
    }
  }
};

module.exports = {
  shellyflood: shellyflood
};
