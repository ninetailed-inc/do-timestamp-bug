// Worker

import ipsum from "./data.json";

export default {
  async fetch(request, env) {
    return await handleRequest(request, env);
  },
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function handleRequest(request, env) {
  const workerTimestamp = Date.now();

  try {
    const id = env.DATE_SERVER.idFromName("A");
    const dateServer = env.DATE_SERVER.get(id);
    const response = await dateServer.fetch(
      new Request("http://date-do.com/", {
        method: "POST",
        body: JSON.stringify({ workerTimestamp }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );

    const data = await response.json();

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}

// Durable Object

export class DateServer {
  constructor(state, env) {
    this.state = state;

    this.createdAt = Date.now();

    this.timestamps = [];
  }

  async fetch(request) {
    const body = await request.json();
    const { workerTimestamp } = body;

    const durableObjectTimestamp = Date.now();

    this.timestamps.push({
      durableObjectTimestamp,
      workerTimestamp,
      isDoTimestampBeforeWorkerTimestamp:
        durableObjectTimestamp < workerTimestamp,
    });

    this.state.storage.put("key", JSON.stringify(ipsum), {
      allowUnconfirmed: true,
    });

    return new Response(
      JSON.stringify({
        doCreatedAt: this.createdAt,
        timestamps: this.timestamps,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
