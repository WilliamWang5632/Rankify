import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Collection from "./Collection";
import ItemsPage from "./ItemsPage";
import { ICollectionItem } from "../interfaces/CollectionItem";

function App() {
  const [collections, setCollections] = useState<ICollectionItem[]>([]);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [sortType, setSortType] = useState<"oldest" | "latest" | "asc" | "desc">("latest");

  const handleAddCollection = () => {
    if (newCollectionName.trim() === "") return;

    const newCollection: ICollectionItem = {
      id: crypto.randomUUID(),
      name: newCollectionName,
      dateCreated: new Date(),
      items: [],
    };

    setCollections([...collections, newCollection]);
    setNewCollectionName("");
  };

  const handleRemoveCollection = (id: string) => {
    setCollections(collections.filter((collection) => collection.id !== id));
  };

  const sortedCollections = [...collections].sort((a, b) => {
    if (sortType === "latest") return b.dateCreated.getTime() - a.dateCreated.getTime();
    if (sortType === "oldest") return a.dateCreated.getTime() - b.dateCreated.getTime();
    if (sortType === "asc") return a.name.localeCompare(b.name);
    if (sortType === "desc") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="collections-page">
            <div className="collections-header">
              <div className="add-collection">
                <input
                  className="collection-name-input"
                  type="text"
                  placeholder="Enter new collection name..."
                  value={newCollectionName}
                  onChange={(e) => setNewCollectionName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddCollection()}
                />
                <p className="add-button" onClick={handleAddCollection}>+</p>
              </div>

              <div className="sorting-buttons">
                <button className="sorting-button" onClick={() => setSortType("latest")}>Latest</button>
                <button className="sorting-button" onClick={() => setSortType("oldest")}>Oldest</button>
                <button className="sorting-button" onClick={() => setSortType("asc")}>Sort A-Z</button>
                <button className="sorting-button" onClick={() => setSortType("desc")}>Sort Z-A</button>
              </div>
            </div>

            <div className="collections">
              {sortedCollections.map((collection) => (
                <Collection
                  key={collection.id}
                  collectionItem={collection}
                  onRemove={() => handleRemoveCollection(collection.id)}
                />
              ))}
            </div>
          </div>
        }
      />
      <Route path="/collection/:name" element={<ItemsPage />} />
    </Routes>
  );
}

export default App;
