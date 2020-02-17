const {
  getVehicleCount,
  getVehicleCountByModelYear,
  getVehicleCountByPurchaseYear,
  getTotalPurchasePrice,
  getAggregateFleetData,
} = require('./aggregate-fleet-data')
const aggregateFleetDataSchema = require('./aggregate-fleet-data-schema')
var validate = require('jsonschema').validate

describe('getVehicleCount', () => {
  test('should return 0 for no vehicles', () => {
    const vehicles = {}
    expect(getVehicleCount(vehicles)).toBe(0)
  })

  test('should return 1 for one vehicle', () => {
    const vehicles = { CN3YN2XNMNTALPSUB: {} }
    expect(getVehicleCount(vehicles)).toBe(1)
  })

  test('should return 5 for five vehicles', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: {},
      '03D84BKR262PCBP77': {},
      '1PPSGMFUGRXWTN0DE': {},
      VSU5J7AHW2KD1D4WB: {},
      YVE96DSCLUKZAUYWC: {},
    }
    expect(getVehicleCount(vehicles)).toBe(5)
  })

  test('should return 0 for boolean, array, integer, string input types', () => {
    let vehicles = true
    expect(getVehicleCount(vehicles)).toBe(0)
    vehicles = []
    expect(getVehicleCount(vehicles)).toBe(0)
    vehicles = 42
    expect(getVehicleCount(vehicles)).toBe(0)
    vehicles = 'foobar'
    expect(getVehicleCount(vehicles)).toBe(0)
  })
})

describe('getVehicleCountByModelYear', () => {
  test('should handle a single model year', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: { modelYear: 2019 },
    }
    const vehicleCountByModelYear = getVehicleCountByModelYear(vehicles)
    expect(vehicleCountByModelYear).toStrictEqual({ '2019': 1 })
  })
  test('should handle 3 model years', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: { modelYear: 2019 },
      '03D84BKR262PCBP77': { modelYear: 1989 },
      '1PPSGMFUGRXWTN0DE': { modelYear: 2013 },
      GRXWTN0DE3D84BKR2: { modelYear: 2013 },
    }
    const vehicleCountByModelYear = getVehicleCountByModelYear(vehicles)

    expect(vehicleCountByModelYear).toStrictEqual({
      '1989': 1,
      '2013': 2,
      '2019': 1,
    })
  })
})

describe('getVehicleCountByPurchaseYear', () => {
  test('should handle multiple purchase years', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: { purchaseDate: '1999-01-20T05:00:00.000Z' },
      '03D84BKR262PCBP77': { purchaseDate: '2012-01-20T05:00:00.000Z' },
      '1PPSGMFUGRXWTN0DE': { purchaseDate: '2005-01-20T05:00:00.000Z' },
      GRXWTN0DE3D84BKR2: { purchaseDate: '2005-01-20T05:00:00.000Z' },
      UJCZ7D75Y4WJ1DP3W: { purchaseDate: '2012-01-20T05:00:00.000Z' },
      B17C23C6YR00UT9T0: { purchaseDate: '2012-01-20T05:00:00.000Z' },
    }
    const countByPurchaseYear = getVehicleCountByPurchaseYear(vehicles)

    expect(countByPurchaseYear).toStrictEqual({
      '1999': 1,
      '2005': 2,
      '2012': 3,
    })
  })
})

describe('getTotalPurchasePrice', () => {
  test('should handle total purchase price', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: { purchaseValue: 1234567 },
      '03D84BKR262PCBP77': { purchaseValue: 9876543 },
      '1PPSGMFUGRXWTN0DE': { purchaseValue: 4133755 },
      GRXWTN0DE3D84BKR2: { purchaseValue: 1234567 },
      UJCZ7D75Y4WJ1DP3W: { purchaseValue: 9876543 },
      B17C23C6YR00UT9T0: { purchaseValue: 4133755 },
    }

    const total = 30489730

    expect(getTotalPurchasePrice(vehicles)).toEqual(total)
  })
})

describe('getAggregateData', () => {
  test('should handle empty input', () => {
    const data = getAggregateFleetData({})
    const defaultData = {
      totalPurchasePrice: null,
      vehicleCount: 0,
      vehicleCountByModelYear: {},
      vehicleCountByPurchaseYear: {},
    }
    expect(data).toStrictEqual(defaultData)
  })

  test('should return a proper aggregateFleetData object', () => {
    let data = getAggregateFleetData({})

    expect(validate(data, aggregateFleetDataSchema).errors).toHaveLength(0)

    const vehicles = {
      CN3YN2XNMNTALPSUB: { purchaseValue: 1234567 },
      '03D84BKR262PCBP77': { purchaseDate: '2005-01-20T05:00:00.000Z' },
      '1PPSGMFUGRXWTN0DE': { purchaseValue: 4133755 },
      GRXWTN0DE3D84BKR2: { modelYear: 2019 },
    }
    data = getAggregateFleetData(vehicles)
    expect(validate(data, aggregateFleetDataSchema).errors).toHaveLength(0)
  })
})
