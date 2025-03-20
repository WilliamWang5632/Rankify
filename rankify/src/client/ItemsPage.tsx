import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./ItemsPage.css";
//import { useState } from "react";
import { IItem } from "./interfaces/Item";
import { ICollectionItem } from "./interfaces/CollectionItem";
import Item from "./Item";
import { mockItems } from "./mocks/mockItems";
import { useState } from "react";

export default function ItemsPage() {
  
  //const [newSearchQuery, setNewSearchQuery] = useState("");
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const collection: ICollectionItem | undefined = location.state?.collection;

  if (!collection) {
    navigate("/");
    return null;
  }

  const searchInput = "";
  //const items: IItem[] = mockItems;
  const [items, setItems] = useState<IItem[]>(collection.items || []);
  const [selectedItem, setSelectedItem] = useState<IItem | null>(
    items.length > 0 ? items[0] : null
  );

  const handleAddItem = () => {
    const newItem = mockItems[3];
    setItems((prevItems) => [...prevItems, newItem]);
  
    if (selectedItem === null) {
      setSelectedItem(newItem);
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const setSearchInput = (searchInput: string) => {
    console.log(searchInput);
  };

  return (
    <div>
      <div className="header">
        <button onClick={() => navigate("/")}>Back</button>
        <h2>{name}</h2>
        <p className="add-item" onClick={() => handleAddItem()}>+</p>
        <div>sort by</div>
        <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="main">
        <div className="item-details">
          <div className="item-top">
            <p className="item-details-name">{selectedItem?.name}</p>
            <p className="item-details-rating">{selectedItem?.rating}/10</p>
          </div>
          <img className="item-image" src={selectedItem?.image} alt="item" />
          <p className="comment">{selectedItem?.comment}</p>
          <p>{selectedItem?.dateCreated.toLocaleString()}</p>
        </div>
        <div className="items">
          {items.map((item, index) => (
            <Item
              key={index}
              item={item}
              onRemove={() => handleRemoveItem(index)}
              onClick={() => setSelectedItem(item)}
              selected={selectedItem?.name === item.name}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
