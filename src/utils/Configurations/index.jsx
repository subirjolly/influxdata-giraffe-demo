import GaugeLayerConfig from './GaugeLayer'
import LineLayerConfig from './LineLayer'
import ScatterLayerConfig from './ScatterLayer'

const Configurations = {
    get() {
        return [
            new LineLayerConfig(),
            new ScatterLayerConfig(),
            new GaugeLayerConfig()
        ]
    }
}

export default Configurations
