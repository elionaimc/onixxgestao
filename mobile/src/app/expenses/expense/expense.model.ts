export interface Expense {
    id: number;
    description: string;
    file: string;
    dueDate: string;
    DeciderId: number;
    authorizationCode: string;
    decisionDate: string;
    requestedValue: number;
    authorizedValue: number;
    status: string;
    CategoryId: string;
    PrefectureId: number;
    ProviderId: string;
    UserId: string;
    createdAt: string;
    updatedAt: string;
}
