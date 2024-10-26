---
slug: login-with-email
title: Login with Email
---

:::info
Before you start, you need to create an account on [Clash of Clans API Developer Portal](https://developer.clashofclans.com/#/).

Use `email` and `password` to start the client and automatically generate API Keys.
:::

```ts
import { Client } from 'clashofclans.js';
const client = new Client();

(async function () {
    await client.login({ email: '***', password: '***', keyName: "YourKeyName" });
})();
```

:::info
Use a unique key name per-project to avoid deletion of the keys.
:::