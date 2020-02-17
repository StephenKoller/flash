const aggregator = require('./aggregator')

describe('getVehicleCount', () => {
  test('should return 0 for no vehicles', () => {
    const vehicles = {}
    expect(aggregator.getVehicleCount(vehicles)).toBe(0)
  })

  test('should return 1 for one vehicle', () => {
    const vehicles = { CN3YN2XNMNTALPSUB: {} }
    expect(aggregator.getVehicleCount(vehicles)).toBe(1)
  })

  test('should return 5 for five vehicles', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: {},
      '03D84BKR262PCBP77': {},
      '1PPSGMFUGRXWTN0DE': {},
      VSU5J7AHW2KD1D4WB: {},
      YVE96DSCLUKZAUYWC: {},
    }
    expect(aggregator.getVehicleCount(vehicles)).toBe(5)
  })
})

describe('getVehicleCountByModelYear', () => {})

describe('getVehicleCountByPurchaseYear', () => {})

describe('getTotalPurchasePrice', () => {})

describe('getAggregateData', () => {})
