export default function Hero() {
    return (
         
            <section className='w-full max-w-7xl mx-auto my-4 px-6 py-10 rounded-2xl bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-600 flex flex-col md:flex-row'>
                <div className=' w-full md:w-1/2 flex flex-col justify-center gap-5 py-6'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white'> Find nearby <br/> businesses & Products</h1>

                    <p className="text-white text-lg"> Search trusted dealers and shop the best products.</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                           <input className='bg-white px-4 py-3 rounded-lg outline-none flex-1' type="text" placeholder=" Search Vendor Name.."/>
                            <button className=' bg-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-200' type='button'>Search</button>
                            <button className='bg-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-200' type='button'>Scan QR</button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 '> 
                <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <span  className="text-gray-500">Store Image</span>
                    </div> 
                </div>
            </section>

         
    )
}