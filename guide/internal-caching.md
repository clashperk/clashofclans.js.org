---
slug: /internal-caching
title: Internal Caching
---

This is based on the [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) headers returned by the API. If internal caching is enabled, objects will be cached automatically by the client until they are stale.

:::info
By default, internal caching is disabled.
:::

## Enable Caching

```ts
import { Client } from 'clashofclans.js';

const client = new Client({ cache: true, keys: ['***'] });
```

## Storage Adapters

This library uses [Keyv](https://www.npmjs.com/package/keyv) to cache data. By default everything is stored in memory, you can optionally also install a storage adapter to store the data in a persistent storage.

Following example is for Redis

```shell
npm i @keyv/redis
```

```ts
import { Client } from 'clashofclans.js';
import Keyv from 'keyv';

const client = new Client({
    keys: ['***'],
    cache: new Keyv('redis://user:pass@localhost:6379')
});
```

Check following storage adapter docs for any extra options.

| Database   | Adapter                                                                           |
| ---------- | ----------------------------------------------------------------------------------|
| Redis      | [@keyv/redis](https://github.com/jaredwray/keyv/tree/master/packages/redis)       |
| MongoDB    | [@keyv/mongo](https://github.com/jaredwray/keyv/tree/master/packages/mongo)       |
| SQLite     | [@keyv/sqlite](https://github.com/jaredwray/keyv/tree/master/packages/sqlite)     |
| PostgreSQL | [@keyv/postgres](https://github.com/jaredwray/keyv/tree/master/packages/postgres) |
| MySQL      | [@keyv/mysql](https://github.com/jaredwray/keyv/tree/master/packages/mysql)       |

## Caching Duration

Some major routes and their `maxAge` values.

| Route                                    | Value <br/>(seconds) |
| ---------------------------------------- | :------------------: |
| `/clans/:clanTag`                        |         120          |
| `/players/:playerTag`                    |          60          |
| `/clans/:clanTag/warlog`                 |         600          |
| `/clans/:clanTag/currentwar`             |         600          |
| `/clans/:clanTag/currentwar/leaguegroup` |         600          |
| `/clanwarleagues/wars/:warTag`           |         600          |
