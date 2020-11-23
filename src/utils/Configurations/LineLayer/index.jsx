import Configuration from '../Configuration'


class LineLayerConfig extends Configuration {
    constructor() {
        super('line')
    }

    getConfig() {
        return {
            layers: [{
                type: "line",
                x: "_time",
                y: "_value"
            }]
        }
    }
}

export default LineLayerConfig
