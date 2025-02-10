import { SetStateAction } from 'react'
import { Bot, GraphData } from '../../helpers/types'
import { changeGraphData } from '../../helpers/helpers'
import { staticGraphData } from '../../helpers/static'

type BotItemProps = {
    botStatic:{
        name:string,
        img:string,
        title:string
    },
    index:number,
    timeRange:string,
    data:Bot | undefined,
    selectedBot: Bot | undefined,
    setGraphData:React.Dispatch<SetStateAction<GraphData>>,
    setSelectedBot:React.Dispatch<SetStateAction<Bot | undefined>>,
}

const BotItem = ({
    data, 
    index, 
    timeRange, 
    botStatic, 
    selectedBot,
    setGraphData,
    setSelectedBot,
    }:BotItemProps) => {
    
    const value =  data ? timeRange === "All time" ? data.all_time : 
        timeRange === "24h" ? data['24h'] :
        timeRange === "7 days" ? data['7d'] :
        data['30d'] : 0

    const onBotClick = () => {
        if(selectedBot && data){
            if(selectedBot.name === data.name)
                return
        }
        setSelectedBot(data)
        setGraphData(changeGraphData(staticGraphData))
    }

  return (
    <div 
        onClick={onBotClick}
        className={`bg-lightblue w-full h-[105px] flex flex-col justify-center items-center transition-shadow
        ${selectedBot?.name === data?.name ? 'shadow-sky-900 shadow-[inset_0px_0px_24px_-2px]' : ''}`}>
        <img src={botStatic.img} className={` w-12
            ${botStatic.title !== 'MEGABOT' ? 'h-[36px] mb-2 mt-2' : 'h-12 mb-0'}
            ${index > 2 ? 'mt-[0px]' : ''}
        `}/>
        <p className={`${data ? 'text-primary' : 'text-secondary'} leading-3 text-[10px] font-bold w-1/2 text-center`}>{botStatic.title}</p>
        <span className={`text-[9.5px] transition-colors leading-3 ${value > 0 ? 'text-green-400' : value < 0 ? 'text-red-500' : 'text-primary'}`}>
            {`${value !== 0 ? 
                value > 0 ? `+${value}%` : `-${value}%` :
                ''} `}
        </span>
    </div>
  )
}

export default BotItem