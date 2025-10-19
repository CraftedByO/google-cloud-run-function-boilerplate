# Google Cloud Run Function Boilerplate

A strongly-typed TypeScript boilerplate for Google Cloud Run functions supporting both HTTP and Pub/Sub event-driven triggers.

## Features

- ✅ HTTP handler for synchronous requests
- ✅ Pub/Sub event handler for asynchronous processing
- ✅ Fully typed with TypeScript (`strict: true`)
- ✅ Error handling and validation
- ✅ Local development support

## Prerequisites

- Node.js 18+
- Google Cloud SDK (`gcloud` CLI)
- A Google Cloud project

## Setup

### 1. Initialize Google Cloud

```bash
gcloud init
gcloud config set project PROJECT_ID
```

### 2. Install Dependencies

```bash
npm install
npm install --save-dev typescript
```

### 3. Run Locally

```bash
npm run dev
```

The function will be available at `http://localhost:3000`

## Deployment

### HTTP Function

Deploy an HTTP-triggered Cloud Run function:

```bash
gcloud functions deploy google-cloud-run-function-http \
  --gen2 \
  --trigger-http \
  --runtime=nodejs18 \
  --allow-unauthenticated \
  --entry-point=google-cloud-run-function-http
```

### Event-Driven (Pub/Sub) Function

#### 1. Create a Pub/Sub Topic

```bash
gcloud pubsub topics create google-cloud-run-function-topic
```

#### 2. Deploy the Function

```bash
gcloud functions deploy google-cloud-run-function-event \
  --gen2 \
  --trigger-topic=google-cloud-run-function-topic \
  --runtime=nodejs18 \
  --entry-point=google-cloud-run-function-event
```

#### 3. Publish a Test Message

```bash
gcloud pubsub topics publish google-cloud-run-function-topic \
  --message='{"key":"value"}'
```

## Project Structure

```
src/
├── index.ts        # Main handlers (HTTP & Pub/Sub)
├── process.ts      # Business logic
├── interfaces.ts   # TypeScript interfaces
└── ...
dist/               # Compiled JavaScript (generated)
```

## Usage

### HTTP Handler

Send a POST request with JSON body:

```bash
curl -X POST http://localhost:3000 \
  -H "Content-Type: application/json" \
  -d '{"name": "John"}'
```

### Pub/Sub Handler

Automatically processes messages from the subscribed topic.

## References

- [Google Cloud Functions Framework](https://github.com/GoogleCloudPlatform/functions-framework-nodejs)
- [Google Cloud SDK Cheatsheet](https://cloud.google.com/sdk/docs/cheatsheet)
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Pub/Sub Documentation](https://cloud.google.com/pubsub/docs)

## Environment Variables

Set environment variables during deployment:

```bash
gcloud functions deploy my-function \
  --gen2 \
  --set-env-vars FOO=bar,BAZ=boo \
  ...
```