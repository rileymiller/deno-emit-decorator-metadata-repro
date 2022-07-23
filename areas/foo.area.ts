import { Area } from "alosaur/mod.ts";

import { FooController } from "../controllers/foo.controller.ts";

@Area({
  controllers: [FooController],
})
export class FooArea {}
