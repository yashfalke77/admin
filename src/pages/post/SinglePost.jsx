import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import config from "../../config.json"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import "./single.scss"
import axios from "axios"
import BasicCard from "../../components/card/BasicCard";

const SinglePost = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const params = useParams()

    useEffect(() => {
        const getSinglePost = async () => {
            const response = await axios.get(`${config.apiEndPoint}/posts/${params.postId}`)
            setPost(response.data)
        }
        const getPostComments = async () => {
            const response = await axios.get(`${config.apiEndPoint}/posts/${params.postId}/comments`)
            setComments(response.data)
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
                    <div className="cont">
                        <h1 className="headingPrimary">
                            <span className="headingPrimary--main">Post</span>
                            <span className="headingPrimary--sub">Details :</span>
                        </h1>
                        <div className="cont__button">
                            <Link to={`/${post.userId}`} className='button button--blue'>View User</Link>
                        </div>
                    </div>
                    <div className="detailss">
                        <ul className="detailss__headlist">
                            <li className="detailss__headitems">Title:</li>
                            <li className="detailss__headitems">Body:</li>
                        </ul>
                        <ul className="detailss__list">
                            <li className="detailss__items">{post.title}</li>
                            <li className="detailss__items">{post.body}</li>
                        </ul>
                    </div>
                    <h2 className="headingSecondary">Comments : </h2>
                    <div className="comments">
                        {comments && comments.map((comment) => (
                            < BasicCard key={comment.id} name={comment.name} email={comment.email} comment={comment.body} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost