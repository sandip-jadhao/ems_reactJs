import { useState } from "react";

const Login = () => {
    const [email,setEmail]=useState("");
    const [pass,setPass]= useState("");
    const handleSubmit = (e)=>{
         e.preventDefault();
    }
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-black">
      <div className="border-2 border-emerald-600 p-20 rounded-lg">
        <form 
        onSubmit={(e)=>{
            handleSubmit(e); 
            console.log("Email:",email);
            console.log("Password:",pass);
            setEmail("");
            setPass("");
        }}
        className="flex flex-col items-center justify-center gap-6"
        >
          <input 
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{
            setEmail(e.target.value)
            }}
          required
          />
          <input 
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="current-password"
            placeholder="Enter your password"
            value={pass}
            onChange={(e)=>{
            setPass(e.target.value)
            }}
          required
          />
          <button 
            className="text-white border-none bg-emerald-600 hover:bg-emerald-700 py-3 px-5 mt-2 rounded-full"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;