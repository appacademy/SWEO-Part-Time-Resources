const VALID = 'validValues';
const INVALID = 'invalidValues';

module.exports = {
  // flightNumber
    // constraints:
      // uniqueness
      // not null
      // string
    // validations:
      // uniqueness
      // not null
      // string
      // min length: 3, max length: 6
      // two characters followed by 1-4 numbers
  flightNumber: {
    [VALID]: [
      'UA1', 
      'BA98', 
      'BA170',
      'DL8869',
    ],
    [INVALID]: [
      null,
      'ua1',
      'UA',
      'ABC',
      'BA98765',
      '987',
      '987654',
      'B98765',
      'UA1B',
    ],
  },

  // model
    // constraints:
      // not null
      // string
    // validations:
      // not null
      // string
      // min length: 3, max length: 6
  model: {
    [VALID]: [
      '777',
      'A380',
      'DC-10',
      'L-1011',
      '123',
      'ABC',
      '123456',
      'ABCDEF',
    ],
    [INVALID]: [
      null,
      '12',
      '1234567',
      'AB',
      'ABCDEFG',
    ],
  },

  // inService
    // constraints:
      // not null
      // boolean
      // default value: true
    // validations:
      // not null
      // boolean
      // default value: true
    // Note: First value listed below must be `true` for the test specs to 
      // pass the test specs for numCurrentPassengers properly 
  inService: {
    [VALID]: [
      true,
      false,
      undefined,
    ],
    [INVALID]: [
      null,
    ],
  },

  // homeBase
    // constraints:
      // not null
      // string
    // validations:
      // not null
      // string
      // min length: 3, max length: 3
      // only characters
  homeBase: {
    [VALID]: [
      'LAX',
      'JFK',
    ],
    [INVALID]: [
      null,
      '123',
      'AB1',
      'AB',
      'ABCD',
    ],
  },

  // maxNumPassengers
    // constraints:
      // not null
      // integer
    // validations:
      // not null
      // integer
      // max: 853
      // min: 2
  maxNumPassengers: {
    [VALID]: [
      853,
      550,
      100,
      2,
    ],
    [INVALID]: [
      null,
      -1,
      0,
      1,
      854,
      1000,
    ],
  },

  // currentNumPassengers
    // constraints:
      // integer
    // validations:
      // integer
      // max: 853
      // min: 0
      // cannot be greater than maxNumPassengers
      // numCurrentPassengers is null when inService is false
  currentNumPassengers: {
    [VALID]: [
      null,
      853,
      550,
      150,
      0,
    ],
    [INVALID]: [
      -1,
      854,
      1000,
    ],
  },

  // cruisingAltitudeFt
    // constraints:
      // integer
    // validations:
      // integer
      // max: 41,000
      // min: 500
  cruisingAltitudeFt: {
    [VALID]: [
      null,
      500,
      9000, // 9,000
      20000, // 20,000
      41000, // 41,000
    ],
    [INVALID]: [
      -1,
      0,
      400,
      42000, // 42,000
    ],
  },

  // maxRangeKm
    // constraints:
      // integer
    // validations:
      // integer
      // min: 100
      // max: 18000
  maxRangeKm: {
    [VALID]: [
      100,
      10000, // 10,000
      18000, // 18,000
    ],
    [INVALID]: [
      null,
      -1,
      0,
      50,
      20000, // 20,000
    ],
  },

  // firstFlightDate
    // constraints:
      // date
    // validations:
      // date
      // before 2022-01-01,
      // after 2019-12-31,
  firstFlightDate: {
    [VALID]: [
      null,
      '2020-01-01',
      '2021-12-31',
    ],
    [INVALID]: [
      '2018-05-12',
      '2019-12-31',
      '2022-01-01',
      '2024-06-10',
    ],
  },

  VALID,
  INVALID,
};