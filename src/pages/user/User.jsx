import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import config from "../../config.json"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./user.scss"
import axios from "axios"

const User = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(`${config.apiEndPoint}/users`)
            setUser(response.data)
        }
        getUsers()
    }, [])


    return (
        <div className='home'>
            < Sidebar />
            <div className="home__container">
                < Navbar />
                <div className="listContainer">
                    <h1 className="listContainer__title">User</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {user && user.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td><Link className="link" to={`/${u.id}`}>{u.name}</Link></td>
                                    <td>{u.email}</td>
                                    <td>
                                        <Link to={`/post/user/${u.id}`} className="btn btn--blue btn--blue-small">View Posts</Link>
                                        <Link to={`/album/user/${u.id}`} className="btn btn--outline">View Albums</Link>
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

export default User