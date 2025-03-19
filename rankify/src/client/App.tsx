// import { useState } from 'react'
// import './App.css'
// import Collection from './Collection'
// import { CollectionItem } from "./interfaces/CollectionItem";

// function App() {
//   const [collections, setCollections] = useState<CollectionItem[]>([]);
//   const [newCollectionName, setNewCollectionName] = useState('');
  
//     // Function to add a collection
//     const handleAddCollection = () => {
//       if (newCollectionName.trim() === '') return; // Prevent empty collections
      
//       const newCollection: CollectionItem = {
//         name: newCollectionName,
//         dateCreated: new Date(),
//       };
      
//       setCollections([...collections, newCollection]);
//       setNewCollectionName('');
//     };
  
//     // Function to remove a collection
//     const handleRemoveCollection = (index: number) => {
//       setCollections(collections.filter((_, i) => i !== index));
//     };
    
//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//       if (e.key === 'Enter') {
//         handleAddCollection();
//       }
//     };
  
//   return (
//     <>
//       <div className="collections-page">
//         <div className="add-collection">
//           <input 
//             className="collection-name-input"
//             type="text"
//             placeholder="Enter new collection name..."
//             value={newCollectionName}
//             onChange={(e) => setNewCollectionName(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <p className="add-button" onClick={handleAddCollection}>+</p>
//         </div>
//         <div className="collections">
//           {collections.map((collection, index) => (
//             <Collection 
//               key={index} 
//               collectionItem={collection}
//               onRemove={() => handleRemoveCollection(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";
import Collection from "./Collection";

interface CollectionItem {
  name: string;
  dateCreated: Date;
}

function App() {
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [sortType, setSortType] = useState<"oldest"| "newest" | "asc" | "desc">("newest");

  // Function to add a collection
  const handleAddCollection = () => {
    if (newCollectionName.trim() === "") return; // Prevent empty collections

    const newCollection: CollectionItem = {
      name: newCollectionName,
      dateCreated: new Date(),
    };

    setCollections([...collections, newCollection]);
    setNewCollectionName(""); // Reset input
  };

  // Function to remove a collection
  const handleRemoveCollection = (index: number) => {
    setCollections(collections.filter((_, i) => i !== index));
  };

  // Function to handle sorting
  const sortedCollections = [...collections].sort((a, b) => {
    if (sortType === "newest") {
      return b.dateCreated.getTime() - a.dateCreated.getTime(); // Newest first
    }
    if (sortType === "oldest") {
      return a.dateCreated.getTime() - b.dateCreated.getTime(); // oldest first
    }
    if (sortType === "asc") {
      return a.name.localeCompare(b.name); // Alphabetical A-Z
    }
    if (sortType === "desc") {
      return b.name.localeCompare(a.name); // Alphabetical Z-A
    }
    return 0;
  });

  return (
    <>
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
            <p className="add-button" onClick={handleAddCollection}>
              +
            </p>
          </div>

          <div className="sorting-buttons">
            <button className="sorting-button" onClick={() => setSortType("newest")}>Newest first</button>
            <button className="sorting-button" onClick={() => setSortType("oldest")}>Oldest first</button>
            <button className="sorting-button" onClick={() => setSortType("asc")}>Sort A-Z</button>
            <button className="sorting-button" onClick={() => setSortType("desc")}>Sort Z-A</button>
          </div>
        </div>

        <div className="collections">
          {sortedCollections.map((collection, index) => (
            <Collection
              key={index}
              collectionItem={collection}
              onRemove={() => handleRemoveCollection(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
