---
slug: /updating-to-v2
---

# Updating to v2

This new version is a complete TypeScript rewrite to convert everything from plain (literal `JSON {}`) objects to class (constructor) objects and support a lot more features.

### Methods Renamed

All of the methods now have `get` added to the front.

```diff
- await client.clan();
+ await client.getClan();

- await client.player();
+ await client.getPlayer();
```

### Get Current War

```diff
- await client.currentClanWar();
+ await client.getClanWar();

// or

+ await client.getCurrentWar();
```

:::info
The new method `client.getCurrentWar()` returns info about currently running war in the clan for both Regular and CWL Wars.
:::

### Get CWL Group

```diff
- await client.clanWarLeague();
+ await client.getClanWarLeagueGroup();
```

### Get CWL Round

```diff
- await client.clanWarLeagueWar();
+ await client.getClanWarLeagueRound();
```

### Detailed Clan Members

```diff
- const clan = await client.clan('#2PP');
- await client.detailedClanMembers(clan.memberList);

+ const clan = await client.getClan('#2PP');
+ await clan.fetchMembers();
```

### Error Handling

:::caution
Additional property `data.ok` has been removed from class based objects. Now use `try {} catch {}` block to handle errors.

> However, `data.ok` is still available for RESTManager, [check this guide](/guide/access-raw-data#easy-access) to know more.
:::

```js
const { HTTPError } = require('clashofclans.js');

(async () => {
    try {
        const clan = await client.getClan('#2PP');
    } catch (error) {
        if (error instanceof HTTPError && error.status === 404) {
            console.log('Clan Not Found.');
        }
    }

    try {
        const data = await client.getClanWar('#2PP');
    } catch (error) {
        if (error instanceof HTTPError && error.reason === 'notFound') {
            console.log('Clan Not Found.');
        }
        if (error instanceof HTTPError && error.reason === 'notInWar') {
            console.log('Clan is not in War.');
        }
    }
})();
```

:::info
The `HTTPError` class is a custom error class that is thrown when the API returns an error. Also we have customized few other errors that are thrown when the API returns insufficient data, e.g `notInWar` error for `Client#getClanWar()` method.

Expected values for `HTTPError.reason` are `notFound`, `notInWar`, `accessDenied`, `accessDenied.invalidIp`, `privateWarLog`, `badRequest`, `requestThrottled`, `inMaintenance`, `requestAborted`, and `unknownException`.
:::

## Other Changes

-   To make things simpler `client.verifyPlayerToken()` now returns a boolean value.

-   Param `leagueId` has been removed where it only accepts Legend League Id (29000022).

```diff
- client.leagueSeason(leagueId, [options]);
+ client.getLeagueSeasons([options]);

- client.leagueRanking(leagueId, seasonId, [options])
+ client.getSeasonRankings(seasonId, [options]);
```

-   `client.init()` method has been replaced with `client.login()`

## Properties Renamed

### Clan

This includes Clan, Searched Clan, Player Clan, Ranked Clan, War Clan and WarLog Clan.

```diff
- clan.members
+ clan.memberCount

- clan.memberList
+ clan.members

- clan.clanPoints
+ clan.points

- clan.clanLevel
+ clan.level

- clan.clanVersusPoints
+ clan.versusPoints

- clan.requiredTownhallLevel
+ clan.requiredTownHallLevel
```

### Clan Member

```diff
- member.donationsReceived
+ member.received
```

### WarLog, Clan War, CWL Group

**Clan / Opponent**

```diff
- clan.destructionPercentage
+ clan.destruction

- clan.attacks
+ clan.attackCount
```

**Clan War Member**

```diff
- member.townhallLevel
+ member.townHallLevel

- member.opponentAttacks
+ member.defenseCount
```

**Clan War Attack**

```diff
- attack.destructionPercentage
+ attack.destruction
```

### Player

```diff
- player.donationsReceived
+ player.received

- player.warPreference
+ player.warOptedIn // boolean | null
```

### Troop

```diff
- troop.superTroopIsActive
+ troop.isActive
```

### Badge and Icon URLs

```diff
- *.badgeUrls.*
+ *.badge.large
+ *.badge.medium
+ *.badge.small

- *.iconUrls.*
+ *.icon.medium
+ *.icon.small
+ *.icon.tiny
```
