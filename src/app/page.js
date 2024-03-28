// "use client";
// import { useState } from "react";
// import styles from "./page.module.css";

// export default function Home() {
//   const [name, setName] = useState("vansh");

//   const apple = () => {
//     setName("Nice vansh patel");
//   };

//   const InnerComp = () => {
//     return <h1>Hello Inner camp vansh</h1>;
//   };

//   return (
//     <>
//       <main className={styles.main}>
//         <h1>Events, function, and state {name}</h1>
//         <button onClick={() => apple()}>Click Me</button>
//         <InnerComp />
//       </main>
//     </>
//   );
// }

// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";

// const Home = () => {
//   const router = useRouter();

//   const navigate = (name) => {
//     router.push(name);
//   };

//   return (
//     <>
//       <div>
//         <h1>Basic Routing | Make New Page</h1>
//         <Link href="/login">Go to Login Page</Link>
//         <br />
//         <br />
//         <br />
//         <Link href="/about">Go to About Page</Link>
//         <br />
//         <br />
//         <br />
//         <button onClick={() => navigate("/login")}>Go to Login Page</button>
//         <br />
//         <br />
//         <br />
//         <button onClick={() => navigate("/about")}>Go to About Page</button>
//       </div>
//     </>
//   );
// };

// export default Home;

// "use client"
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";

// const page = () => {
//   const router = useRouter();
//   const navigate = (page) => {
//     router.push("/about" + page);
//   };
//   return (
//     <>
//       <div>
//         <h3>Hello home page</h3>
//         <Link href="/about/aboutstudent">About Student</Link>
//         <br />
//         <br />
//         <br />
//         <Link href="/about/aboutcollege">About Student College</Link>
//         <br />
//         <br />
//         <br />
//         <button onClick={() => navigate("/aboutcollege")}>
//           About Student College
//         </button>
//         <button onClick={() => navigate("/aboutstudent")}>About Student</button>
//       </div>
//     </>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h3>Hello main pages</h3>
      </div>
    </>
  );
};

export default page;
