import OpenAI from "openai";

export const AZURE_ENV_KEYS = [
  "AZURE_OPENAI_ENDPOINT",
  "AZURE_OPENAI_API_KEY",
  "AZURE_OPENAI_DEPLOYMENT",
  "AZURE_OPENAI_API_VERSION",
] as const;

export type AzureEnvKey = (typeof AZURE_ENV_KEYS)[number];

export interface AzureOpenAIConfig {
  endpoint: string;
  apiKey: string;
  deployment: string;
  apiVersion: string;
}

/** Returns missing env var names (never invent credentials). */
export function getMissingAzureEnv(): AzureEnvKey[] {
  return AZURE_ENV_KEYS.filter((key) => {
    const value = process.env[key];
    return !value || !value.trim();
  });
}

export function getAzureOpenAIConfig(): AzureOpenAIConfig | null {
  const missing = getMissingAzureEnv();
  if (missing.length > 0) return null;

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT!.replace(/\/+$/, "");
  return {
    endpoint,
    apiKey: process.env.AZURE_OPENAI_API_KEY!.trim(),
    deployment: process.env.AZURE_OPENAI_DEPLOYMENT!.trim(),
    apiVersion: process.env.AZURE_OPENAI_API_VERSION!.trim(),
  };
}

export function createAzureOpenAIClient(config: AzureOpenAIConfig): OpenAI {
  // Azure OpenAI: baseURL points at the deployment; api-key header + api-version query.
  return new OpenAI({
    apiKey: config.apiKey,
    baseURL: `${config.endpoint}/openai/deployments/${config.deployment}`,
    defaultQuery: { "api-version": config.apiVersion },
    defaultHeaders: { "api-key": config.apiKey },
  });
}
