---
slug: request-override
title: Request Override
---

Default client options can be overridden for all methods. This is useful for exceptionally complex requests.

```ts
import { Client, QueueThrottler } from 'clashofclans.js';

const client = new Client({
    keys: ['***'],
    cache: true, // caching enabled
    retryLimit: 3, // 3 retries
    restRequestTimeout: 5000, // 5 seconds timeout
    throttler: new QueueThrottler(1000 / 10) // 100ms delay between requests
});

(async () => {
    await client.getPlayer('#2PP', { force: true }); // bypass cache and force request

    await client.getClan('#2PP', { cache: false }); // no caching

    await client.getClan('#2PP', { retryLimit: 0 }); // no retries

    await client.getPlayer('#2PP', { ignoreRateLimit: true }); // no delay between requests

    // this endpoint extremely slow, so we need to override the timeout
    await client.getSeasonRankings('2021-12', { restRequestTimeout: 0 }); // no timeout
})();
```
