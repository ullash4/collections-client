import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(email, password);
    const currentUser = { emai: email, password: password };
    fetch(`https://thawing-spire-56494.herokuapp.com/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("user added");
      });
    console.log(data);
  };

  let errorMessage;
  if (error) {
    errorMessage = (
      <p className="text-red-500">
        <small>{error.message}</small>
      </p>
    );
  }

  if (user) {
    toast("Added user to database");
    navigate("/candidateslist");
  }

  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">Sign Up</h2>
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
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("number", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  minLength: {
                    value: 10,
                    message: "password must be 10 character",
                  },
                })}
                type="text"
                placeholder="Your Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.number?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.number.message}
                  </span>
                )}
                {errors.number?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.number.message}
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
                    value: 6,
                    message: "password must be 6 character or longer",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    message:
                      "Password should be contain at least One Uppercase , One lowercase, One Numeric, One Special Character",
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
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorMessage}
            <input
              className="btn btn-wide btn-primary my-7"
              value="sign up"
              type="submit"
            />
          </form>
          <div className=" ">
            <p>
              Already have account ?{" "}
              <Link className="text-primary" to={"/login"}>
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
