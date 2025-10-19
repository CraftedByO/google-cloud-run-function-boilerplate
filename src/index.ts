import {
  http,
  cloudEvent,
  Request,
  Response
} from "@google-cloud/functions-framework";
import { process } from "./process";
import { CloudEventV1 } from "cloudevents";
import { InputBody, PubSubMessage } from "./interfaces";

// HTTP handler
http("google-cloud-run-function-http", async (req: Request, res: Response) => {
  try {
    const input = req.body as InputBody;

    if (!input) {
      res.status(400).send({ error: "Invalid request body" });
      return;
    }

    const result = await process(input);
    res.status(result.status).send(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).send({ error: message });
  }
});

// Event (Pub/Sub) handler
cloudEvent(
  "google-cloud-run-function-event",
  async (event: CloudEventV1<PubSubMessage>) => {
    try {
      const pubsubMessage = event.data?.message;

      if (!pubsubMessage?.data) {
        throw new Error("Invalid Pub/Sub message: missing data");
      }

      const decodedMessage = Buffer.from(
        pubsubMessage.data,
        "base64"
      ).toString();
      const input = JSON.parse(decodedMessage) as InputBody;

      return await process(input);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      throw new Error(`Pub/Sub processing failed: ${message}`);
    }
  }
);
