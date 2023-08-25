// import { useEffect, useState } from "react";
// const useFetch = () => {
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         const abortCont = new AbortController();
//         setTimeout(() => {
//             fetch(url, { signal: abortCont.signal })
//                 .then(res => {
//                     if (!res.ok) {
//                         throw Error("could not fetch the data for that ressource")
//                     }
//                     return res.json()
//                         .then((data) => {
//                             setData(data)
//                             setLoading(false)
//                             setError(false)
//                         })
//                 }).catch(error => {
//                     if (error.name === 'AbortError') {
//                         console.log("fetch Abort")
//                     } else {
//                         setError(error.message)
//                         setLoading(false)
//                     }
//                 })
//         }, 1000);
//         return () => abortCont.abort()
//     }, [url])
//     return { data, error, loading }
// }
// export default useFetch