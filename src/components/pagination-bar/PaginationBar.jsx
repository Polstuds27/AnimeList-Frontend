import './pagination-bar.css'
function PaginationBar({currentPage, totalPage, setCurrentPage, searchOn}){
    //const pages = Array.from({length: totalPage}, (_, i)=>i+1);
    if(searchOn) return null;
    return(
        <>
            <div className="pagination-container">
                <button className='prev'
                onClick={()=>{setCurrentPage(currentPage-1)
                    console.log(currentPage);
                }}
                disabled={currentPage===1}
                >
                    Prev
                </button>
                <span>
                  {currentPage} 
                </span>
                <button className='next'
                onClick={()=>{setCurrentPage(currentPage+1)
                    console.log(currentPage);
                }}
                disabled={currentPage===totalPage}>
                    Next
                </button>
            </div>
        </>
    );
}

export default PaginationBar;