import Configuration from '../Configuration'

class HeatMapLayerConfig extends Configuration {
    constructor() {
        super('heatmap')
    }

    getConfig() {
        const layer = {
            type: "heatmap",
            x: "_time",
            y: "_value",
        }

        return {
            layers: [layer]
        }
    }
}

export default HeatMapLayerConfig
