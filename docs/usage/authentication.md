---
sidebar_position: 2
title: Authentication
---

## Unauthenticated access

We maintain two request pools, to help us better understand user behavior and to manage service response times:

### Polite Pool

The polite pool is our priority pool of known users. To access the polite pool you will need to provide an email address so that we can contact you should we need to discuss fair usage and rate limits.

To access the polite pool:

* Add `mailto=you@example.com` as a query parameter to your API request, or
* Add `mailto:you@example.com` somewhere in your User-Agent request header, or
* Configure your [`from` request header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/From).

### Common Pool

The common pool is for everyone else. It will have less consistent response times, especially during peak periods so that we can prioritize polite requests more easily.

## Authenticated access

Some of our APIs are available only to authenticated, paid users. We will expand upon this when our paid access tiers are made available to the general public.