import React from 'react'
import './styles/pagination-styles.css'


function Pagination({ pokemon, PAGE_SIZE, currentPage,  setCurrentPage, setTotalPages }) {
    const pokePages = Math.ceil(pokemon.length / PAGE_SIZE);
    
    // If pokepages has been properly initialized, use it to set the total number of pages.
    if (pokePages)
    {
        setTotalPages(pokePages);
    }

    return (
        <div className={"pagination"}>
            {
                (currentPage !== 1) && <button className={"cap-button"} onClick={() => setCurrentPage(currentPage - 1)}>&lt; Prev</button>
            }
            {
                Array.from({ length: pokePages }, (_, i) => i)
                    .slice((currentPage - 5 < 0) ? 0 : currentPage - 5,
                        (currentPage + 5 > pokePages) ? pokePages : currentPage + 5)
                    .map(num => {
                        return <button
                            key={num} onClick={() => setCurrentPage(num + 1)}
                            className={((currentPage === num + 1) ? "buttonActive" : "")}
                        >{num + 1}</button>
                    })
            }
            {
                (currentPage !== pokePages) && <button className={"cap-button"} onClick={() => setCurrentPage(currentPage + 1)}>Next &gt;</button>
            }
        </div>
    )
}

export default Pagination