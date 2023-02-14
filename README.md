# base-google-cloud-function
## Initialise GCloud
gcloud init

npm init -y
npm install @google-cloud/functions-framework
npm install --save-dev typescript

## Deploy gen2 http function
gcloud functions deploy nodejs-http-function --gen2 --trigger-http --runtime=nodejs18

## Create pubsub topic 
gcloud pubsub topics create nodejs-event-function-topic

## Deploy pubsub function
gcloud functions deploy nodejs-event-function --gen2 --trigger-topic="nodejs-event-function-topic" --runtime=nodejs18