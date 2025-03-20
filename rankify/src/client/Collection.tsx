import { Link, useNavigate } from "react-router-dom";
import "./Collection.css";
import { ICollectionItem } from "./interfaces/CollectionItem";

interface CollectionProps {
  collectionItem: ICollectionItem;
  onRemove: () => void;
}

export default function Collection({ collectionItem, onRemove }: CollectionProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/collection/${collectionItem.name}`, { state: { collection: collectionItem } });
  };
  
  return (
    <div className="collection">
      <p className="name collection-link" onClick={handleNavigate}>
        {collectionItem.name}
      </p>
      <p className="creation-date">{collectionItem.dateCreated.toLocaleString()}</p>
      <p className="remove-button" onClick={onRemove}>x</p>
    </div>
  );
}
