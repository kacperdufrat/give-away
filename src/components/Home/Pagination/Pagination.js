import React from "react";
import "../../../scss/Pagination.scss";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);  
    }

    return (
        <nav>
            <ul className="paginate-btn">
                {pageNumbers.map(number => <li key={number}>
                    <button onClick={() => paginate(number)}>{number}</button>
                </li>)}
            </ul>
        </nav>
    )
}

export default Pagination;