import React from 'react'
import CpuCard from './CpuCard'
import GraphicsCard from './GraphicsCard'
import MemoryCard from './MemoryCard'
import SystemCard from './SystemCard'
import TempCard from './TempCard.jsx'

function OverView() {
    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-6 justify-items-center">
        <div className="flex flex-row flex-wrap justify-around">
            <SystemCard/>
            <CpuCard/>
            <MemoryCard/>
            <TempCard/>
            <GraphicsCard/>
        </div>
    )
}

export default OverView
