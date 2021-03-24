import React from "react";
import './article.css';

export default function Article({infos}) {

    return (
        <article>
            <h3>{infos.title}</h3>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w300${infos.poster_path}` } alt={infos.title}/>
                <figcaption>{infos.overview}</figcaption>
            </figure>
        </article>
    )
}
