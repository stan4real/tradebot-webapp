
import React, { SetStateAction } from 'react'
import { timePeriods } from '../../helpers/static'

type TimeRangesProps = {
    timeRange:string,
    setTimeRange:React.Dispatch<SetStateAction<string>>
}

const TimeRanges = ({timeRange, setTimeRange}:TimeRangesProps) => {

    const handleTimeRangeChange = (period:string) => {
        setTimeRange(period)
        localStorage.setItem('time_range', period)
    }

  return (
    <div className='flex items-center justify-between px-4 text-[11px] py-2 text-secondary'>
        <p className='font-bold text-[12px] tracking-tight'>Time Range:</p>
        {
            timePeriods.map((period, index) => {
                return <div 
                    key={index} 
                    onClick={()=>handleTimeRangeChange(period)}
                    className={`px-0.5 py-[3px] w-[58px] text-[12px] flex justify-center items-center rounded-full border-[1px] transition-colors
                    ${timeRange === period ? 'border-primary text-primary' : 'border-slate-700'} `}>
                        {period}
                    </div>
            })
        }
    </div>
  )
}

export default TimeRanges