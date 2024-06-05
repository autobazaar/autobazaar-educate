import React from 'react';

const PaginationTwo = ({ pagination, setCurrentpage, currentPage }) => {

    const pages = [];
    for (let i = 1; i <= pagination?.lastPage; i++) {
        pages.push(
            <li key={i} onClick={()=>setCurrentpage(i)} className={pagination?.currentPage === i ? 'active' : ''}>
                <a href={`#`}>{i}</a>
            </li>
        );
    }

    const handlePervious = () => {
        if (currentPage > 1) {
            setCurrentpage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pagination?.lastPage) {
            setCurrentpage(currentPage + 1)
        }
    }

    return (
        <>
            <li><a href="#" aria-label="Previous" onClick={handlePervious}><i className="icon-west"></i></a></li>
            {pages}
            {/* <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li className="more-next"><a href="#"></a></li>
            <li><a href="#">8</a></li> */}
            <li><a href="#" aria-label="Next" onClick={handleNext}><i className="icon-east"></i></a></li>
        </>
    )
}

export default PaginationTwo;