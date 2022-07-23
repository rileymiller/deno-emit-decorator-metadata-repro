# `emitDecoratorMetadata` repro for deno deploy

To run locally
```
deno run --allow-net --allow-env index.ts
```

To deploy
```
deployctl deploy --token <token> --project=<project-name> --import-map=import_map.json  index.ts
```

Can call the endpoint with 

```
curl -X POST http://localhost:8000/bar
```

Things work fine locally but throw when deployed on Deno Deploy:

```
Error: TypeInfo not known for "FooController"
    at InternalDependencyContainer.construct 
```

because it's missing the `emitDecoratorMetadata` during transpilation. Can reproduce locally if you remove 

```
  "compilerOptions": {
    "emitDecoratorMetadata": true
  }
```

from `deno.json`.