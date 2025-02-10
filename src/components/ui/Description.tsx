import HIcon from "./HIcon"

const Description = () => {
  return (
    <div className="w-full px-4 py-[15px]">
        <span className="uppercase text-[12px] text-secondary font-bold">trading capital</span>
        <div className="flex items-start w-full">
            <span className="text-[34px] text-primary leading-8 tracking-tight ">1.00865 BTC</span>
            <div className="flex flex-grow text-end font-bold flex-col text-[12px] text-primary self-center justify-between h-full">
                <div className="flex justify-end gap-2">
                    <span className="text-secondary ">BALANCE:</span>
                    <span className="-translate-y-[1px] translate-x-[2.5px]">10&nbsp;850</span>
                    <HIcon/>
                </div>
                <div className="flex justify-end gap-2">
                    <span className="text-secondary font-bold ">ON HOLD:</span>
                    <span className="-translate-y-[1px] translate-x-[2.5px] ">24&nbsp;000</span>
                    <HIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description