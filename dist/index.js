// src/index.mjs
var src_default = {
  async fetch(request, env) {
    return await handleRequest(request, env);
  }
};
async function handleRequest(request, env) {
  const id = env.DATE_SERVER.idFromName("A");
  const dateServer = env.DATE_SERVER.get(id);
  const response = await dateServer.fetch(request.url);
  return response;
}
var DateServer = class {
  constructor(state, env) {
    this.state = state;
    this.createdAt = Date.now();
    this.incomingRequestTimestamps = [];
  }
  async fetch() {
    this.incomingRequestTimestamps.push(Date.now());
    return new Response(
      {
        createdAt: this.createdAt,
        incomingRequestTimestamps: this.incomingRequestTimestamps
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }
};
export {
  DateServer,
  src_default as default
};
//# sourceMappingURL=index.js.map
