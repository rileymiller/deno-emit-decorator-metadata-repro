import { App } from "alosaur/mod.ts";

import { FooArea } from './areas/foo.area.ts'

const app = new App({
  areas: [FooArea],
  logging: true,
});

app.listen();
