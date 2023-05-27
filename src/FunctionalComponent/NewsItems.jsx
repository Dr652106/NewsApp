import React from 'react'

export default function NewsItems(props) {

        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card">
                    <img src={props.pic} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0,50)+"..."}</h5>
                        <h6 className='card-source'>{props.source}- {`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()}`}</h6>
                        <hr/>
                        <p className="card-text">{props.description.slice(0,150)+"..."}</p>
                        <a href={props.url} className="btn background text-light w-100 btn-sm">Read Full Artical</a>
                    </div>
                </div>
            </div>
        )
    }
