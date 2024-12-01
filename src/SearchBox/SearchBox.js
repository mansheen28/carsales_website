import "../css/Home.css";

const SearchBox = () => {
  return (
    <div className="search-bar-lower">

      <div className="search-item">
        <i className="fas fa-search icon"></i>
        <div>
          <p className="label">Search Brand</p>
          <p className="value">Mustang</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="search-item">
        <i className="fas fa-map-marker-alt icon"></i>
        <div>
          <p className="label">Location</p>
          <p className="value">Melbourne, Australia</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="search-item">
        <i className="fas fa-wallet icon"></i>
        <div>
          <p className="label">Range Price</p>
          <p className="value">$200,000 - $250,000</p>
        </div>
      </div>
      <div className="divider"></div>

      <div className="search-item">
        <i className="fas fa-tachometer-alt icon"></i>
        <div>
          <p className="label">Kilometers</p>
          <p className="value">25,000 - 50,000 KM</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
