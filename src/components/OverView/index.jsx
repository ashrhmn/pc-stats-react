import React from 'react'
import CpuCard from './CpuCard'
import GraphicsCard from './GraphicsCard'
import SystemCard from './SystemCard'

function OverView() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-6 justify-items-center">
            <SystemCard/>
            <CpuCard/>
            <GraphicsCard/>
        </div>
    )
}

export default OverView
