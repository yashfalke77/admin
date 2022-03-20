import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import config from "../../config.json"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import "./album.scss"
import axios from "axios"
import ActionAreaCard from "../../components/imagecard/ActionAreaCard";

const SingleAlbum = () => {

    const [album, setAlbum] = useState({})
    const [photos, setPhotos] = useState([])
    const params = useParams()

    useEffect(() => {
        const getSinglePost = async () => {
            const response = await axios.get(`${config.apiEndPoint}/albums/${params.albumId}`)
            setAlbum(response.data)
        }
        const getPostComments = async () => {
            const response = await axios.get(`${config.apiEndPoint}/albums/${params.albumId}/photos`)
            setPhotos(response.data)
        }
        getSinglePost()
        getPostComments()
    }, [])


    return (
        <div className='post'>
            < Sidebar />
            <div className="post__container">
                < Navbar />
                <div className="listContainer">
                    <h1 className="headingPrimary">
                        <span className="headingPrimary--main">Album</span>
                        <span className="headingPrimary--sub">Details :</span>
                    </h1>
                    <div className="detailss">
                        <ul className="detailss__headlist">
                            <li className="detailss__headitems">Id:</li>
                            <li className="detailss__headitems">Title:</li>
                        </ul>
                        <ul className="detailss__list">
                            <li className="detailss__items">{album.id}</li>
                            <li className="detailss__items">{album.title}</li>
                        </ul>
                    </div>
                    <h2 className="headingSecondary">Photos : </h2>
                    <div className="comments">
                        {photos && photos.map((photo) => (
                            < ActionAreaCard key={photo.id} thumbnailUrl={photo.thumbnailUrl} title={photo.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleAlbum