import "./Department.scss"

const Department = ()=>{

return (
  <>
    <div className="dropdown">
      <button type="button" className="dropdown-toggle" id="toggle-btn" data-bs-toggle="dropdown" aria-expanded="false">
      <p>All Categories</p>
        Department
      </button>
        <div className="dropdown-menu mt-3">
          <button className="dropdown-item" id="item-btn" type="button">Menu 1</button>
          <button className="dropdown-item" id="item-btn" type="button">Menu 2</button>
          <button className="dropdown-item" id="item-btn" type="button">Menu 3</button>
          <button className="dropdown-item" id="item-btn" type="button">Menu 4</button>
          <button className="dropdown-item" id="item-btn" type="button">Menu 5</button>
          <button className="dropdown-item" id="item-btn" type="button">Menu 6</button>
          <button className="dropdown-item" id="item-btn" type="button">Menu 7</button>
        </div>
    </div>
</>    
    );
}

export default Department;