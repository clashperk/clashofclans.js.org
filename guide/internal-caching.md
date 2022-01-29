---
slug: /internal-caching
title: Internal Caching
---

This is based on the [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) headers returned by the API. If internal caching is enabled, objects will be cached automatically by the client until they are stale.

:::info
By default, internal caching is disabled.
:::

<details>
<summary>Caching Duration</summary>
Some major routes and their `maxAge` values.

| Route                                    | Value <br/>(seconds) |
| ---------------------------------------- | :------------------: |
| `/clans/:clanTag`                        |         120          |
| `/players/:playerTag`                    |          60          |
| `/clans/:clanTag/warlog`                 |         600          |
| `/clans/:clanTag/currentwar`             |         600          |
| `/clans/:clanTag/currentwar/leaguegroup` |         600          |
| `/clanwarleagues/wars/:warTag`           |         600          |

</details>

## Enable Caching

```ts
import { Client } from 'clashofclans.js';

const client = new Client({ cache: true, keys: ['***'] });
```

## Custom Store

Make your own adapter to cache or store the data in a persistent storage. Any store that follows [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) API will work.

<details>
<summary>Template</summary>

```ts
class Store<T> {
	set(key: string, value: T, ttl?: number): boolean | Promise<boolean>;
	get(key: string): T | null | Promise<T | null>;
	delete(key: string): boolean | Promise<boolean>;
	clear(): void | Promise<void>;
}
```

</details>
