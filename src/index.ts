import * as functions from "@google-cloud/functions-framework";
import { process_function } from "./process";

functions.http(
  "nodejs-http-function",
  async (req: functions.Request, res: functions.Response) => {
    const result = await process_function(req.body);

    res.status(result.status).send(result);
  }
);

functions.cloudEvent("nodejs-event-function", async (cloudEvent: any) => {
  const data = cloudEvent.data.message.data;
  const message = Buffer.from(data, "base64").toString();

  return await process_function(JSON.parse(message));
});