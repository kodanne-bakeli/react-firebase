
import { useState, useEffect } from "react";
import "./App.css";
import { database, crud } from "./firebase";
import {
    collection,
    updateDoc
} from "firebase/firestore";

function App() {
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    const [blogs, setBlogs] = useState([]);
    const todolistCollectionRef = collection(database, "todolist");

    const createBlog = async () => {
        await crud.addTask ( newTitle,  newBody);
    };

    const updateTitle = async (id) => {
        const blogDoc = doc(database, "todolist", id);
        await updateDoc(blogDoc, { 
            body: newTitle});
    };
    const updateBody = async (id) => {
        const blogDoc = doc(database, "todolist", id);
        await updateDoc(blogDoc, { 
            body: newBody});

        window.location.reload();
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
    function Form() {
        return(
            <div>
<input type="text"
                className="form-control mb-3"
                placeholder="title..."
                onChange={(event) => {
                    setNewTitle(event.target.value);
                }}
            />
            <textarea className="form-control"
                placeholder="body..."
                onChange={(event) => {
                    setNewBody(event.target.value);
                }}
            >
            </textarea>

            <button className="btn btn-primary" onClick={createBlog}> Create User</button>
            </div>
        )
    }

    return (
        <div classtitle="App">
            <Form />
            {blogs.map((blog) => {
                return (
                    <div key={blog.id}>
                        <div className="card card-body mt-2 border-primary">
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