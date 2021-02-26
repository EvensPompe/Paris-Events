import "./Header.css";
import Nav from './Nav.jsx';

function Header() {
    return (
        <div className="h-16 text-5xl font-mono bg-pink-400 flex flex-row flex-nowrap w-screen">
            <div className="w-1/4 cursor-pointer">
                <h1>Paris Events</h1>
            </div>
            <Nav/>
        </div>
    );
}

export default Header;