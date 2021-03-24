import React, {useState, useEffect, Fragment} from "react";
import Article from '../article/Article';
import {getApi} from "../../services/MoviesService";
import Pagination from "react-js-pagination";
import {useParams, useHistory} from 'react-router-dom';

const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8e45f6ec2c281d81b0594cba9e93629f&language=en-US&page='


export default function Movies() {

    let {idPage} = useParams();
    let history = useHistory();

    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPage] = useState(1);

    useEffect(() => {
        let id = idPage === undefined ? 1 : idPage;

        getApi(URL + id).then((res) => {
            setTotalPage(res.total_pages);
            setMovies(res.results);
        });
    }, [idPage]);


    const handlePageChange = (page) => {
        history.push('/pages/' + page);
    }

    return (
        <Fragment>
            <section id="movies" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'self-start',
                flexWrap: 'wrap'
            }}>
                {
                    movies.map(m => {
                        return <Article key={m.id} infos={m}/>
                    })
                }
            </section>
            <Pagination
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                activePage={parseInt(idPage)}
                totalItemsCount={totalPages}
                itemsCountPerPage={1}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
            />

        </Fragment>
    );
}
