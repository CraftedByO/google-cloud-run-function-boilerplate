import * as functions from "@google-cloud/functions-framework";
import { process_function } from "./process";

functions.http("nodejs-http-function", async (req: functions.Request, res: functions.Response) => {
    const result = await process_function(req.body);

    res.status(200).send(result);
});

functions.cloudEvent('nodejs-event-function', async (cloudEvent:any) => {
  // The Pub/Sub message is passed as the CloudEvent's data payload.
  const base64name = cloudEvent.data.message.data;
  const data = cloudEvent.data.message.data;
  const message = Buffer.from(data, "base64").toString();

  await process_function(message);
});