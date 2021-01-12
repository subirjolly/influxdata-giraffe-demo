import Configuration from '../Configuration'

class SingleStatLayerConfig extends Configuration {
    constructor() {
        super('single stat')
    }

    getConfig() {

        const layer = {
            type: 'single stat',
            prefix: "Mem : ",
            suffix: " %",
            textColor : "red",
            decimalPlaces : {
                digits : 3
            }
        }

        return {
            layers: [layer]
        }
    }
}

export default SingleStatLayerConfig
