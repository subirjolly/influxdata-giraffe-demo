import PlotRenderer from '../PlotRenderer'

function PlayGround(props) {
    const getConfig = () => {
        const config = props.config.getConfig()
        config.table = props.table

        return config
    }

    return (
        <div className='PlayGround'>
            <PlotRenderer config={getConfig()} />
        </div>
    )
}

export default PlayGround
