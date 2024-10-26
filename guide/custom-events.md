---
slug: custom-events
title: Custom Events
---

:::caution
The API lacks socket-based real-time events. It is recommended to implement your own custom polling system.
Pull data at specified intervals, compare with previous values, and emit events on change.
Consider using Node.js clusters for efficient parallel processing.

:::

Custom events give you absolute freedom in your creativity. Let's look at a simple example which emits a custom event on clan description change.

```ts
import { Client } from 'clashofclans.js';
const client = new PollingClient({ keys: ['***'] });

client.events.addClans(['#8P2QG08P']);
client.events.setClanEvent({
    name: 'clanDescriptionChange',
    filter: (oldClan, newClan) => {
        return oldClan.description !== newClan.description;
    }
});

client.on('clanDescriptionChange', (oldClan, newClan) => {
    console.log(oldClan.description, newClan.description);
});

(async function () {
    await client.events.init();
})();
```

:::tip

Custom event names can be anything, but it's recommended to use a name that is related to the event.
For example, if you want to listen for a clan description change event, you should use `clanDescriptionChange`.
Similarly, `playerNameChange` for player name change event and `warStateChange` for war state change event.
In other words, you should use either `clan`, `player` or `war` as a prefix of custom event names.

This helps with typing IntelliSense of the Code Editor / IDE.

```js
client.on('clanDescriptionChange', (oldClan, newClan) => {});
```

if you hover on `oldClan` and `newClan`, you will see that they are of type [`Clan`](../docs/api/classes/Clan).

:::