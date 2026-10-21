---
name: Plugin version
about: Submit immutable metadata for one provider, theme or custom tab version
---

## Identity

- Kind (`provider`, `theme`, or `tab`):
- Plugin ID:
- Version:
- Publisher/maintainer GitHub handles:
- Source repository:
- Source commit (full SHA):
- Release tag:

## Contribution files

- Package: `packages/<plugin-id>-<exact-version>.json`
- Source-pinned submission: `submissions/<plugin-id>-<exact-version>.json`

Schema-2 contributions use an explicit `provider`, `theme` or `tab` kind; legacy
provider schema references are not theme/tab contracts. See `CONTRIBUTING.md` for
the three kind-specific Rust validation and packaging commands.

## Artifacts

| Platform | Release asset URL | SHA-256 |
| -------- | ----------------- | ------- |
|          |                   |         |

## Review notes

- Provider native CLI prerequisites/authentication, or theme/tab setup documentation:
- License and provenance:
- User-visible changes:
- Dependency or privilege changes (including tab permissions/origins):

## Checklist

- [ ] I added both the managed package and its matching source-pinned submission.
- [ ] I control or am authorized to publish the linked project and plugin ID.
- [ ] The submission pins a full source commit, exact release tag, and non-empty changelog.
- [ ] The source revision and every archive are immutable and exact-versioned.
- [ ] Every checksum was calculated from the linked release asset.
- [ ] Archives contain no credentials; provider users authenticate through the native CLI.
- [ ] Kind-specific local validation passes; providers also pass version/model/ACP and prompt-free conformance tests.
- [ ] I ran the pinned Rust CLI metadata, submission and contribution validators locally.
- [ ] I understand advisory CI validates inert metadata only; maintainers separately verify publisher authority and provenance.
- [ ] I understand maintainer acceptance includes provenance/security review and may reject or revoke a version.
