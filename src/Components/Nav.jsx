import { Link } from "react-router-dom";
function Nav() {
    return (
        <div className="w-3/4 text-4xl">
            <ul className="flex flex-row h-full">
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"><Link to="/">Accueil</Link></li>
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"> <Link to="/search">Recherche</Link></li>
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"> <Link to="/register">Inscription</Link></li>
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"><Link to="/login">Connexion</Link></li>
            </ul>
        </div>
    );
}

export default Nav;