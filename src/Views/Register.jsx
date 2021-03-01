import React,{useState} from "react";
export default function Register() {
    const [email,setEmail] = useState(""),
          [password,setPassword] = useState(""),
          [confPassword,setConfPassword] = useState("");

    const sendRegister = (e) =>{
        e.preventDefault();
        if(password === confPassword){
            console.log("ok")
        }else{
            console.log("not ok")
        }
        console.log(email,password,confPassword)
    }
    return (
        <div id="register" className="w-screen h-full flex flex-col flex-nowrap">
            <div className="text-center h-1/4 flex justify-center items-center">
                <h1 className="text-6xl">Inscription</h1>
            </div>
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