export default interface BaseModel {
    request?<T = unknown>(body?: unknown): Promise<T>
};