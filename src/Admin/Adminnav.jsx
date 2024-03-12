import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Adminnav = () => {
    return (
        <>
            <div>
                <p className='text-3xl font-extrabold ml-[46vw]'>Admin Panel</p>
            </div>
            <div className='bg-neutral-400'>
                <Navbar>
                    <div>
                        <Link to='/LoginData'>
                            <p className='text-2xl text-black font-bold ml-[40vw] mt-[5vw]'>User Data</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/OrdersData'>
                            <p className='text-2xl text-black font-bold ml-[10vw] mt-[5vw]'>OrdersData</p>
                        </Link>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

export default Adminnav
