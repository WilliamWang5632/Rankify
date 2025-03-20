import { useParams, useNavigate } from "react-router-dom";
import "./ItemsPage.css";
//import { useState } from "react";
import { IItem } from "./interfaces/Item";
import Item from "./Item";
import { mockItems } from "./mocks/mockItems";
import { useState } from "react";

export default function ItemsPage() {
  
  //const [newSearchQuery, setNewSearchQuery] = useState("");
  const { name } = useParams();
  const navigate = useNavigate();
  const searchInput = "";
  const items: IItem[] = mockItems;

  const [selectedItem, setSelectedItem] = useState<IItem>(items[0]);

  return (
    <div>
      <div className="header">
        <button onClick={() => navigate("/")}>Back</button>
        <h2>{name}</h2>
        <div>sort by</div>
        <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchInput}
            //onChange={(e) => setNewSearchQuery(e.target.value)}
        />
      </div>
      <div className="main">
        <div className="item-details">
          <div className="item-top">
            <p className="item-details-name">{selectedItem.name}</p>
            <p className="item-details-rating">{selectedItem.rating}/10</p>
          </div>
          <img className="item-image" src={selectedItem.image} alt="item" />
          <p className="comment">{selectedItem.comment}</p>
          <p>{selectedItem.dateCreated.toLocaleString()}</p>
        </div>
        <div className="items">
          {items.map((item, index) => (
            <Item
              key={index}
              item={item}
              onClick={() => setSelectedItem(item)}
              selected={selectedItem.name === item.name}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
