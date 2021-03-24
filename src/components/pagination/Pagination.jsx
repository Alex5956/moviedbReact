import React from "react";
import {Link} from "react-router-dom";

export default function Pagination({totalPages}){

    return (
        <div className={'pagination'}>
            {Array
                .from(Array(totalPages))
                .map((x, index) => <Link key={index} to={'/pages/' + (index + 1)}>{index + 1} </Link>)}
        </div>
    );

}
