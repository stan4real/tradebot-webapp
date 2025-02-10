import BotItem from './BotItem'
import { useState } from 'react'
import {bots} from '../../helpers/data.min.json'
import { Bot, GraphData } from '../../helpers/types'
import { botsStatic } from '../../helpers/static'
import TimeRanges from './TimeRanges'

type BotsProps = {
    setGraphData:React.Dispatch<React.SetStateAction<GraphData>>
}

const Bots = ({setGraphData}:BotsProps) => {

    const localStorageTimeRange = localStorage.getItem('time_range')

    const [timeRange, setTimeRange] = useState(localStorageTimeRange ? localStorageTimeRange : 'All time')
    const [selectedBot, setSelectedBot] = useState<Bot | undefined>()

  return (
    <>
        <div className="relative grid grid-cols-3 grid-rows-2 gap-x-0.5 gap-y-[2px] px-4 py-[7px]">
            { 
                botsStatic.map((bot, index) => {
                    return <BotItem 
                        key={index}
                        index={index}
                        botStatic={bot}
                        timeRange={timeRange}
                        selectedBot={selectedBot}
                        setGraphData={setGraphData}
                        setSelectedBot={setSelectedBot}
                        data={bots.find(el=>el.name === bot.name)}
                    />
                })
            }
            <img src="/top_left_arrow.png" className='absolute top-1/2 left-1/3 z-10 -translate-x-[calc(33.333%+1px)] -translate-y-[calc(50%+2px)]  w-[38px] h-[40px] -rotate-7 pointer-events-none'/>
            <img src="/bottom_left_arrow.png" className='absolute top-3/4 left-1/3 z-10 -translate-x-[calc(33.333%+4px)] -translate-y-[calc(50%+2px)]  w-[48px] pointer-events-none'/>
            <img src="/top_right_arrow.png" className='absolute top-1/2 left-2/3 z-10 -translate-x-[calc(33.333%+9px)] -translate-y-[calc(50%+4px)]  w-[40px] h-[42px] rotate-7 pointer-events-none'/>
            <img src="/bottom_right_arrow.png" className='absolute top-3/4 left-2/3 z-10 -translate-x-[calc(33.333%+9px)] -translate-y-[calc(50%+3px)]  w-[50px] pointer-events-none'/>
        </div>

        <TimeRanges
            timeRange={timeRange}
            setTimeRange={setTimeRange}
        />
    </>
  )
}

export default Bots