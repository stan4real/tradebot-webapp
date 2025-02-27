import { navMenu } from "../../helpers/static"
import useResize from "../../hooks/useResize"

const NavMenu = () => {
    const size = useResize()
    const selectedMenu = "Dashboard"

  return (
    <div  style={{top:`${size[1]}px`}} className={`fixed z-10 left-0 -translate-y-full h-12 w-full bg-lightblue`}>
        <div className="h-full px-4 flex items-center justify-between">
            {
                navMenu.map((menu,index) => {
                    return (
                    <div 
                        key={index}
                        className={`relative flex flex-col justify-center items-center gap-1 
                            ${selectedMenu !== menu.name ? "text-secondary" : 'text-primary'}
                            `}>
                        <img src={menu.img} className="w-6 h-6"/>
                        <span className="leading-3 text-[10px]">{menu.name}</span>
                        {
                            menu.name === 'Profile' &&
                            <span className="absolute w-[18px] h-[18px] -top-[8px] -right-[4px] rounded-full bg-[#fb9818]">
                                <span className="absolute top-[calc(50%)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] text-primary font-bold">3</span>
                            </span>
                        }
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NavMenu