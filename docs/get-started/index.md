---
sidebar_position: 1
title: Getting Started
slug: /
description:  How to get up and running with ecosyste.ms.
---

ecosyste.ms serves a wide range of people - developers, researchers, policymakers, funders, and commercial teams. This hub points you to the right place to begin, whether you’re reusing our data under open licences, integrating ecosyste.ms at work, joining the team, or contributing to the project. A single starting point for understanding how to access, use, and build on ecosyste.ms.


<div id="get-started-links">

		[Make your first API call](/docs/guides/first-api-call)   [Local development setup](/docs/guides/development) [ecosystems architecture overview](/docs/guides/architecture)

</div>
<hr />

import DocCardList from '@theme/DocCardList';
import { useCurrentSidebarSiblings } from '@docusaurus/plugin-content-docs/client';


<DocCardList items={useCurrentSidebarSiblings().filter((item) => (item.label != frontMatter.title))} />
