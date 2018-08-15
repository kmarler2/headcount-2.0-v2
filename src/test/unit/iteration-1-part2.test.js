import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 2', () =>  {
  const district = new DistrictRepository(data);

  it('findAllMatches defaults to returning all data in an array', () => {
    expect(Object.keys(district.findAllMatches()).length).toBe(181);
  });

  it('findAllMatches returns matches in an array, case insensitive', () => {
    expect(Object.keys(district.findAllMatches('ColoRado')).length).toBe(2);
  });

  it('findAllMatches finds no matches and returns an empty array when given arguments that dont exist within the data', () => {
    expect(Object.keys(district.findAllMatches('al;dkfjas;dlkjasdfl;')).length).toBe(0);
    expect(Object.keys(district.findAllMatches('packers')).length).toBe(0);
    expect(Object.keys(district.findAllMatches('df')).length).toBe(0);
  });
});
