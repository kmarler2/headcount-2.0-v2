export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data)
  }

  dataCleaner = (data) => {
    let dataObj = data.reduce((dataObj, district) => {
      let location = district.Location.toUpperCase();
      let year = district.TimeFrame
      let stat = Math.round(district.Data * 1000)/1000;
      if(!stat) {
        stat = 0
      }
      let correctStats = {[year]: stat};

      if(!dataObj[location]) {
        dataObj[location] = {
          location,
          stats: {}
        }
      } 
      dataObj[location].stats = {...dataObj[location].stats, ...correctStats}
      return dataObj
    },{})
    return  dataObj
  }

  findByName = (str) => {
    if (!str) {
      return
    }
    return this.stats[str.toUpperCase()]
  }

  findAllMatches = (str = '') => {
    const obj = {};
    const matches = Object.values(this.stats).filter(district => {
      return district.location.includes(str.toUpperCase())
    })
    matches.forEach(match => {
      obj[match.location] = match
    })
    return obj
  }

  findAverage = (str) => {
    let districtData = this.findByName(str);
    let stats = Object.values(districtData.stats);
    let average = stats.reduce((average, stat) => {
      return average + stat
    })
    return Math.round((average / stats.length)*1000)/1000
  }

  compareDistrictAverages = (district1, district2) => {
    let upperCaseDistrictOne = district1.toUpperCase()
    let upperCaseDistrictTwo = district2.toUpperCase()
    let districtOne = this.findAverage(district1.toUpperCase());
    let districtTwo = this.findAverage(district2.toUpperCase());
    return {
      [upperCaseDistrictOne]: districtOne,
      [upperCaseDistrictTwo]: districtTwo,
      "compared": Math.round((districtOne / districtTwo)*1000)/1000 
    }
  }
}