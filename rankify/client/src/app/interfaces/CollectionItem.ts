import { IItem } from "./Item";

export interface ICollectionItem {
    id: string;
    name: string;
    dateCreated: Date;
    items: IItem[];
}
