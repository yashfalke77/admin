import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import config from "../../config.json"
import "./user.scss"
import { Link } from 'react-router-dom';



const SingleUser = () => {

    const params = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        const getSingleUser = async () => {
            const response = await axios.get(`${config.apiEndPoint}/users/${params.userId}`)
            setUser(response.data)
        }
        getSingleUser()
    }, [])

    return (
        <div className='home'>
            < Sidebar />
            <div className="home__container">
                < Navbar />
                <div className="listContainer">
                    <h1 className="headingPrimary">
                        <span className="headingPrimary--main">User</span>
                        <span className="headingPrimary--sub">Details :</span>
                    </h1>
                    <div className="details">
                        <h3 className="headingPrimary">
                            <span className="headingSecondary--main">{user.name}</span>
                            <span className="headingSecondary--sub">@{user.username}</span>
                        </h3>
                        <div className="info">
                            <ul className="details__headlist">
                                <li className="details__headitems">ID:</li>
                                <li className="details__headitems">Email:</li>
                                <li className="details__headitems">Phone:</li>
                                <li className="details__headitems">Website:</li>
                            </ul>
                            <ul className="details__list">
                                <li className="details__items">{user.id}</li>
                                <li className="details__items">{user.email}</li>
                                <li className="details__items">{user.phone}</li>
                                <li className="details__items">{user.website}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to={`/post/user/${user.id}`} className='btn btn--blue btn--large'>View Posts</Link>
                        <Link to={`/album/user/${user.id}`} className='btn btn--outline'>View albums</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUser