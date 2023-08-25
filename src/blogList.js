// import { crud,database } from "./firebase";
// import { getFirestore,collection,
//     onSnapshot,
//     addDoc,
//     deleteDoc,
//     doc,
//     getDoc,
//     updateDoc, } from "firebase/firestore"
// import { useState, useEffect } from "react";
// const Blogs = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");
//     const [newTitle, setNewTitle] = useState(title);
//     const [newBody, setNewBody] = useState(body);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (title !== "" && body !== "") {
//             await crud.addTask(title, body);
//             setTitle("");
//             setBody("");
//         }
//     }
//     const handleDelete = async (e, id) => {
//         e.preventDefault();
//         if (title !== "" && body !== "") {
//             await crud.deleteTask(id);
//             setTitle("");
//             setBody("");
//         }
//     }
//     const handleEdit = async (e) => {
//         e.preventDefault();
//         if (title !== "" && body !== "") {
//             await crud.updateTask(newTitle, newBody);
//             setNewTitle("");
//             setNewBody("");
//         }
//     }


//     const handleChange = (e) => {
//         e.preventDefault();
//         if (blogs.complete === true) {
//             setNewTitle(title);
//             setNewBody(body);
//         } else {
//             title = "";
//             body = "";
//             setNewTitle(e.target.value);
//             setNewBody(e.target.value);
//         }
//     };
//     useEffect(() => {
//         const getBlogs = async () => {
//             const data = await getDoc(collection(database, "todolist"));
//             setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//         };
//         getBlogs();
//     }, []);
//     function Form() {
//         return (
//             <div>
//                 <h1>Add a New Note</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" className="form-control w-50 mx-auto my-3" value={title} onChange={(e) => { setTitle(e.target.value) }} />
//                     <textarea className="form-control w-50 mx-auto" value={body} onChange={(e) => { setBody(e.target.value) }}> </textarea>
//                     <button>Add blog</button>
//                 </form>
//             </div>
//         );
//     }
//     function List() {
//         return (
//             <div>
//                {blogs.map((blog) => {
//                 return (
//                     <div>
//                         <h1>{blog.title}</h1>
//                         <h1>{blog.body}</h1>
//                         <button onClick={() => {handleDelete(blog.id);}}>Delete blog</button>
//                         <button onClick={() => {handleEdit(blog.id);}}>edit blog</button>
//                     </div>
//                 );
//             })}
//             </div>
//         );
//     }
//     return (
//         <div className="todo">
//             <Form />
//             <List />
//         </div>
//     );

// }
// export default Blogs;
import { useState, useEffect } from "react";
import "./App.css";
import { database, crud } from "./firebase";
import {
    collection,
    updateDoc,doc
} from "firebase/firestore";

function App() {
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    const [blogs, setBlogs] = useState([]);
    const todolistCollectionRef = collection(database, "todolist");

    const createBlog = async () => {
        await crud.addTask ( newTitle,  newBody);
        setNewTitle("")
        setNewBody("")
    };

    const updateTitle = async (id) => {
        const blogDoc = doc(database, "todolist", id);
        await updateDoc(blogDoc, { 
            title: newTitle});
    };
    const updateBody = async (id) => {
        const blogDoc = doc(database, "todolist", id);
        await updateDoc(blogDoc, { 
            body: newBody});

        
    };

    const deleteBlog = async (id) => {
        await crud.deleteTask(id);
    };

    useEffect(() => {
        const getBlogs = async () => {
            crud.onGetTasks((querySnapshot)=>{setBlogs(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))})
            console.log(setBlogs);
        };

        getBlogs();
    }, []);
    return (
        <div classtitle="App">
            <input type="text"
                className="form-control mb-3 w-75 mx-auto"
                placeholder="title..."
                onChange={(event) => {
                    setNewTitle(event.target.value);
                }}
            />
            <textarea className="form-control w-75 mx-auto"
                placeholder="body..."
                onChange={(event) => {
                    setNewBody(event.target.value);
                }}
            >
            </textarea>

            <button className="btn btn-primary" onClick={createBlog}> Create User</button>
            {blogs.map((blog) => {
                return (
                    <div key={blog.id}>
                        <div className="card card-body mt-2 border-primary w-75 mx-auto">
                            <h3 className="card-title card-title text-success">title: {blog.title}</h3>
                            <p className="text-warning">body: {blog.body}</p>
                            <div>
                                <button className="btn btn-danger m-2" data-id="${doc.id}" onClick={() => { deleteBlog(blog.id); }}>
                                <i className="fa-solid fa-trash"></i>
                                </button>
                                <button className="btn btn-success m-2" onClick={() => { updateTitle(blog.id); }}>
                                <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button className="btn btn-warning m-2" onClick={() => { updateBody(blog.id); }}>
                                <i className="fa-solid fa-file-pen"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                );
            })}
        </div>
    )
}
export default App;