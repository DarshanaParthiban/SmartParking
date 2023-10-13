import React from "react";
import img from "../assets/bg.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Update(){
    const [uname, setUname] = useState('');
    const [Pass, setPass] = useState('');
    const handleOnSubmit = async () => {
        let result = await fetch(
          'http://localhost:5000/update', {
          method: "PUT",
          body: JSON.stringify({ uname, Pass }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        result = await result.json();
        if (result) {
          alert("Space Alotted");
        }
        
      }
    return(
        <>
        <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})`}}>
            <div className="flex flex-col gap-4 text-white font-serif text-center ">
                <h1 className="text-8xl text-white font-serif">SMART PARKING</h1>
                <div className="w-fit mx-auto mt-12 bg-[#00000033] border-2 p-12 border-slate-50">
                    <div className=" text-white flex flex-col gap-4">
                        <h2 className="text-6xl text-white ">PARKING SPACE</h2>
                        <form className="flex flex-col gap-4 text-2xl w-fit mx-auto text-black mt-12">
                            <input type="text" placeholder="Number Plate" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" value={uname} onChange={e => setUname(e.target.value)} />
                            <input type="text" placeholder="Space" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" value={Pass} onChange={e => setPass(e.target.value)} />
                        </form>
                        <Link className="bg-[#ffffff] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-black shadow-xl cursor-pointer hover:shadow-[#9e9e9e] hover:bg-[#000000] hover:text-white text-center"  onClick={handleOnSubmit}>Alot</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Update;