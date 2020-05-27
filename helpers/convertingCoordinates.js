export default class DMSCoords {
  Deg = 0;
  Min = 0;
  Sec = 0;
}

export function convertToDMSFromDD(ddFloat) {
  //get deg
  var deg = Math.trunc(ddFloat);

  //getting fraction part from coordinate for calculationg minutes
  let fractionPart = parseFloat(ddFloat.toFixed(9).substring(2));
  var min = fractionPart * 60;

  //getting fraction part for sec
  fractionPart = parseFloat(min.toFixed(9).substring(2));
  var sec = fractionPart * 60;

  let result = new DMSCoords();
  result.Deg = deg;
  result.Min = Math.trunc(min);
  result.Sec = sec;
  return result;
}
