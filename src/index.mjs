// Worker

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
      new Request('http://date-do.com/', {
        method: 'POST',
        body: JSON.stringify({ workerTimestamp }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  
    const data = await response.json();
  
    return new Response(JSON.stringify(data));
  } catch(error) {
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
      isDoTimestampBeforeWorkerTimestamp: durableObjectTimestamp < workerTimestamp,
    });

    this.state.storage.put(
      "key",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus odio leo, in accumsan risus molestie at. 
      In vitae tristique lorem. Ut sit amet erat volutpat, scelerisque lacus at, dapibus nunc. Vestibulum sit amet vehicula metus. 
      Mauris vel egestas nibh. Morbi vel euismod libero. Praesent dapibus, ipsum et fermentum hendrerit, lectus elit fringilla ex, 
      sed sollicitudin urna lectus at ipsum. Suspendisse eu lobortis sapien. Aliquam porta erat et enim dignissim auctor. 
      Pellentesque non lobortis libero.Integer rhoncus nec metus et posuere. Phasellus malesuada euismod lacinia. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit massa, sodales in mi vel, sollicitudin ornare est. 
      Donec venenatis tempus lectus ut placerat. Integer a lorem odio. Nam nibh tortor, cursus vitae dictum ac, lobortis a mi. 
      Proin commodo, eros ut placerat porttitor, lectus nibh congue neque, pulvinar aliquet tellus enim at mauris. 
      Nam maximus urna vitae nunc posuere, vel consectetur libero condimentum. Aliquam nibh felis, accumsan a odio sit amet, 
      pretium porttitor arcu. In dignissim magna eu neque semper, vitae maximus erat facilisis. 
      Quisque dignissim sapien eu tempor ultrices. Sed diam dolor, elementum ut pulvinar a, condimentum vitae ligula. 
      Nam ut nisl pellentesque, molestie lacus ut, pharetra libero. Fusce eu dolor sit amet augue imperdiet tincidunt sed ac dui.
      Etiam at convallis lorem. Aenean tincidunt nulla turpis, quis sollicitudin eros tincidunt at. 
      Duis mollis auctor metus sit amet sollicitudin. Phasellus nec euismod dolor, ac pellentesque purus. Cras gravida mauris purus, 
      in tristique nulla luctus sed. Phasellus imperdiet mauris nec nulla maximus, non sollicitudin sem ultrices. Praesent luctus, augue in auctor mattis, elit enim venenatis nisi, 
      vitae dictum nisl eros in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nisi vulputate, pellentesque elit eget, volutpat lectus. Vestibulum ante ipsum primis in
       faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel augue mi. Nulla magna ex, eleifend sit amet euismod in, aliquet sit amet diam. In in porta turpis, non porta mi.      
       Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque metus ligula, ornare quis mauris non, ornare tempus mauris. Quisque ut lacus at turpis scelerisque efficitur. 
       Sed in metus suscipit, laoreet dui et, vehicula diam. Curabitur ac mauris id turpis lacinia vehicula ac ut tortor. Curabitur sed venenatis diam. Nam vitae dignissim est. Morbi ullamcorper sem a elit egestas, 
       ut cursus felis lobortis. Fusce nunc nisi, facilisis at tortor lobortis, semper pharetra felis. Aliquam eget ultrices nibh, sit amet sollicitudin leo. Phasellus volutpat justo vel scelerisque pharetra. 
       Vivamus pharetra tincidunt lectus, ut malesuada nisl luctus eget. Suspendisse nec eros quam. Morbi ac lorem lorem.Vivamus in egestas eros. Curabitur fringilla risus non lacus semper scelerisque. 
       Morbi mattis aliquet massa. Aliquam orci ligula, maximus at lacinia sit amet, congue sed est. Nullam a gravida nisl, eget blandit neque. Integer eu nisi sit amet tortor dapibus vestibulum. 
       Integer purus eros, tempor eu metus eget, consectetur auctor nibh. Sed sit amet tempus nibh, id iaculis libero. Ut eleifend tortor ac nibh molestie scelerisque. 
       Donec at arcu vel ex faucibus gravida sit amet vel sem. Nunc mattis blandit tincidunt. Cras vitae lacinia nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
       Nunc imperdiet quis velit ut eleifend. Aenean iaculis nisi vitae enim egestas feugiat.`,
      { allowUnconfirmed: true }
    );

    return new Response(
      JSON.stringify({
        doCreatedAt: this.createdAt,
        timestamps: this.timestamps,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
