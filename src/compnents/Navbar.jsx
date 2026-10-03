export default function Navbar() {
    return (
        <>
            <nav>
                <div className='flex items-center justify-center bg-white shadow m-1 rounded-md'>
                    <div >
                        <h3 className='text-lg px-2 py-1 bg-blue-800 align-center justify-start text-white rounded-md ml-2 mr-15'> Apna Store</h3>
                    </div>
                    <div className=' gap-3 flex p-2 justify-between items-center'>
                        <div className='shadow  rounded-md'>
                            <input className=' px-4  rounded-md p-1' type="text" placeholder='Search product, dealer or shop ' />
                            <button className='bg-blue-500 rounded-md text-white p-1'>Search</button>
                        </div>

                        <button className=' m-1 p-1 shadow rounded-md font-bold'>  Scan QR</button>
                        <button className=' m-1 p-1 shadow rounded-md'> 🛒</button>
                        <button className=' m-1 p-1 shadow rounded-md text-violet-600 '> Signup/Login</button>
                    </div>
                </div>
            </nav>

        </>
    )
}