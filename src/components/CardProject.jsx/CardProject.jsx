import React from 'react';
import "./card-project.scss";
import { Link } from 'react-router-dom';

const CardProject = ({ data, ...props }) => {
  return (
    <div className="grid__col grid__col--1of2" {...props}>
        <div className="card-project">
            <div className="card__image">
                <img src={data.image} alt="" />
            </div>

            <div className="card__description">
                <div className="card__title">
                    <h3>{data.title}</h3>
                </div>

                <div className="card__summary">
                    <p>{data.description}</p>
                </div>

                <div className="card__tools">
                    {data.tools.map((item, index) => {
                        return (
                            <img src={item} width="60px" alt="" key={index} />
                        )
                    })}
                </div>

                <div className="card__actions">
                    <Link to={data.code} target='_blank'>Code <i class="fa-brands fa-github fa-xl"></i></Link>
                    <Link to={data.liveDemo} target='_blank'>Live Demo <i class="fa-solid fa-arrow-up-right-from-square fa-xl"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProject