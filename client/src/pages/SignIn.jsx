import { useState } from "react"
import { data, Link, useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../components/Oauth";

function SignIn() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state)=>state.user);


  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/sign-in',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)

      if(data.success === false){
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
      
    } catch (e) {
      console.log(e)
      dispatch(signInFailure(data.message))
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
        <input type="email" placeholder="E-mail" className="border p-3 rounded-lg" id="email"  onChange={handleChange}/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password"  onChange={handleChange}/>
        <button  className="bg-slate-700 text-white p-3 rounded-lg cursor-pointer uppercase hover:opacity-95 disabled:opaccity-80">{ loading ? 'Loading..': 'Sign In'}</button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account?</p>
        <Link to={"/sign-up"}>
        <span className="text-blue-700">
          Sign Up
        </span></Link>
      </div>
      { error && (
        <p>{error}</p>
      )}
    </div>
  )
}

export default SignIn