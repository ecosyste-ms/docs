---
sidebar_position: 3
title: Rate limits
---

Rate limits apply to all requests to ensure the service is responsive and available for all users. Your rate limit depends upon your [access method](authentication) and [paid service tier](commercial):

## Default rate limits

We operate a two-tier rate limiting system for unatuhenticated access. Read more about [unauthenticated access](authentication)

## Commercial rate limits

Commercial users working at scale can purchase increased rate limits from [our API plans pricing page](https://ecosyste.ms/pricing).

## Responses

HTTP responses contain headers to indicate the your current rate limit status:

|Header|Description|
|-|-|
|`x-ratelimit-tier`|The usage tier that the request will use|
|`x-ratelimit-limit`|The total rate limit per period for the current tier|
|`x-ratelimit-remaining`|The remaining number of requests available during the current period|
|`x-ratelimit-reset`|The UNIX timestamp for the end of the current period, at which time the rate limit will be reset|