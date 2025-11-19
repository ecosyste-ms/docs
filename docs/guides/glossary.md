---
sidebar_position: 3
title: Glossary
description: A reference of terms used across the ecosyste.ms platform and documentation.
---
A reference of terms used across the ecosyste.ms platform and documentation.

### Advisory

A security vulnerability notification that describes a known security weakness in a package or version. Advisories typically include severity ratings, affected versions, and remediation guidance.

### Archive

A compressed file containing a package's source code or distributable files, typically in formats like tarball (.tar.gz) or zip.

### Artifact

A distributable file associated with a package version. Artifacts can be source archives, compiled binaries, or other build outputs. A single version may have multiple artifacts for different platforms or formats.

### Commit

A saved change in version control representing a snapshot of the code at a specific point in time. Commits form the history of a repository.

### Committer

A person who has made commits to a repository. Committers are tracked by their name and email address in version control history.

### Contribution

A code change, issue report, or other participation in an open source project. Contributions can include commits, pull requests, documentation, and community support.

### Contributor

A person who has made contributions to an open source project. Contributors may include developers, documentation writers, testers, and community members.

### Dependency

A package that another package requires to function. Dependencies are declared in manifest files and can be direct or transitive.

### Dependency Tree

The complete hierarchy of all dependencies required by a package, including both direct dependencies and all transitive dependencies. The dependency tree shows the full chain of requirements needed to run a package.

### Dependent Package

A package that lists another package as a dependency. Tracking dependent packages helps understand the usage and impact of a package in the ecosystem.

### Dependent Repository

A repository that depends on a particular package. This relationship helps identify which projects use specific packages.

### Direct Dependency

A dependency explicitly declared in a package's manifest file (e.g., package.json, requirements.txt). These are packages the project directly uses.

### Distro

A Linux distribution, such as Ubuntu, Debian, Fedora, or Arch Linux. Distros package and distribute software for their specific operating system.

### Ecosystem

A package management system defined by the type of package manager used, such as npm (JavaScript), PyPI (Python), cargo (Rust), or Maven (Java). Each ecosystem has its own conventions and tools, and may have one or more registries for distributing packages.

### Host

The platform or service where a repository is hosted, such as GitHub, GitLab, Bitbucket, or SourceForge. The host provides version control infrastructure and collaboration features.

### Issue

A tracked bug report, feature request, or other discussion item in a repository's issue tracker. Issues help organize development work and community feedback.

### Keyword

A category or subject tag associated with a package. Keywords help classify and discover packages by their focus area or technology. Similar to topics but defined at the package level.

### Maintainer

A user listed on a package registry as a maintainer of a package. Maintainers have permissions to publish new releases and manage the package on the registry. This may not exactly map to repository maintainers or real-world project maintainers.

### Maintainership

The relationship between a maintainer and a project. Maintainerships track who has responsibility for maintaining specific packages or repositories.

### Manifest

A file that declares a package's dependencies, metadata, and configuration. Examples include package.json (npm), requirements.txt (Python), Cargo.toml (Rust), and pom.xml (Maven).

### Owner

The account on a host that owns a repository. An owner can be an organization or a user account, also known as a namespace. Owners have ownership rights and control access to the repository.

### Package

A distributable unit of software within an ecosystem. Packages can be libraries, frameworks, tools, or applications that are published to a registry for others to use.

### Package Usage

Metrics and data about how a package is being used, including download counts, dependent packages, and adoption trends.

### Parser

A tool that analyzes and extracts structured information from files, such as dependency manifests, license files, or SBOM documents.

### Project

A software project tracked in ecosyste.ms, which may include both a repository and published packages. Projects represent the broader development effort beyond individual packages.

### Pull Request

A proposed code change submitted for review before being merged into a repository. Pull requests facilitate code review and collaborative development.

### Registry

A centralized service for publishing and distributing packages within an ecosystem. Examples include npmjs.com, PyPI.org, and crates.io.

### Release

A published version of a package made available through a registry. Each release typically corresponds to a specific point in the project's version control history.

### Repository

A version control repository (typically Git) where a package's source code is developed and maintained. Often hosted on platforms like GitHub, GitLab, or Bitbucket.

### Repository Metadata

Cataloged information about a source code repository, including details like description, language, stars, forks, creation date, and activity metrics.

### Repository Usage

Metrics and data about how a repository is being used, including stars, forks, contributors, and activity patterns.

### Reverse Dependency

A package that depends on a given package. Understanding reverse dependencies helps assess the impact of changes or vulnerabilities in a package.

### SBOM

Software Bill of Materials - a formal record of all components, libraries, and dependencies included in a piece of software. SBOMs are used for security auditing, license compliance, and supply chain management.

### Scorecard

A security health metric for open source projects. Scorecards evaluate repositories based on security best practices and provide scores to help assess project security posture.

### Source

The origin or provider of data about packages, repositories, or ecosystems. Sources can include registries, package managers, or data aggregation services.

### Sponsor

An individual or organization that provides financial support to open source projects or maintainers, often through platforms like GitHub Sponsors or Open Collective.

### Sponsorship

The relationship between a sponsor and the project or maintainer they support. Sponsorships track funding relationships and financial support in the open source ecosystem.

### Tag

A named reference to a specific point in a repository's history, often used to mark release versions. Tags are typically immutable and used to identify version releases.

### Topic

A category or subject tag associated with a repository or package. Topics help classify and discover projects by their focus area or technology.

### Transitive Dependency

An indirect dependency - a dependency of one of your direct dependencies. For example, if package A depends on B, and B depends on C, then C is a transitive dependency of A.

### Version

A specific release of a package, typically identified using semantic versioning (e.g., 1.2.3). Versions allow users to specify exact or compatible releases they want to use.
