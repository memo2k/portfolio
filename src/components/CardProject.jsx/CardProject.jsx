import React from 'react';
import "./card-project.scss";
import { Link } from 'react-router-dom';
import Reveal from '../Reveal/Reveal';

const CardProject = ({ data, ...props }) => {
    return (
        <div className="card-project" {...props}>
            <Reveal>
                <div className="card__inner">
                    <div className="card__info">
                        <div className="card__title">
                            <h3>{data.title}</h3>
                        </div>

                        <div className="card__description">
                            <p>{data.description}</p>
                        </div>

                        <div className="card__tools">
                            {data.tools.map((item, index) => {
                                return (
                                    <img src={item} width="35px" height="35px" alt="" key={index} loading='lazy' />
                                )
                            })}
                        </div>

                        <div className="card__actions">
                            <Link to={data.liveDemo} target='_blank'>See Live <i className="fa-solid fa-arrow-up-right-from-square fa-xl"></i></Link>
                            <Link to={data.code} target='_blank'>Code <i className="fa-brands fa-github fa-xl"></i></Link>
                        </div>
                    </div>

                    <div className="card__image">
                        <img src={data.image} alt="" loading='lazy' width="812.5px" height="500px" />
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

export default CardProject