function Nav(){
    return (
        <div className="w-3/4 bg-blue-200 text-4xl">
            <ul className="flex flex-row h-full">
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"><a href="#">Accueil</a></li>
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"><a href="#">Inscription</a></li>
                <li className="flex-1  flex items-center justify-center h-full cursor-pointer"><a href="#">Connexion</a></li>
            </ul> 
        </div>
    );
}

export default Nav;