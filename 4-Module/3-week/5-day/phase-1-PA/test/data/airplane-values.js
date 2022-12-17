const VALID = 'validValues';
const INVALID = 'invalidValues';

module.exports = {
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

  currentNumPassengers: {
    [VALID]: [
      853,
      550,
      150,
      0,
      null,
    ],
    [INVALID]: [
      -1,
      854,
      1000,
    ],
  },

  cruisingAltitudeFt: {
    [VALID]: [
      500,
      9000, // 9,000
      20000, // 20,000
      41000, // 41,000
      null,
    ],
    [INVALID]: [
      -1,
      0,
      400,
      42000, // 42,000
    ],
  },

  firstFlightDate: {
    [VALID]: [
      '2020-01-01',
      '2021-12-31',
      null,
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