import React, {useState} from "react";
import Foundations from "./Foundations.js";
import Locals from "./Locals.js";
import Organizations from "./Organizations.js";
import Pagination from "./Pagination.js";

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
        setType(name);
    }


    if (type === "organizations") {
        totalPosts = Organizations.length;
        content = (
            <>
            <h1>Organizacja xxx</h1>
            <p>opis organizacji xxx</p>
            <ul>
                {organizationsPosts.map(el => <li>{el.title}, {el.description}, {el.info}</li>)}
            </ul>
            </>
        )
    } else if (type === "locals") {
        totalPosts = Locals.length;
        content = (
            <>
            <h1>Lokalna zbiórka xxx</h1>
            <p>opis lokalnej zbiórki xxx</p>
            <ul>
                {localsPosts.map(el => <li>{el.title}, {el.description}, {el.info}</li>)}
            </ul>
            </>
        )
    } else {
        totalPosts = Foundations.length;
        content = (
            <>
            <h1>Fundacja xxx</h1>
            <p>opis fundacji xxx</p>
            <ul>
                {foundationsPosts.map(el => <li>{el.title}, {el.description}, {el.info}</li>)}
            </ul>
            </>
        )
    }


    return (
        <>
        <div className="summary-btn">
            <button onClick={() => handleType("foundations")}>Fundacjom</button>
            <button onClick={() => handleType("organizations")}>Organizacjom pozarządowym</button>
            <button onClick={() => handleType("locals")}>Lokalnym zbiórkom</button>
    `   </div>
        <div>{content}</div>

        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </>
    )
}

export default Posts;