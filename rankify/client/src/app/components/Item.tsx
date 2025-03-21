import { IItem } from '../interfaces/Item';
import "./Item.css";

interface ItemProps {
    item: IItem;
    onRemove: () => void;
    onClick: () => void;
    selected: boolean;
}

export default function Item({ item, onRemove, onClick, selected }: ItemProps) {
    return (
        <div className={`item ${selected ? "selected" : ""}`} onClick={onClick}>
            <p className="item-name">{item.name}</p>
            <p className="rating">{item.rating}</p>
            {/* <p className="creation-date">{item.dateCreated.toLocaleString()}</p> */}
            <p className="remove-item" onClick={onRemove}>x</p>
        </div>
    );
};