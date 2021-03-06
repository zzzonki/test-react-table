import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Pages({rowsPerPage, totalRows, paginate, currentPage}){

    const numbers = []

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        numbers.push(i)
    }

    const content = (totalRows > rowsPerPage) ?
    <nav className="centered" aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item">
                    <a onClick={() => paginate(1)} className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {numbers.map(number => (
                    ((number - currentPage <= 2) && (number - currentPage >= -2)) ?
                    (number === currentPage ? <li key={number} className="page-item active"><a onClick={() => paginate(number)} className="page-link">{number}</a></li> :
                    <li key={number} className="page-item"><a onClick={() => paginate(number)} className="page-link">{number}</a></li>) :
                    null
                ))}
                <li className="page-item">
                    <a onClick={() => paginate(numbers[numbers.length - 1])} className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav> : null

    return(
        <>
            {content}
        </>
    )
}