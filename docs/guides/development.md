---
sidebar_position: 4
title: Local development
description: Setting up everything you need installed to work on ecosyste.ms code.
---

## Requirements

At present, most ecosyste.ms code is built using [Ruby on Rails](https://rubyonrails.org), and there are some common
requirements that you'll need to satisfy in order to run things locally:

### Ruby

You'll need a [Ruby](https://www.ruby-lang.org) 3.4 installation on your development machine. We'd recommend using a version manager like [rbenv](https://github.com/rbenv/rbenv) or [rv](https://github.com/spinel-coop/rv) to manage different language versions; most codebases have a `.ruby-version` file which will specify the exact version that's in use.

### PostgreSQL

We use [PostgreSQL 14](https://www.postgresql.org) as a database server. You can either install a server natively, or using their [Docker image](https://hub.docker.com/_/postgres) - be sure to specify version 14.

### Redis

[Redis](https://redis.io/download/) is used for background queue management and caching. Again, install natively, or use a [Docker image](https://hub.docker.com/_/redis). [Valkey](https://valkey.io) ([docker](https://hub.docker.com/r/valkey/valkey)) will also work fine.

### Node.js

Rails also uses Node.js in its build system, so you'll need that installed. As with Ruby, we recommend using a version manager like [nodenv](https://github.com/nodenv/nodenv?tab=readme-ov-file#installation) to manage different version requirements.

### Miscellaneous other utilities

Some scripts use other utilities which you'll want installed.

* wget

## Setup scripts

### Brewfile

If you're on MacOS and using [homebrew](https://brew.sh), you can use this `Brewfile` to install the required dependencies:

```
brew "rbenv"
brew "nodenv"
brew "wget"
```
Save the content to a file called `Brewfile`, and run `brew bundle`.

### Docker Compose

Many repositories have `docker-compose.yml` files to run required services. If not, you can use this generic one:
```yaml
services:
  postgres:
    image: postgres:14
    volumes:
      - ecosystems_db_data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: ecosystems
      POSTGRES_PASSWORD: password
    ports:
      - 5432:5432

  redis:
    image: redis:8
    ports:
      - 3306:3306

volumes:
  ecosystems_db_data:
```
In either case, run `docker compose up --build` to start the services needed.

## Development

Once you've got dependencies set up and cloned the repository you're working on:

1. Set configuration environment variables: Copy `env.example` to `.env.development` and customise the values to suit your local setup (including database connection details).
1. Run `bin/setup` to install dependencies, initialise databases, etc.
1. Run `bin/rails db:seed` to install any seed data.
1. Run `bin/dev` to run the service.
1. Access the service at [http://localhost:3000](http://localhost:3000).

## Using other ecosyste.ms services

Most services will automatically use data from other ecosyste.ms production services. For instance, the packages services will, even in local development, pull data from [the live repos service](https://repos.ecosyste.ms).

In most cases this is what you want, but if you need to work on two services at once, _some_ services have settings in `env.example` allowing you to override the domains for external services (e.g. `PARSER_DOMAIN` in the `repos` service).

## Next steps

Most services have a `DEVELOPMENT.md` file in their repository root which may contain more detailed instructions for that particular service, including further rake tasks, overviews of code structure, and so on.
