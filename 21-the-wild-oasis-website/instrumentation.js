export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const globalAgent = require("global-agent");
    globalAgent.bootstrap();
  }
}
