import Bots from "../ui/Bots"
import Graph from "../ui/Graph"
import { useState } from "react"
import Header from "../ui/Header"
import NavMenu from "../ui/NavMenu"
import Description from "../ui/Description"
import { staticGraphData } from "../../helpers/static"

const DashboardPage = () => {
  const [graphData, setGraphData] = useState(staticGraphData)
  return (
    <>
      <div className='wrapper'>
        <Header title='Dashboard'/>
        <Description/>
        <Graph
          data={graphData}
        />
        <Bots
          setGraphData={setGraphData}
        />
      </div>
      <NavMenu/>
    </>
  )
}

export default DashboardPage