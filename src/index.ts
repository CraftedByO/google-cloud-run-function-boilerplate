import * as functions from "@google-cloud/functions-framework";

functions.http("nodejs-http-function", (req: functions.Request, res: functions.Response) => {
  console.log("request", req)
  res.status(200).send("OK");
});

functions.cloudEvent('nodejs-event-function', (cloudEvent:any) => {
  // The Pub/Sub message is passed as the CloudEvent's data payload.
  const base64name = cloudEvent.data.message.data;

  const name = base64name
    ? Buffer.from(base64name, 'base64').toString()
    : 'World';

  console.log(`Hello, ${name}!`);
});