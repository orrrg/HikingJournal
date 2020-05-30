import {DMSCoords, convertToDMSFromDD} from '../helpers/convertingCoordinates';

it('converted data is correct', () => {
  var input = 23.22334122;
  var result = convertToDMSFromDD(input);
  expect(result).toEqual({Deg: 23, Min: 13, Sec: 24.03});
});

it('Saves sign in conversion', () => {
  var input = -143.23322334;
  var result = convertToDMSFromDD(input);
  expect(result.Deg).toEqual(-143);
});

it('Saves signs only of degre not min and sec', () => {
  var input = -143.23322334;
  var result = convertToDMSFromDD(input);
  expect(result.Deg).toBeLessThan(0);
  expect(result.Min).toBeGreaterThan(0);
});
