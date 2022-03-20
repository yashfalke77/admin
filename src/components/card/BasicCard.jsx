import React from 'react'
import "./card.scss"

const BasicCard = (props) => {

    console.log(props)
    return (
        <div className='card'>
            <div className="info1">
                <div className="tabless">
                    <ul className="tabless__headlist">
                        <li className="tabless__headitems">Name: </li>
                        <li className="tabless__headitems">Email: </li>
                    </ul>
                    <ul className="tabless__list">
                        <li className="tabless__items">{props.name}</li>
                        <li className="tabless__items">{props.email}</li>
                    </ul>
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default BasicCard