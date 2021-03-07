import { useState } from "react";
import { auth } from "../firebase";
import Error from "../Components/Messages/Error";
import Success from "../Components/Messages/Success";

export default function Login() {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [type, setype] = useState("");

    const Alert = ({ type }) => {
        const success = "success",
            error = "error";

        if (success === type) {
            return <Success message={"Vous vous êtes connecté avec succès !"} />
        } else if (error === type) {
            return <Error message={"L'email ou le mot de passe est invalide !"} />
        } else {
            return null;
        }
    }
    const sendLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                setype("success")
                document.querySelector("#email").value = "";
                document.querySelector("#password").value = "";
            }).catch((err) => {
                setype("error")
            })
    }
    return (
        <div id="login" className="w-screen h-full flex flex-col flex-nowrap justify-center items-center">
            <div className="text-center h-1/4 flex justify-center items-center">
                <h1 className="text-6xl">Connexion</h1>
            </div>
            <Alert type={type} />
            <form id="formLogin" className="h-3/4" onSubmit={sendLogin}>
                <div className="h-1/4 w-screen">
                    <div className="h-1/2">
                        <label htmlFor="email" className="text-2xl">Email</label>
                    </div>
                    <div className="h-1/2">
                        <input className="w-80 focus:ring-2 focus:ring-black" onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                    </div>
                </div>
                <div className="h-1/4 w-screen">
                    <div className="h-1/2">
                        <label htmlFor="password" className="text-2xl">Mot de passe</label>
                    </div>
                    <div className="h-1/2">
                        <input className="w-80 focus:ring-2 focus:ring-black" onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required />
                    </div>
                </div>
                <div className="h-1/4 w-screen">
                    <button type="submit" className="text-2xl bg-pink-500 border-2 border-black w-40 rounded-md focus:ring-2 
                focus:ring-black hover:bg-gray-600 active:bg-gray-200">Se connecter</button>
                </div>
            </form>
        </div>
    );
}