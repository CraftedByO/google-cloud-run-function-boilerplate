# base-google-cloud-function

## Initialise GCloud

gcloud init

## GCloud Cheatsheet

https://cloud.google.com/sdk/docs/cheatsheet

npm init -y
npm install @google-cloud/functions-framework
npm install --save-dev typescript

## Deploy gen2 http function

gcloud functions deploy nodejs-http-function --gen2 --trigger-http --runtime=nodejs18

## Create pubsub topic

gcloud pubsub topics create nodejs-event-function-topic

## Deploy pubsub function

gcloud functions deploy nodejs-event-send-email-notification --gen2 --trigger-topic='nodejs-event-send-email-notification-topic' --runtime=nodejs18 --set-env-vars FOO=bar,BAZ=boo

## Run local

npm start