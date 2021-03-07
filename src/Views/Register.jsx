import React,{useState} from "react";
import { auth } from "../firebase";
import Error from "../Components/Messages/Error";
import Success from "../Components/Messages/Success";

export default function Register() {
    const [email,setEmail] = useState(""),
          [password,setPassword] = useState(""),
          [confPassword,setConfPassword] = useState(""),
          [type,setype] = useState("");
          
    const Alert = ({type}) =>{
        const success = "success",
              error = "error",
              register = "register",
              mdp = "mdp";
        
        if(success === type.split(" ")[0]){
            if(register === type.split(" ")[1]){
                return <Success message={"Vous vous êtes inscrit avec succès ! Un mail de confirmation a été envoyé !"}/>
            }else if(mdp === type.split(" ")[1]){
                return <Error message={"Une erreur est survenue ! Veillez réessayer ultérieurement !"}/>
            }
        }else if(error === type.split(" ")[0]){
            return <Error message={"Les mots de passe ne correspondent pas !"}/>
        }else{
            return null;
        }
    }      
    const sendRegister = (e) =>{
        e.preventDefault();
        if(password === confPassword){
            auth.createUserWithEmailAndPassword(email,password)
            .then((userCredential)=>{
                setype("success register")
                document.querySelector("#email").value = "";
                document.querySelector("#password").value = "";
                document.querySelector("#confPassword").value = "";
            }).catch((err)=>{
                setype("error register")
            })
        }else{
            setype("error mdp")
        }
    }
    return (
        <div id="register" className="w-screen h-full flex flex-col flex-nowrap justify-center items-center">
            <div className="text-center h-1/4 flex justify-center items-center">
                <h1 className="text-6xl">Inscription</h1>
            </div>
            <Alert type={type}/>
            <form id="formRegister" className="h-3/4" onSubmit={sendRegister}>
                <div className="h-1/4 w-screen">
                    <div className="h-1/2">
                        <label htmlFor="email" className="text-2xl">Email</label>
                    </div>
                    <div className="h-1/2">
                        <input className="w-80 focus:ring-2 focus:ring-black" onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" required/>
                    </div>
                </div>
                <div className="h-1/4 w-screen">
                    <div className="h-1/2">
                        <label htmlFor="password" className="text-2xl">Mot de passe</label>
                    </div>
                    <div className="h-1/2">
                        <input className="w-80 focus:ring-2 focus:ring-black" onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" required/>
                    </div>
                </div>
                <div className="h-1/4 w-screen">
                    <div className="h-1/2">
                        <label htmlFor="confPassword" className="text-2xl">Confirmer votre mot de passe</label>
                    </div>
                    <div className="h-1/2">
                        <input className="w-80 focus:ring-2 focus:ring-black" onChange={(e)=> setConfPassword(e.target.value)} type="password" name="confPassword" id="confPassword" required/>
                    </div>
                </div>
                <div className="h-1/4 w-screen">
                    <button type="submit" className="text-2xl bg-pink-500 border-2 border-black w-40 rounded-md focus:ring-2 
                    focus:ring-black hover:bg-gray-600 active:bg-gray-200">S'inscrire</button>
                </div>
            </form>
        </div>
    );
}