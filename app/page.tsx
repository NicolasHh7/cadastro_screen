'use client'
import Image from "next/image";
import {Login} from "./components/login"
function App() {
  return(
    <div className="App ">
      <div className="shadow-xl shadow-gray-400/20  sticky lg:h-full h-50 lg:rounded-br-[50px] lg:rounded-tr-[50px] overflow-hidden overflow-y-hidden">
        <Image
          src="/cafezinho.jpg"
          alt="Background"
          fill
          objectFit="object-cover"
          quality={100}
        />
      </div>
      <Login/>
    </div>
  )
}
export default App;