export enum Categories {
    Men = "men",
    Women = "women"
}

export enum Documents {
    TermOfUse = "tos",
}

export type LinkType = {
    name: string;
    link: string;
};

export type ArticleDataType = {
    title: string;
    id: string;
    fullText: string;
};

export type TextDataType = {
    id: number;
    title: string;
    text: string;
};

export type ProductType = {
    id: string;
    model: string;
    brand: string;
    cost: number;
    category: string;
    description: string;
    sizes: number[];
}