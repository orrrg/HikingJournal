export default class DMSCoords {
  Deg = 0;
  Min = 0;
  Sec = 0;
}

//get number index of period in decimal number

function getDecimalIndex(decimalString) {
  var index = decimalString.indexOf('.');
  return index;
}

export function convertToDMSFromDD(ddFloat) {
  //get deg
  var deg = Math.trunc(ddFloat);

  //getting fraction part from coordinate for calculationg minutes
  let ddString = ddFloat.toFixed(9);
  let fractionPart = parseFloat(ddString.substring(getDecimalIndex(ddString)));
  var min = fractionPart * 60;

  //getting fraction part for sec
  let minString = min.toFixed(9);
  fractionPart = parseFloat(minString.substring(getDecimalIndex(minString)));
  var sec = fractionPart * 60;

  //rounding up to two digits after period
  let ss = parseFloat(sec.toFixed(2));

  let result = new DMSCoords();
  result.Deg = deg;
  result.Min = Math.trunc(min);
  result.Sec = ss;
  return result;
}
