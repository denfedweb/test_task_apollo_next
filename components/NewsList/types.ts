export interface Content {
    __typename: string;
    id: string;
    title: {
        __typename: string;
        short: string;
    };
    description: {
        __typename: string;
        intro: string;
    };
    dates: {
        __typename: string;
        posted: string;
    };
}