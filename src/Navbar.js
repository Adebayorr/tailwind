import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="header">
            <header className="header flex w-full justify-between items-center px-5 py-5 bg-white">
                <h2 className="logo text-xl uppercase font-bold">The Logo</h2>
                <nav className="navbar flex gap-x-2 content-center">
                <NavLink to="/" className="link p-2 hover:text-sky-300 uppercase">Home</NavLink>
                <NavLink to="/events" className="link p-2 hover:text-sky-300 uppercase">Events</NavLink>
                <NavLink to="/menu" className="link p-2 hover:text-sky-300 uppercase">Menu</NavLink>
                <NavLink to="/lodge" className="link p-2 hover:text-sky-300 uppercase">Lodge</NavLink>
                </nav>
            </header>
        </div>
     );
}
 
export default Navbar;