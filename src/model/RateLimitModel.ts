//Modules
import { api } from "../services/api";
import BaseModel from "./BaseModel";

export interface IRateLimitProps {
    limit: number,
    remaining: number,
    reset: number,
    used: number,
    resource: string
};

export class RateLimitModel implements BaseModel {
    async request<IRateLimitProps>() {
        const response = await api.get<IRateLimitProps>("https://api.github.com/rate_limit");

        if (response.status != 200) {
            throw new Error("Rate limit not found.");
        };

        return response.data;
    }
};