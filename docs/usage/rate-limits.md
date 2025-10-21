---
sidebar_position: 3
title: Rate limits
---

Rate limits apply to all requests to ensure the service is available for all users. Your rate limit currently depends which [pool](pools) your request is allocated to.

## Responses

HTTP responses contain headers to indicate the your current rate limit status:

|Header|Description|
|-|-|
|`x-ratelimit-tier`|The usage tier that the request will use|
|`x-ratelimit-limit`|The total rate limit per period for the current tier|
|`x-ratelimit-remaining`|The remaining number of requests available during the current period|
|`x-ratelimit-reset`|The UNIX timestamp for the end of the current period, at which time the rate limit will be reset|
