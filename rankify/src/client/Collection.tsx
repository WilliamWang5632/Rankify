//import React from "react";
import"./Collection.css";
import { CollectionItem } from "./interfaces/CollectionItem";

interface CollectionProps {
    collectionItem: CollectionItem;
    onRemove: () => void;
}

export default function Collection({collectionItem, onRemove}: CollectionProps) {
    return (
        <div className="collection">
            <p>{collectionItem.name}</p>
            <p className="creation-date">{collectionItem.dateCreated.toLocaleString()}</p>
            <p className="remove-button" onClick={onRemove}>x</p>
        </div>
    );
};
