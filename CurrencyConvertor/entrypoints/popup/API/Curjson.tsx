import React from "react";

interface CurrencyRates {
  [key: string]: {
    [key: string]: number;
  };
}

const Curjson :CurrencyRates  = {
  INR: {
    USD: 0.012,
    EUR: 0.011,
    DIR: 0.044,
  },
  USD: {
    INR: 83.3,
    EUR: 0.92,
    DIR: 3.67,
  },
  EUR: {
    INR: 90.58,
    USD: 1.09,
    DIR: 3.99,
  },
  DIR: {
    INR: 22.68,
    EUR: 0.25,
    USD: 0.27,
  },
};

export default Curjson;
