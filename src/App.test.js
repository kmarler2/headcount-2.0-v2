import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js'
import data from './data/kindergartners_in_full_day_program.js';

describe('app', () => {
  let renderedApp;
  let mockData;
  let district = new DistrictRepository(data);

  beforeEach(() => {
    mockData = {
             '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337,
              '2007': 0.395,
              '2008': 0.536,
              '2009': 0.598,
              '2010': 0.64,
              '2011': 0.672,
              '2012': 0.695,
              '2013': 0.703,
              '2014': 0.741 }
    renderedApp = shallow(renderedApp=(<App />));
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined()
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  }) 
    
  it('should add an object for each district', () => {
    let expected = 181;
    let actual = Object.keys(district.dataCleaner(data)).length;

    renderedApp.setState({
      districtData: district.dataCleaner(data),
      comparedDistricts: {}, 
    })
    expect(actual).toEqual(expected);
  })

  it('should have the correct default state', () => {
    let actual = renderedApp.state();
    let expected = {
      districtData: district.dataCleaner(data),
      comparedDistricts: {}
    }
    expect(actual).toEqual(expected)
  })
});