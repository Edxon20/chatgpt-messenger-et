import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.OPENAIA_API_KEY,
});

const openai = new OpenAIApi(config);