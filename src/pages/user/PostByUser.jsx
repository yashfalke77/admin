import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import config from "../../config.json"
import React, { useEffect, useState } from 'react'
import "../post/post.scss"
import axios from "axios"

const PostByUser = () => {

    const [posts, setPosts] = useState([])

    const params = useParams()

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(`${config.apiEndPoint}/posts`)
            const postByUser = response.data.filter((p) => (p.userId === +params.userId))
            setPosts(postByUser)
        }
        getUsers()
    }, [])


    return (
        <div className='post'>
            < Sidebar />
            <div className="post__container">
                < Navbar />
                <div className="listContainer">
                    <h1 className="listContainer__title">Post</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {posts && posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td className="actions">
                                        <Link to={`/${post.userId}`} className="btn btn--blue btn--blue-small">User</Link>
                                        <Link to={`/post/${post.id}`} className="btn btn--outline">Comments</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PostByUser