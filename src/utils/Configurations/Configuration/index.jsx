import Constants from '../../Constants'

export default class Configuration {
    Mapping = {
        'line': 'Line Layer',
        'gauge': 'Gauge Layer',
        'scatter': 'Scatter Layer'
    }
    
    constructor(configType) {
        this.type = configType
    }

    getTitle() {
        return this.Mapping[this.type]
    }

    getQuery() {
        // Base Query
        return [
            `from(bucket: "${Constants.Influx.BUCKET}")`,
            'range(start: -1h)',
            'filter(fn: (r) => r._measurement == "swap")',
            'filter(fn: (r) => r._field == "total" or r._field == "used")',
            'aggregateWindow(every: 1m, fn: mean, createEmpty: false)',
            'yield(name: "mean")'
        ].join(' |> ')
    }
}
