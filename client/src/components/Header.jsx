

//  remove comment if getting an error

// import { Button, Navbar, TextInput, Dropdown, Avatar } from 'flowbite-react';
// import { Link, useLocation } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon } from 'react-icons/fa';

// export default function Header() {
//     const path = useLocation().pathname;
//     return (
//         <Navbar className='bg-gray-800 text-white border-b-2 flex items-center justify-between px-4 py-2 md:px-8 md:py-4'>
//             <div className='flex items-center'>
//                 <Link to='/' className='whitespace-nowrap text-sm sm:text-xl font-semibold'>
//                     <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//                         Bloggers
//                     </span>
//                     Blog
//                 </Link>
//                 <form className='ml-4 hidden lg:inline'>
//                     <TextInput
//                         type='text'
//                         placeholder='Search...'
//                         rightIcon={AiOutlineSearch}
//                         className='rounded-lg'
//                     />
//                 </form>
//                 <Button className='w-12 h-10 ml-4 lg:hidden' color='gray' pill>
//                     <AiOutlineSearch />
//                 </Button>
//             </div>
//             <div className='flex gap-2 md:order-2'>
//                 <div className='flex gap-x-4'>
//                     <Button className='w-12 px-3 m-3 h-10 hidden sm:inline' color='gray' pill>
//                         <FaMoon />
//                     </Button>
//                     <Link to='/sign-in'>
//                         <Button gradientDuoTone style={{ margin: '4px 3px', backgroundColor: '#1D4ED8', color: '#FFFFFF' }}>Sign In</Button>
//                     </Link>
//                 </div>
//                 <Navbar.Toggle />
//             </div>
//             <Navbar.Collapse className='gap-y-2'>
//                 <div className='flex gap-x-4'>
//                     <Navbar.Link active={path === "/"} as={'div'}>
//                         <Link to='/'>Home</Link>
//                     </Navbar.Link>
//                     <Navbar.Link active={path === "/about"} as={'div'}>
//                         <Link to='/about'>About</Link>
//                     </Navbar.Link>
//                     <Navbar.Link active={path === "/projects"} as={'div'}>
//                         <Link to='/projects'>Projects</Link>
//                     </Navbar.Link>
//                 </div>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }


// import { Button, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon } from 'react-icons/fa6';

// export default function Header() {
//     const path = useLocation().pathname;
//     return ()


        // <Navbar className='bg-gray-800 text-white border-b-2 flex items-center justify-between px-4 py-2 md:px-8 md:py-4 transition-all duration-300 ease-in-out'>
        //     <div className='flex items-center'>
        //         <Link to='/' className='whitespace-nowrap text-sm sm:text-xl font-semibold'>
        //             <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
        //                 Bloggers
        //             </span>
        //             Blog
        //         </Link>
        //         <form className='ml-4 hidden lg:inline'>
        //             <TextInput
        //                 type='text'
        //                 placeholder='Search...'
        //                 // rightIcon={AiOutlineSearch}
        //                 className='rounded-lg'
        //             />
        //         </form>
        //         <Button className='w-12 h-10 ml-4 lg:hidden' color='gray' pill>
        //             <AiOutlineSearch />
        //         </Button>
        //     </div>
        //     <div className='flex gap-2 md:order-2'>
        //         <div className='flex gap-x-4'>
        //             <Button className='w-15 m-3 h-10 hidden sm:inline' color='red'>night
        //                 {/* <FaMoon /> */}
        //                 {/* yha pr night wali famoon ki icon thi */}
        //             </Button>
        //             <Link to='/sign-in'>
        //                 <Button gradientDuoTone style={{ margin: '15px 3px', backgroundColor: '#1D4ED8', color: '#FFFFFF' }}>Sign In</Button>
        //             </Link>
        //         </div>
        //         <div className='m-2'> <Navbar.Toggle /></div>
               
        //     </div>
        //     <Navbar.Collapse className='gap-y-2'>
        //         <div className='flex gap-x-4'>
        //             <Link to='/' className={`${path === "/" ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors duration-200`}>Home</Link>
        //             <Link to='/about' className={`${path === "/about" ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors duration-200`}>About</Link>
        //             <Link to='/projects' className={`${path === "/projects" ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors duration-200`}>Projects</Link>
        //         </div>
                
        //     </Navbar.Collapse>
        // </Navbar>
    // );
// }


import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='bg-gray-800 text-white border-b-2 flex items-center justify-between px-4 py-2 md:px-8 md:py-4 transition-all duration-300 ease-in-out'>
            <div className='flex items-center'>
                <Link to='/' className='whitespace-nowrap text-sm sm:text-xl font-semibold'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                        Blogify
                    </span>
                    
                </Link>
                <form className='ml-4 hidden lg:inline'>
                    <TextInput
                        type='text'
                        placeholder='Search...'
                        // rightIcon={AiOutlineSearch}
                        className='rounded-lg'
                    />
                </form>
                <Button className='w-12 h-8 ml-4 lg:hidden' color='gray' pill>
                    <AiOutlineSearch />
                </Button>
            </div>
            <div className='flex gap-2 md:order-2'>
                <div className='flex gap-x-4'>
                    <Button className='w-12 px-2 m-5 h-10 hidden sm:inline' color='black' pill>Night
                        {/* <FaMoon /> */}
                    </Button>
                    <Link to='/sign-in'>
                    <Button 
                     gradientDuoTone 
                     style={{ 
                     margin: '25px 3px', 
                     backgroundColor: '#1D4ED8', 
                     color: '#FFFFFF', 
                    transition: 'background-color 0.3s ease, transform 0.3s ease' // Add transition for background-color and transform
 }}
 className="hover:bg-blue-700 hover:shadow-lg transform hover:scale-105" // Add hover effects
>
 Sign In
</Button>

                        {/* <Button gradientDuoTone style={{ margin: '25px 3px', backgroundColor: '#1D4ED8', color: '#FFFFFF' }}>Sign In</Button> */}
                    </Link>
                </div>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='gap-y-2'>
                <div className='flex gap-x-4'>
                    <Link to='/' className={`${path === "/" ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors duration-200`}>Home</Link>
                    <Link to='/about' className={`${path === "/about" ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors duration-200`}>About</Link>
                    <Link to='/projects' className={`${path === "/projects" ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors duration-200`}>Projects</Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}
