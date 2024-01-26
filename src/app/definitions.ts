export enum Categories {
    Men = "men",
    Women = "women"
}

export enum Documents {
    TermOfUse = "tos",
}

export type ArticleDataType = {
    title: string;
    id: string;
    fullText: string;
};

export type LinkType = {
    name: string;
    link: string;
};

export type TextDataType = {
    id: number;
    title: string;
    text: string;
};
