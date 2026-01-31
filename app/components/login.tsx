import { useState } from "react"

export const Login = () => {
    const button = "flex px-2 w-full rounded-full h-10 shadow-xl shadow-gray-400/20 items-center text-center justify-center text-sm font-medium transition-all"
    const input = "w-full h-10 outline-none rounded-full bg-gray-300 pl-5 mt-1 text-sm"
    const boxInput = "relative w-full mb-6" 
    type EmailPhone = "email" | "number"


    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [accept, setAccept] = useState("")
    const [inputType, setInputType] = useState<EmailPhone>("email");

    const handleInputChange = (value: string) => {
        if (/^\d+$/.test(value)) {
            setInputType("number");
        } else {
            setInputType("email");
        }
    };
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert("Enviando os dados: " + username + " | " + password + " | " + name + " | " + inputType + " | " + accept)
    }


    return (
        <div className="flex flex-col items-left p-10 text-black max-w-[500px] w-full mx-auto">
            <form action={handleSubmit}>
                <h1 className="text-3xl font-bold mb-6">Create Account</h1>
                
                <div className="flex flex-col gap-5">
                    {/* Container dos botões sociais ajustado para não quebrar linha fácil */}
                    <div className="flex gap-2 w-full">
                        <div className={`${button} bg-black text-white cursor-pointer`}>
                            <p className="whitespace-nowrap">Sign up with Google</p>
                        </div>
                        <div className={`${button} text-black bg-white border border-gray-200 cursor-pointer`}>
                            <p className="whitespace-nowrap">Sign up with Facebook</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600">Or sign up using your email address</p>
                </div>
                
                <div className="flex flex-col mt-4">
                    <div className={boxInput}>
                        <label className="text-sm font-semibold ml-2">Name</label>
                        <input type="text" className={input} required onChange={(e) => setName(e.target.value)}/>
                    </div>
                     <div className={boxInput}>
                         <label className="text-sm font-semibold ml-2">Email or Phone</label>
                        <input type={inputType} className={input} required onChange={(e) => handleInputChange(e.target.value)}/>
                    </div>
                     <div className={boxInput}>
                         <label className="text-sm font-semibold ml-2">Username</label>
                        <input type="text" className={input} required onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                     <div className={boxInput}>
                         <label className="text-sm font-semibold ml-2">Password</label>
                        <input type="password" className={input} required onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                   <div className="flex gap-3 items-center my-4">
                        <input type="checkbox" className="w-5 h-5 rounded-full cursor-pointer" onChange={(e) => setAccept(e.target.value)} required/>
                        <p className="text-xs sm:text-sm">I agree to all terms and Privacy Policy</p>
                   </div>
                   
                   <button className="bg-black w-full text-white h-12 rounded-full font-bold hover:bg-gray-800 transition-colors">
                        Sign up
                   </button>

                    <div className="flex gap-2 items-center justify-center mt-6 text-sm">
                        <p>Already have an account?</p>
                        <a href="#" className="font-bold hover:underline">Log in</a>
                    </div>
                </div>
            </form>
        </div>
    )
}