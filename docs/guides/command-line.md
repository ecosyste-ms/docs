---
title: Command line
---

You can access ecosyste.ms data from the command line using our experimental CLI tool.

## Installation

Friendly instructions coming soon, in the meantime see the project [README](https://github.com/ecosyste-ms/ecosyste_ms_cli).

## Usage

Usage help is available by running:

```bash
> ecosystems --help
```

Or for a particular command / subcommand:

```bash
> ecosystems packages lookup_package --help
```

By default, results are shown in a table, but other formats are available (`json`, `tsv`, and `jsonl` (JSON lines)):

```bash
> ecosystems --format json packages lookup_package --name numpy --ecosystem pypi
```
```json
[
  {
    "id": 2822925,
    "name": "numpy",
    "ecosystem": "pypi",
    "description": "Fundamental package for array computing in Python",
		...etc...
  }
]
```

## Commands

The CLI provides access to various [ecosyste.ms APIs](https://ecosyste.ms/api). Each command group corresponds to an API endpoint:

- **`advisories`** - Security advisories and vulnerability data
- **`archives`** - Package archive analysis
- **`commits`** - Repository commit data
- **`dependabot`** - Dependabot integration data
- **`diff`** - File and archive comparison
- **`docker`** - Docker image metadata
- **`issues`** - Repository issues and pull requests
- **`licenses`** - License detection and analysis
- **`opencollective`** - Open Collective funding data
- **`packages`** - Package registry information
- **`parser`** - Dependency file parsing
- **`repos`** - Repository data and metadata
- **`resolve`** - Dependency resolution
- **`sbom`** - Software Bill of Materials generation
- **`sponsors`** - GitHub Sponsors data
- **`summary`** - Aggregated summaries
- **`timeline`** - Event timeline data
