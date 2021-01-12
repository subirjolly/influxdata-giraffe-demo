import GaugeLayerConfig from './GaugeLayer'
import LineLayerConfig from './LineLayer'
import ScatterLayerConfig from './ScatterLayer'
import HeatMapLayerConfig from "./HeatMapLayer";
import BandLayerConfig from "./BandLayer";
import SingleStatLayerConfig from "./SingleStat";

const Configurations = {
    get() {
        return [
            new LineLayerConfig(),
            new ScatterLayerConfig(),
            new GaugeLayerConfig(),
            new HeatMapLayerConfig(),
            new BandLayerConfig(),
            new SingleStatLayerConfig(),
        ]
    }
}

export default Configurations
