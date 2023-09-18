import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not found' },
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="text-4xl md:hidden p-5 bg-gray-500">
                {
                    open ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex py-3 absolute md:static duration-200 ${open?'left-12':'-left-60 '} bg-slate-300 rounded-lg md:left-12 top-12`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;