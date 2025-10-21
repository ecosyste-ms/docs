---
sidebar_position: 5
title: Your first API call
---

Ecosyste.ms services are designed to provide standardised data across a wide range of open source ecosystems; different languages, packaging systems, and so on. The APIs are designed to give you the information you want as easily as possible.

Let's explore the APIs by looking for information on a particular package; how about `numpy`, the Python array computing package.

## API format

All ecosyste.ms APIs are REST-style JSON APIs, with OpenAPI documentation linked from each individual service. You should send HTTP requests to the endpoints with an `Accept: application/json` header.

## Authentication

You can use ecosyste.ms APIs without any authentication at all, so to keep it simple, that's what we'll do in this example. However, you will be sharing a limited request quota with other unauthenticated clients and if that quota limit is reached, you will get a `429 Too Many Requests` HTTP response.

See our main [API documentation](https://ecosyste.ms/api) for more details of how to get a higher rate limit.

## Fetching package data

As we want to know about a package, let's start by asking the [packages service](https://packages.ecosyste.ms). The [API documentation](https://packages.ecosyste.ms/docs/index.html) includes details of all the available API calls, but we'll start with the simple package lookup endpoint, `/packages/lookup`.

This endpoint lets you run a search for packages across the entire dataset. Let's start by just looking for `numpy` using the `name` query parameter.

```bash
curl -X 'GET' \
  'https://packages.ecosyste.ms/api/v1/packages/lookup?name=numpy' \
  -H 'accept: application/json'
```

```json
[
  {
    "id": 4202226,
    "name": "numpy",
    "ecosystem": "cargo",
    "description": "PyO3-based Rust bindings of the NumPy C-API",
		... lots more data ...
  },
  {
    "id": 422449,
    "name": "numpy",
    "ecosystem": "cocoapods",
    "description": "numpy",
		... lots more data ...
  },
  {
    "id": 2123840,
    "name": "numpy",
    "ecosystem": "npm",
    "description": "numpy",
		... lots more data ...
  },
  {
    "id": 9054981,
    "name": "numpy",
    "ecosystem": "nuget",
    "description": "C# bindings for NumPy - a fundamental library for scientific computing, machine learning and AI. Does not require a local Python installation!",
		... lots more data ...
  },
  {
    "id": 2822925,
    "name": "numpy",
    "ecosystem": "pypi",
    "description": "Fundamental package for array computing in Python",
		... lots more data ...
  },
  {
    "id": 263995,
    "name": "numpy",
    "ecosystem": "rubygems",
    "description": "Numpy wrapper for Ruby",
		... lots more data ...
  },
  {
    "id": 4147199,
    "name": "numpy",
    "ecosystem": "homebrew",
    "description": "Package for scientific computing with Python",
		... lots more data ...
  },
  {
    "id": 4323212,
    "name": "numpy",
    "ecosystem": "deno",
    "description": "NumPy for Deno.",
		... lots more data ...
  },
  {
    "id": 5289439,
    "name": "numpy",
    "ecosystem": "conda",
    "description": "NumPy is the fundamental package needed for scientific computing with Python.",
		... lots more data ...
  }
]
```

That's a lot of packages! You can immediately see what ecosyste.ms does, here. We're getting results for packages called `numpy` across multiple software ecosystems. There are Rust crates, Ruby gems, Homebrew crates, and more.

### Ecosystems

If we want data for the specific Python package, we'd better narrow down a bit using the `ecosystem` parameter. In this case, we want `pypi`, the Python package manager ecosystem.

```bash
curl -X 'GET' \
  'https://packages.ecosyste.ms/api/v1/packages/lookup?ecosystem=pypi&name=numpy' \
  -H 'accept: application/json'
```

```json
[
  {
    "id": 2822925,
    "name": "numpy",
    "ecosystem": "pypi",
    "description": "Fundamental package for array computing in Python",
    "homepage": null,
    "licenses": ...,
    "repository_url": "https://github.com/numpy/numpy",
    "keywords_array": [],
    "versions_count": 170,
    "first_release_published_at": "2006-12-02T02:07:43.000Z",
    "latest_release_published_at": "2025-10-15T16:15:19.000Z",
    "latest_release_number": "2.3.4",
    "registry_url": "https://pypi.org/project/numpy/",
    "install_command": "pip install numpy --index-url https://pypi.org/simple",
    "documentation_url": "https://numpy.readthedocs.io/",
		... loads more data ...
  }
]
```

That's better, just the one result now. Looking at the data, we can see that numpy has had 170 releases since it first launched in 2006 - not bad!

If you run the curl command above yourself (or use the [interactive documentation](https://packages.ecosyste.ms/docs/index.html)), you'll see that as well as the short excerpt shown above, you get a large JSON structure containing comprehensive information all about the package, its source code repository, maintainers, and much more. The packages service aggregates information from many other ecosyste.ms services to give you an overview of a package, so you often don't need to call them directly.

### Dependencies

Big as that response is though, it doesn't give us everything. Let's find out what `numpy` is using underneath - what does it depend on? For that, we want to get the dependency manifest, which is available from the `repos` service by following the `manifest_url` in the package response.

```bash
curl -X 'GET' \
  'https://repos.ecosyste.ms/api/v1/hosts/GitHub/repositories/numpy%2Fnumpy/manifests' \
  -H 'accept: application/json'
```

```json
[
	...
  {
    "ecosystem": "pypi",
    "filepath": "release_requirements.txt",
    "sha": null,
    "kind": "manifest",
    "created_at": "2023-01-13T11:45:16.322Z",
    "updated_at": "2023-01-13T11:45:16.322Z",
    "repository_link": "https://github.com/numpy/numpy/blob/main/release_requirements.txt",
    "dependencies": [
      {
        "id": 6875659534,
        "package_name": "urllib3",
        "ecosystem": "pypi",
        "requirements": "*",
        "direct": true,
        "kind": "runtime",
        "optional": false
      },
      {
        "id": 6875659535,
        "package_name": "beautifulsoup4",
        "ecosystem": "pypi",
        "requirements": "*",
        "direct": true,
        "kind": "runtime",
        "optional": false
      },
			...
    ]
  },
  {
    "ecosystem": "pypi",
    "filepath": "test_requirements.txt",
    "sha": null,
    "kind": "manifest",
    "created_at": "2023-01-13T11:45:16.551Z",
    "updated_at": "2023-01-13T11:45:16.551Z",
    "repository_link": "https://github.com/numpy/numpy/blob/main/test_requirements.txt",
    "dependencies": [
      {
        "id": 6875660488,
        "package_name": "cython",
        "ecosystem": "pypi",
        "requirements": "\u003E=0.29.30,\u003C3.0",
        "direct": true,
        "kind": "test",
        "optional": false
      },
			...
    ]
  },
	...
]
```

As you can see, this has given us back a list of manifests, each of which is effectively a different list of dependencies. There are multiple manifests for a package because they represent different dependency sets like CI action dependencies, test dependencies, build dependencies, and so on.

### Going further

There's a huge amount of data about all the open source software ecosystems in the various APIs. Take a look at our detailed [API documentation](https://ecosyste.ms/api) for more, and explore the different available services. You can click the JSON link on most pages, which will take you to the API endpoint for the data used to create the page.

If you have any problems or questions, please ask in one of the [community](https://docs.ecosyste.ms/docs/about/community) spaces. We look forward to seeing you there!
