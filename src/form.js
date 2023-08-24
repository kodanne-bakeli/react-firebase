// import { useState,useContext } from "react";
// import { crud } from "./firebase";
// import contextValue from "./blogList";

// const Form = () => {
    
//     const [title,setTitle] = useState("");
//     const [body,setBody] = useState("");
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (title !== ""&& body !== "") {
//             await crud.addTask(contextValue.title.title,contextValue.body.body);
//             contextValue.title.setTitle("");
//             contextValue.body.setBody("");
//         }
//     }
//     return ( 
//         <div>
//             <h1>Add a New Note</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" className="form-control w-50 mx-auto my-3" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
//                 <textarea className="form-control w-50 mx-auto" value={body} onChange={(e)=>{setBody(e.target.value)}}> </textarea>
//                 <button>Add blog</button>
//             </form>
//         </div>
//      );
// }
 
// export default Form;