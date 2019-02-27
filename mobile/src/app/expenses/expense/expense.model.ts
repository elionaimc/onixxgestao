export interface Expense {
    id: number;
    description: string;
    file: string;
    due_date: string;
    authorized_by: number;
    authorization_code: string;
    authorization_date: string;
    requested_value: number;
    authorized_value: string;
    status: string;
    CategoryId: string;
    PrefectureId: number;
    ProviderId: string;
    UserId: string;
    createdAt: string;
    updatedAt: string;
}
