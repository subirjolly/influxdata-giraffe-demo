import Configuration from '../Configuration'

class BandLayerConfig extends Configuration {
    constructor() {
        super('band')
    }

    getConfig() {

        const layer = {
            type: 'band',
            x: "_time",
            y: "_value",
            fill:["_time","_value"],
            mainColumnName: "mean"
        }

        return {
            layers: [layer]
        }
    }
}

export default BandLayerConfig
