import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import config from "../../config.json"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./album.scss"
import axios from "axios"

const Album = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(`${config.apiEndPoint}/albums`)
            setAlbums(response.data)
        }
        getUsers()
    }, [])


    return (
        <div className='album'>
            < Sidebar />
            <div className="album__container">
                < Navbar />
                <div className="listContainer">
                    <h1 className="listContainer__title">Albums</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {albums && albums.map((album) => (
                                <tr key={album.id}>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                    <td>
                                        <Link to={`/${album.userId}`} className="btn btn--blue btn--blue-small">View User</Link>
                                        <Link to={`/album/${album.id}`} className="btn btn--outline">View Photos</Link>
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

export default Album