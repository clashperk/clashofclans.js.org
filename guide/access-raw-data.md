---
slug: access-raw-data
title: Access Raw Data
---

Raw data can be accessed from `RESTManager` class. Either use `Client#rest` or construct `RESTManager` class directly.

```ts
const { Client } = require('clashofclans.js');
const client = new Client({ keys: [] });

(async () => {
    try {
        const { data } = await client.rest.getClan('#2PP');
        console.log(data);
    } catch (error) {
        if (error instanceof HTTPError && error.status === 404) {
            console.log('Clan Not Found.');
        }
    }
})();
```

### Easy Access

Set `rejectIfNotValid` to `false` to handle raw data without `try {} catch {}` block.

```ts
const { RESTManager } = require('clashofclans.js');
const rest = new RESTManager({ rejectIfNotValid: false, keys: [] });

(async () => {
    const res = await rest.getClan('#2PP');
    // { data: APIClan | null; ok: boolean; status: number; maxAge: number; path: string; }
    if (res.ok) {
        // code
    }
})();
```
