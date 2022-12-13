const colors = require("colors");
//The Main function
function main() {
  /** YOUR INPUT HERE */
  const VALUE = 0.5;

  /**dec | inc */
  const OPERATION = "inc";

  const result = magic_inc(VALUE, OPERATION);
  console.log(colors.red(`Result for ${VALUE} is : ${result}`));
}
function magic_inc(value, stat) {
  /*Special cases if the value is equal to 0 OR the type is not a number*/
  if (typeof value != "number" || value == 0) {
    return 0;
  } else {
    if (stat.toLowerCase() == "inc") {
      return inc(value);
    }
    if (stat.toLowerCase() == "dec") {
      return dec(value);
    }
  }
}

function inc(nbr) {
  if (nbr > 0) {
    if (nbr > 0 && nbr < 1) {
      let result = nbr * 10;
      /**Divise to get the real part of nbr number */
      let i = 0.1;
      while (result < 1) {
        result = result * 10;
        i /= 10;
      }
      const valueToIncrementWith = nbr / result;
      nbr = parseInt(nbr / i) * i;
      return nbr + valueToIncrementWith;
    }

    /**if nbr is btwn 1 and 9 */
    if (nbr >= 1 && nbr < 10) {
      return Math.floor(nbr) + 1;
    }
    if (nbr >= 10) {
      let result = nbr / 10;
      /**Divise to get the real part of nbr number */
      let i = 10;
      while (result >= 10) {
        result = result / 10;
        i *= 10;
      }
      const valueToIncrementWith = nbr / result;
      //i added the i counter to get the reel part of nbr and then add the valueToIncrementWith to it after :)
      nbr = parseInt(nbr / i) * i;
      return nbr + valueToIncrementWith;
    }
  } else {
    if (nbr > -1 && nbr < 0) {
      let result = nbr * 10;
      /**Divise to get the real part of nbr number */
      let i = 0.1;
      while (result > -1) {
        result = result * 10;
        i /= 10;
      }
      const valueToIncrementWith = nbr / result;
      nbr = parseInt(nbr / i) * i;
      return nbr + valueToIncrementWith;
    }

    /**if nbr is btwn 1 and 9 */
    if (nbr > -10 && nbr <= -1) {
      return Math.ceil(nbr) + 1;
    }
    if (nbr < -10) {
      let result = nbr / 10;
      /**Divise to get the real part of nbr number */
      let i = 10;
      while (result < -10) {
        result = result / 10;
        i *= 10;
      }
      const valueToIncrementWith = nbr / result;
      //i added the i counter to get the reel part of nbr and then add the valueToIncrementWith to it after :)
      nbr = parseInt(nbr / i) * i;
      return nbr + valueToIncrementWith;
    }
  }
}
function dec(nbr) {
  if (nbr < 0) {
    if (nbr > -1 && nbr < 0) {
      let result = nbr * 10;
      /**Divise to get the real part of nbr number */
      let i = 0.1;
      while (result > -1) {
        result = result * 10;
        i /= 10;
      }
      const valueToIncrementWith = nbr / result;
      nbr = parseInt(nbr / i) * i;
      return nbr - valueToIncrementWith;
    }

    /**if nbr is btwn 1 and 9 */
    if (nbr > -10 && nbr <= -1) {
      return Math.ceil(nbr) - 1;
    }
    if (nbr <= -10) {
      let result = nbr / 10;
      /**Divise to get the real part of nbr number */
      let i = 10;
      while (result <= -10) {
        result = result / 10;
        i *= 10;
      }
      const valueToIncrementWith = nbr / result;
      //i added the i counter to get the reel part of nbr and then add the valueToIncrementWith to it after :)
      nbr = parseInt(nbr / i) * i;
      return nbr - valueToIncrementWith;
    }
  } else {
    if (nbr > 0 && nbr < 1) {
      let result = nbr * 10;
      /**Divise to get the real part of nbr number */
      let i = 0.1;
      while (result <= 1) {
        result = result * 10;
        i /= 10;
      }
      const valueToIncrementWith = nbr / result;
      nbr = parseInt(nbr / i) * i;
      return nbr - valueToIncrementWith;
    }

    /**if nbr is btwn 1 and 9 */
    if (nbr >= 1 && nbr < 10) {
      return Math.floor(nbr) - 1;
    }
    if (nbr >= 10) {
      let result = nbr / 10;
      /**Divise to get the real part of nbr number */
      let i = 10;
      while (result >= 10) {
        result = result / 10;
        i *= 10;
      }
      const valueToIncrementWith = nbr / result;
      //i added the i counter to get the reel part of nbr and then add the valueToIncrementWith to it after :)
      nbr = parseInt(nbr / i) * i;
      return nbr - valueToIncrementWith;
    }
  }
}

main();
