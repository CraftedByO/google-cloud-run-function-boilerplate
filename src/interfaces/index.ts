export interface InputBody {
  [key: string]: unknown;
}

export interface PubSubMessage {
  message: {
    data: string;
    attributes?: Record<string, string>;
    messageId?: string;
    publishTime?: string;
  };
  subscription?: string;
}

export interface ProcessResult {
  status: number;
  [key: string]: unknown;
}
