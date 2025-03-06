// import React from 'react'
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {FaBlog } from 'react-icons/fa'
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [isSticky, setIsSticky] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen)
//     }
//     useEffect(() => {
//         const handleScoll = () => {
//             if(window.scrollY > 100) {
//                 setIsSticky(true)
//             }
//             else {
//                 setIsSticky(false)
//             }
//         }
//         window.addEventListener('scroll', handleScoll);
//         return () => {
//             window.removeEventListener('scroll', handleScoll);
//         }
//     }, [])

//     const navItems = [
//         {link: "Home", path: "/"},
//         {link: "About", path: "/about"},
//         {link: "Shop", path: "/shop"},
//         {link: "Sell Your Book", path:"/admin/dashboard"},
//         {link:"Blog", path: "/blog"}
//     ]
//   return (
   
//         <header classNameName='w-full bg-transparent fixed top-0 left-0 right-0 transition-all  ease-in duration-500 '>
//             <nav classNameName={`py lg:px-24 px-4 ${isSticky? "sticky top-0 left-0 right-0 bg-blue-600" : ""}`}>
//                 <div classNameName='flex justify-between items-center text-base  gap-8'>
//                     {/* logo */}
//                     <Link to="/" classNameName="text-2xl "> <FaBlog /> Book</Link>
//                     <ul classNameName='md:flex space-x-12 hidden'>
//                         {
//                             navItems.map(({link, path}) => <Link  key={path} to={path} classNameName=" text-base text-black">
//                         {link}</Link>)
//                         }
//                     </ul>
//                     <div classNameName='space-x-12 hidden lg:flex items-center'>
//                         <button> button </button>
//                     </div>


//                     <div classNameName='md:hidden'>
//                         <button onClick={toggleMenu}>
//                             {
//                                 isMenuOpen? <p>menu</p> : <p>close</p>
//                             }
//                         </button>
//                     </div>
//                 </div>
//                 <div classNameName={`space-y-4 px-4 mt-12 py-7 bg-blue-800 ${isMenuOpen? "block fixed top-0 right-0 left-0 ": "hidden"} `}>
                    
//                           {
//                             navItems.map(({link, path}) => <Link  key={path} to={path} classNameName=" text-base text-black">
//                         {link}</Link>)
//                         }
                    
//                 </div>
//             </nav>
//         </header>

   
//   )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import logo  from '../assets/bookify-logo-zip-file/svg/logo-no-background.svg'
import { AuthContext } from '../contexts/AuthProvider'
const Navbar = () => {
  return (
    <div>
      

      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div className="text-indigo-500 md:order-1">
			
			{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg> */}
			<img className='w-[150px]' src={logo} alt="" />


			{/* <h1 className="text-3xl font-extrabold">boo<span className='text-blue-600'>Kify</span></h1> */}
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
				<Link to='/admin/dashboard' className="md:px-4 md:py-2 text-blue-500"><a href="#">Dashboard</a></Link>
				<Link to='/shop' className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Shop</a></Link>
				<Link to='admin/dashboard/upload' className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Upload</a></Link>
				<Link className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></Link>
				<Link className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></Link>
			</ul>
		</div>
		<div className="order-2 md:order-3">
			<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className='text-white'>Login</span>
            </button>
		</div>
	</div>
</nav>

    </div>
  )
}

export default Navbar