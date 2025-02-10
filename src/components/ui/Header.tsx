import refresh from '/refresh.png'

type HeaderProps = {
    title:string
}

const Header = ({title}:HeaderProps) => {
  return (
    <header className="flex justify-between items-center w-full px-4">
        <div className='w-5 h-3 flex flex-col justify-between'>
            <span className='h-[1px] w-5/6 bg-secondary'></span>
            <span className='h-[1px] w-5/6 bg-secondary'></span>
            <span className='h-[1px] w-5/6 bg-secondary'></span>
        </div>
        <h1 className="text-secondary font-bold text-md">{title}</h1>
        <img src={refresh} className='w-4.5 h-4.5'></img>
    </header>
  )
}

export default Header