//Modules
import { api } from "../services/api";
import BaseModel from "./BaseModel";

type RepositoriesResponse = IRepositoriesProps[]

export class RepositoriesModel implements BaseModel {
    async request<RepositoriesResponse>(username: string) {
        const response = await api.get<RepositoriesResponse>(`https://api.github.com/users/${username}/repos?per_page=100&sort=created&direction=desc`);

        if (response.status != 200) {
            throw new Error("Repositories not found.");
        };

        return response.data;
    }
}

export interface IRepositoriesProps {
    id: number,
    name: string,
    description: String,
    language: string | null,
    stargazers_count: number,
    html_url: string
};