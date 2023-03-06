import "./Search.scss"

const Search = ()=>{

    return(
        
        <div className="search-bar d-flex ms-3 me-3" id="">
            <input className="search-int" type="search" placeholder="Search" aria-label="Search" />
            <button  type="submit">
                <i className="bi bi-search" data-v-7bbbb3b6></i>
            </button>
        </div>      
    );
}

export default Search;