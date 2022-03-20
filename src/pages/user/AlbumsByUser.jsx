import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import config from "../../config.json"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import "../album/album.scss"
import axios from "axios"

const AlbumsByUser = () => {

    const [albums, setAlbums] = useState([])

    const params = useParams()

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(`${config.apiEndPoint}/albums`)
            const albumByUser = response.data.filter((a) => (a.userId === +params.userId))
            setAlbums(albumByUser)
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
                                <th>UserID</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {albums && albums.map((album) => (
                                <tr key={album.id}>
                                    <td>{album.userId}</td>
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

export default AlbumsByUser