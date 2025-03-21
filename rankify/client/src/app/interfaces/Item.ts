export interface IItem{
    id: string;
    name: string;
    rating: number;
    reviewTitle?: string;
    comment?: string;
    image?: string;
    dateCreated: Date;
}