// import { useEffect, useState } from 'react'

// function useJWTtoken(user) {
//     const [jwtToken, setJwtToken] = useState("")
//     useEffect(()=>{
//         const email = user?.user?.email;
//         const currentUser = {email:email};
//         if(email){
//             fetch(`http://localhost:5000/candidates/${email}`,{
//                 method: "PUT",
//                 headers: {
//                     "content-type": "application/json",
//                   },
//                 body: JSON.stringify(currentUser)
//             })
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log(data);
//           const accessToken = data.token;
//           localStorage.setItem("accessToken", accessToken);
//           setJwtToken(accessToken);
//             })
//         }
//     },[user])
//   return [jwtToken]
// }

// export default useJWTtoken;