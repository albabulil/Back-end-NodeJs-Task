export interface ParsedToken {
    data: {
        id: string;
        name: string;
        apartmentID: string;
        apartmentName?: string;
        path?: string;
        role: string[];
        iat: number;
        exp: number;
    };
    token: string;
}

export interface PaginatorKeys {
    page?: number;
    skip?: number;
    limit?: number;
}