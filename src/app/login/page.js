"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/about" + page);
  };
  return (
    <>
      <h3>Hello Login</h3>
      <Link href="/">Go to Home Page</Link>
      <button onClick={() => navigate("/aboutcollege")}>
        About Student College
      </button>
      <button onClick={() => navigate("/aboutstudent")}>About Student</button>
    </>
  );
};

export default Login;
