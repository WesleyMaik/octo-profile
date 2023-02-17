import { api } from "../services/api";
import BaseModel from "./BaseModel";

export type LanguagesColors = {
    [key: string]: {
        color: string
    };
};

export class LanguagesColorsModel implements BaseModel {
    async request<LanguagesColors>() {
        const languagesURL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
        const response = await api.get<LanguagesColors>(languagesURL);

        if (response.status != 200) {
            throw new Error("Colors not found.");
        };

        return response.data;
    }
};