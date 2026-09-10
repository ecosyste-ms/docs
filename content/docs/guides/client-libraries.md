---
weight: 7
title: Client libraries
description: Official Go and TypeScript client libraries for the ecosyste.ms APIs.
---

If you'd rather not talk to the REST APIs directly, ecosyste.ms maintains official client libraries for Go and TypeScript. Both wrap the same set of services — packages, repos, advisories, commits, and issues — behind a typed, idiomatic interface, and both fall back to the generated OpenAPI clients for anything they don't wrap directly.

## Go

[`ecosystems-go`](https://github.com/ecosyste-ms/ecosystems-go) is the Go client library.

```bash
go get github.com/ecosyste-ms/ecosystems-go
```

```go
import "github.com/ecosyste-ms/ecosystems-go"

client, err := ecosystems.NewClient("my-app/1.0")
if err != nil {
    log.Fatal(err)
}

pkg, err := client.Lookup(ctx, "pkg:gem/rake")
```

See the [project README](https://github.com/ecosyste-ms/ecosystems-go#readme) for the full API, including bulk lookups, PURL helpers, repository metadata, and configuration options.

## TypeScript

[`ecosystems-ts`](https://github.com/ecosyste-ms/ecosystems-ts) is the TypeScript client library, published to npm as [`@ecosyste-ms/ecosystems-ts`](https://www.npmjs.com/package/@ecosyste-ms/ecosystems-ts).

```bash
npm install @ecosyste-ms/ecosystems-ts
```

```ts
import { EcosystemsClient } from "@ecosyste-ms/ecosystems-ts";

const client = new EcosystemsClient({ userAgent: "my-app/1.0" });

const pkg = await client.lookup("pkg:gem/rake");
```

It requires Node 20+, or any server-side runtime with `fetch` (Deno, Bun, Cloudflare Workers) — it's not for browser use, since the API hides the headers pagination depends on from cross-origin scripts.

See the [project README](https://github.com/ecosyste-ms/ecosystems-ts#readme) for the full API, including bulk lookups with partial-failure results, PURL helpers, repository metadata, streaming pagination, and configuration options.

## Rate limits

Both libraries let you identify your application, which raises your request quota — see [Rate limits](/docs/usage/rate-limits/) for how the tiers work. Check each library's README for how to pass your identifying details through.

## Something missing?

Both libraries wrap the most common endpoints, but each service has far more surface than either client covers directly — both expose their underlying generated clients so you can reach anything the wrapped methods don't. If you find a gap worth wrapping, or hit a bug, open an issue on the relevant repository.
