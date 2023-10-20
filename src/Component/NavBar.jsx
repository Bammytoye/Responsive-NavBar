import lock from '../assets/padlock.jpg'
import zekeLogo from '../assets/zekeLogo.png'
import menu from '../assets/menu.jpg' 
import close from '../assets/close.jpg'
import { useState } from 'react'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => setToggle(!toggle)

    return (
        <div className="w-full bg-white border-b h-20">
            <div className="md:max-w-[1180px] max-w-[700px] m-auto w-full h-full flex justify-between items-center">
                <img src={zekeLogo} alt="zeke logo" className='h-25 w-24 pt-7' />

                <div className='hidden md:flex flex-row items-center'>
                    <ul className='flex gap-5 cursor-pointer font-medium'>
                        <li className='hover:border-b-2 hover:border-yellow-300'>Home</li>
                        <li className='hover:border-b-2 hover:border-yellow-300'>About</li>
                        <li className='hover:border-b-2 hover:border-yellow-300'>Support</li>
                        <li className='hover:border-b-2 hover:border-yellow-300'>Platform</li>
                        <li className='hover:border-b-2 hover:border-yellow-300'>Pricing</li>
                    </ul>

                    <div className="flex gap-4 ms-6">
                        <button className="flex px-5 py-3 justify-center items-center bg-transparent gap-2"> 
                        <img src={lock} alt="" className="h-6 w-6"/>
                        Login</button>
                        <button className="p-2 rounded-md bg-green-500 text-white font-medium me-4">Sign Up For Free</button>
                    </div>
                </div>

                    <div className='md:hidden' onClick={handleClick}>
                            <img src={toggle?close:menu} alt="" className='w-[60px] '/>
                    </div>
            </div>

                        <div className={toggle?'absolute z-10 p-6 w-full px-8 md:hidden cursor-pointer':'hidden'}>
                                <ul className=''>
                                    <li className='p-4 hover:bg-yellow-100 rounded-lg hover:text-center'>Home</li>
                                    <li className='p-4 hover:bg-yellow-100 rounded-lg hover:text-center'>About</li>
                                    <li className='p-4 hover:bg-yellow-100 rounded-lg hover:text-center'>Support</li>
                                    <li className='p-4 hover:bg-yellow-100 rounded-lg hover:text-center'>Platform</li>
                                    <li className='p-4 hover:bg-yellow-100 rounded-lg hover:text-center'>Pricing</li>
                                </ul>

                                <div className="flex flex-col gap-4 my-4 w-full">
                                    <button className="flex justify-center items-center py-3 bg-transparent hover:border-t-2 hover:border-b-2 border-yellow-500"> 
                                    <img src={lock} alt="" className="h-6 w-6"/>
                                    Login</button>
                                    <button className="p-3 rounded-md bg-green-500 text-white font-bold mb-6">Sign Up For Free</button>
                                </div>
                        </div>            
        </div>
    )
}

export default NavBar