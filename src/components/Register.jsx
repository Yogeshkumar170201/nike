import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const user = JSON.stringify(inputs);
    setInputs({
      name: "",
      email: "",
      phoneNo: "",
      password: "",
    });
     axios
       .post(
         "http://localhost:8082/register",
         user,
         {
           headers: {
             "Content-Type": "application/json",
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Methods":
               "GET,PUT,POST,DELETE,PATCH,OPTIONS",
           },
         }
       )
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
  };

  return (
    <div className="mt-[50px] flex flex-column justify-between px-11">
      <div>
        <p className="text-[#c48782] pt-6 font-medium">
          Our Summer collections
        </p>
        <p className="text-7xl pt-6 font-semibold">The New Arrival</p>
        <p className="text-7xl pt-6 font-semibold">
          <span className="text-[#e06d63]">Nike</span> Shoes
        </p>
        <p className="text-[#737272] mt-4">
          Discover stylish Nike arrivals, quality
        </p>
        <p className="text-[#737272]">
          comfort, and innovation for active life
        </p>
        <button className="bg-[#e06d63] pt-2 pb-2 px-4 mt-4 rounded-3xl text-white">
          Shop now
        </button>
      </div>
      <div className="self-center p-6 bg-[#f5f0e9] rounded-xl shadow-md shadow-black w-[35%] flex flex-col justify-evenly min-h-full align-center">
        <p className="text-lg text-[#e06d63] font-bold text-center font-sans">
          Register Here
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-slate-100 rounded-lg text-black outline-0 pt-2 pb-2 px-4 mt-6"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-slate-100 rounded-lg text-black outline-0 pt-2 pb-2 px-4 mt-6"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your Phone No"
          className="bg-slate-100 rounded-lg text-black outline-0 pt-2 pb-2 px-4 mt-6"
          name="phoneNo"
          value={inputs.phoneNo}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-slate-100 rounded-lg text-black outline-0 pt-2 pb-2 px-4 mt-6"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button
          className="bg-[#e06d63] pt-2 pb-2 px-4 mt-6 rounded-3xl text-white w-[150px] self-center"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
