import React from 'react'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  // const [jwtToken] = useJWTtoken(user);
  const [
    signInWithEmailAndPassword,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    console.log(data)
  };

  let errorMessage;
  if(error){
    errorMessage= <p className="text-red-500"><small>{error.message }</small></p>
  }

  if(user){
    navigate('/candidateslist')
  }
  if(loading){
    return <Loading />
  }

  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">Log In</h2>
        <div className="form-control w-full max-w-xs">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please Give a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 5,
                    message: "password must be 5 character or long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <span className='ml-44 text-primary cursor-pointer'>Forget Password ?</span>
              </label>
            </div>
            {errorMessage}
            <input className="btn btn-wide btn-primary my-10" value="Log In" type="submit" />
          </form>
          <div>
            <Link className='text-primary ' to={'/signup'}>Create new Account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login