import { Controller, Post } from "alosaur/mod.ts";
import { FooService } from '../services/foo.service.ts'

@Controller()
export class FooController {
  constructor(private fooService: FooService) {}

  @Post("/bar")
  login() {
   return this.fooService.bar()
  }
}
