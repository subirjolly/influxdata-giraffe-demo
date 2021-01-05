import React from 'react'
import * as Giraffe from '@influxdata/giraffe'

function PlotRenderer(props) {
    return (
        <div
            style={{
            width: "calc(70vw - 20px)",
            height: "calc(70vh - 20px)",
            margin: "40px",
            }}
        >
            <Giraffe.Plot config={props.config} />
        </div>
    )
}

export default PlotRenderer
