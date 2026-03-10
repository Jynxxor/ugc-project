import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://9366ae44af9baddf67c423fdc95c7ca3@o4510919202308096.ingest.de.sentry.io/4510919213121616",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});