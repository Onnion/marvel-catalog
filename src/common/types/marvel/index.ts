export interface MarvelResponse {
    code: number
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: ComicData;
}

export interface ComicData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
}

export interface TextObject {
    type: string;
    language: string;
    text: string;
}

export interface Url {
    type: string;
    url: string;
}

export interface SeriesSummary {
    resourceURI: string;
    name: string;
}

export interface ComicSummary {
    resourceURI: string;
    name: string;
}

export interface ComicDate {
    type: string;
    date: string;
}

export interface ComicPrice {
    type: string;
    price: number;
}

export interface Image {
    path: string;
    extension: string;
}

export interface CreatorList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CreatorSummary[];
    data?: any[];
}

export interface Creator {
    id: number,
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    },
    resourceURI: string;
    comics: {
        available: number,
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ],
        returned: number
    },
    series: {
        available: number,
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ],
        returned: number
    },
    stories: {
        available: number,
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
                type: string;
            }
        ],
        returned: number
    },
    events: {
        available: number,
        collectionURI: string;
        items: [],
        returned: number
    },
    urls: [
        {
            type: string;
            url: string;
        }
    ]
}

export interface CreatorSummary {
    resourceURI: string;
    name: string;
    role: string;
}

export interface CharacterList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CharacterSummary[];
}

export interface CharacterSummary {
    resourceURI: string;
    name: string;
    role: string;
}

export interface StoryList {
    available: number;
    returned: number;
    collectionURI: string;
    items: StorySummary[];
}

export interface StorySummary {
    resourceURI: string;
    name: string;
    type: string;
}

export interface EventList {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventSummary;
}

export interface EventSummary {
    resourceURI: string;
    name: string;
}

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: SeriesSummary;
    variants: ComicSummary[];
    variantsData: Image[];
    collections: ComicSummary[];
    collectedIssues: ComicSummary[];
    dates: ComicDate[];
    prices: ComicPrice[];
    thumbnail: Image;
    images: Image;
    creators: CreatorList;
    characters: CharacterList;
    stories: StoryList;
    events: EventList;
}