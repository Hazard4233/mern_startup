import React, { useEffect, useRef } from 'react'
import {select} from 'd3-selection'
const ChartPage: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    useEffect(() => {
        console.log(select(svgRef.current))
    })
    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default ChartPage