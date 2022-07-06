import React from 'react';
const Pagination = ({postsPerPage, totalPosts, handleChoosePage,numPage}) =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example" className="position-absolute start-50 translate-middle">
            <ul className="pagination">
                {pageNumbers.map( (pageNumber,index) => (
                <li className="page-item" key={index} >
                    <a className="page-link me-1 pageLink" 
                        onClick={() => handleChoosePage(pageNumber)} 
                        style={numPage == pageNumber ? {color: '#FFFFF7', backgroundColor: '#D8335B'} : {color: '#EB6361'}}>
                            <b>{pageNumber}</b>
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;