import { IItem } from "./Item";

export interface ICollectionItem {
    name: string;
    dateCreated: Date;
    items: IItem[];
}
