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

  test('should return 0 for boolean, array, integer, string input types', () => {
    let vehicles = true
    expect(aggregator.getVehicleCount(vehicles)).toBe(0)
    vehicles = []
    expect(aggregator.getVehicleCount(vehicles)).toBe(0)
    vehicles = 42
    expect(aggregator.getVehicleCount(vehicles)).toBe(0)
    vehicles = 'foobar'
    expect(aggregator.getVehicleCount(vehicles)).toBe(0)
  })
})

describe('getVehicleCountByModelYear', () => {
  test('should handle a single model year', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: { modelYear: 2019 },
    }
    const vehicleCountByModelYear = aggregator.getVehicleCountByModelYear(
      vehicles,
    )
    expect(vehicleCountByModelYear).toStrictEqual({ '2019': 1 })
  })
  test('should handle 3 model years', () => {
    const vehicles = {
      CN3YN2XNMNTALPSUB: { modelYear: 2019 },
      '03D84BKR262PCBP77': { modelYear: 1989 },
      '1PPSGMFUGRXWTN0DE': { modelYear: 2013 },
      GRXWTN0DE3D84BKR2: { modelYear: 2013 },
    }
    const vehicleCountByModelYear = aggregator.getVehicleCountByModelYear(
      vehicles,
    )

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
    const countByPurchaseYear = aggregator.getVehicleCountByPurchaseYear(
      vehicles,
    )

    expect(countByPurchaseYear).toStrictEqual({
      '1999': 1,
      '2005': 2,
      '2012': 3,
    })
  })
})

describe('getTotalPurchasePrice', () => {
  test.todo('should handle total purchase price')
})

describe('getAggregateData', () => {
  test.todo('should handle all aggregate values')
})
