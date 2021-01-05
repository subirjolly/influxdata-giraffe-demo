import Configuration from '../Configuration'

class GaugeLayerConfig extends Configuration {
    constructor() {
        super('gauge')
    }

    getConfig() {
        const layer = {
            type: "gauge",
            gaugeColors: [{
                id: 'red',
                type: 'min',
                hex: '#FF0000',
                name: 'Red',
                value: 1
            }, {
                id: 'green',
                type: 'max',
                hex: '#00FF00',
                name: 'Green',
                value: 50
            }, {
                id: 'blue',
                type: 'threshold',
                hex: '#0000FF',
                name: 'Blue',
                value: 100
            }]
        }
    
        return {
            layers: [layer]
        }
    }
}

export default GaugeLayerConfig
