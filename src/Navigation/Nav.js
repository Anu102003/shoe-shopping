
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-card">
        <div className="nav-card__search">
          <input
            className="nav-card__search-input"
            type="text"
            placeholder="Enter your search shoes."
            onChange={handleInputChange}
            value={query}
          />
        </div>
        <div className="nav-card__icons">
          <a href="#">
            <FiHeart className="nav-icon" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icon" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;