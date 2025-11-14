---
sidebar_position: 1
title: Getting Started
slug: /
description:  How to get up and running with ecosyste.ms.
---
import DocCardList from '@theme/DocCardList';
import { useCurrentSidebarSiblings } from '@docusaurus/plugin-content-docs/client';

<DocCardList items={useCurrentSidebarSiblings().filter((item) => (item.label != frontMatter.title))} />
