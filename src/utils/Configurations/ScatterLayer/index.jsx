import Configuration from '../Configuration'


class ScatterLayerConfig extends Configuration {
    constructor() {
        super('scatter')
    }

    getConfig() {
        return {
            layers: [{
                type: this.type,
                x: "_time",
                y: "_value"
            }]
        }
    }
}

export default ScatterLayerConfig
