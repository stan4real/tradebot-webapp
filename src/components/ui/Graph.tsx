import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GraphData } from '../../helpers/types';
import CustomTooltip from './CustomTooltip';

type GraphProps = {
  data:GraphData
}

const Graph = ({data}:GraphProps) => {
  return (
    <div className='cells relative'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          className='[&_.recharts-cartesian-grid-horizontal>line]:[stroke-dasharray:0] [&_.recharts-tooltip-wrapper]:[size:100%]'
        >
          <defs>
      <linearGradient id={`uv`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={`#4684e9`} stopOpacity={0.4}></stop>
        <stop offset="75%" stopColor={`#4684e9`} stopOpacity={0.05}></stop>
      </linearGradient>
    </defs>
          <XAxis dataKey="name" tickLine={{ stroke: 'transparent' }} axisLine={false} tick={{fontSize:'10px', fill:'#4d6078', }}/>
          <CartesianGrid strokeDasharray="4 3" stroke='#15394d'  />
          <Tooltip cursor={false} content={<CustomTooltip/>}/> 
          <Area type="monotone" dataKey="uv" stroke="#2876a0"  fillOpacity={1} fill="url(#uv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph