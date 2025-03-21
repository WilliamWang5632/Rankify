import "./NewItemForm.css";
import { IItem } from "../interfaces/Item";
import { useState } from "react";

interface NewItemFormProps {
    onClose: () => void;
    onSubmit: (item: IItem) => void;
}

export default function NewItemForm({ onClose, onSubmit }: NewItemFormProps){
    const [newItem, setNewItem] = useState<IItem>({
        id: crypto.randomUUID(),
        name: "",
        rating: 0,
        dateCreated: new Date(),
        comment: "",
        image: ''
    });

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewItem((prev) => ({
                    ...prev,
                    image: reader.result as string, // Set image in newItem
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewItem((prev) => ({
            ...prev,
            [name]: name === "rating" ? Number(value) : value,
        }));
    };

    const handleSubmit = () => {
        if (newItem.name) {
            onSubmit(newItem);
            onClose();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents form from submitting unexpectedly
            handleSubmit();
        }
    };

    return (
        <div className="new-item-form">
            <button className="close-btn" onClick={onClose}>x</button>
            <div className="full-form">
                <div>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    {newItem.image ? (
                        <img src={newItem.image} alt="Uploaded" className="upload-image"/>
                    ) : (
                        <div className="no-image">No Image</div>
                    )}
                </div>
                <div className="form">
                    <div className="form-top">
                        <input
                            type="text"
                            name="name"
                            className="form-item-name"
                            value={newItem.name}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter item name..."
                        />
                        <input
                            type="number"
                            name="rating"
                            className="form-item-rating"
                            value={newItem.rating}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter item rating..."
                        />
                    </div>
                    <textarea
                        name="comment"
                        className="form-item-comment"
                        value={newItem.comment}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter comments..."
                    />
                </div>
            </div>
            <button className="add-item-btn" onClick={handleSubmit}>Add Item</button>
        </div>
    )
}