import React, {useState} from "react";
import Foundations from "./Foundations.js";
import Locals from "./Locals.js";
import Organizations from "./Organizations.js";
import Pagination from "./Pagination.js";
import "../../../scss/Posts.scss";

const Posts = () => {
    const [type, setType] = useState("foundation");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const organizationsPosts = Organizations.slice(indexOfFirstPost, indexOfLastPost);
    const foundationsPosts = Foundations.slice(indexOfFirstPost, indexOfLastPost);
    const localsPosts = Locals.slice(indexOfFirstPost, indexOfLastPost);
    let totalPosts;
    let content;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    
    const handleType = (name) => {
        setCurrentPage(1);
        setType(name);
    }

    if (type === "organizations") {
        totalPosts = Organizations.length;
        content = (
            <ul>
                {organizationsPosts.map(el => <li key={el.title}>
                    <div>
                        <span className="item-title">{el.title}</span> 
                        <span className="item-info">{el.info}</span>
                    </div>
                    <span className="item-description">{el.description}</span>
                </li>)}
            </ul>
        )
    } else if (type === "locals") {
        content = (
            <ul>
                {localsPosts.map(el => <li key={el.title}>
                    <div>
                        <span className="item-title">{el.title}</span> 
                        <span className="item-info">{el.info}</span>
                    </div>
                    <span className="item-description">{el.description}</span>
                </li>)}
            </ul>
        )
    } else {
        totalPosts = Foundations.length;
        content = (
            <ul>
                {foundationsPosts.map(el => <li key={el.title}>
                    <div>
                        <span className="item-title">{el.title}</span> 
                        <span className="item-info">{el.info}</span>
                    </div>
                    <span className="item-description">{el.description}</span>
                </li>)}
            </ul>
        )
    }

    return (
        <>
        <div className="summary-btn">
            <button onClick={() => handleType("foundations")}>Fundacjom</button>
            <button onClick={() => handleType("organizations")}>Organizacjom pozarządowym</button>
            <button onClick={() => handleType("locals")}>Lokalnym zbiórkom</button>
        </div>
        <div className="summary-items">{content}</div>
        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </>
    )
}

export default Posts;