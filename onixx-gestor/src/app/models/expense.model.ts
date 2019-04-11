export interface Expense {
    id: number;
    description: string;
    file: string;
    dueDate: string;
    DeciderId: number;
    authorizationCode: string;
    authorizationDate: string;
    requestedValue: string;
    authorizedValue: string;
    status: string;
    CategoryId: number;
    PrefectureId: number;
    ProviderId: number;
    UserId: number;
    createdAt: string;
    updatedAt: string;
}
