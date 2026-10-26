# Cadencr Registry

Official public registry metadata and distribution assets for Cadencr providers,
themes and custom tabs.

## Runtime and repository layout

All validation, packaging, signing and publication business rules live in the
Rust `cadencr` CLI, maintained and tested in the Cadencr monorepo. This repository
has no JavaScript business engine or npm installation step.

| Path                  | Purpose                                                           |
| --------------------- | ----------------------------------------------------------------- |
| `packages/`           | Immutable package metadata                                        |
| `submissions/`        | Matching source-pinned submissions                                |
| `schemas/`            | Structural reference schemas; semantic CLI validation is required |
| `ci/released-cli.env` | Reviewed released executable version, tag and SHA-256             |
| `scripts/ci/`         | Trusted acquisition and CI process helpers                        |
| `tests/fixtures/`     | Frozen historical compatibility data, not executable tests        |
| `.github/workflows/`  | Contribution CI and protected publication, renewal and watch jobs |

Use the exact released executable selected by `ci/released-cli.env`:
`0.15.2`. Verify the release checksum and exact version before
execution; do not substitute an unreviewed local build or a fallback runtime.
See the [public CLI contract](https://github.com/merkr-software/cadencr/blob/07a41cbcacbcf7bdcfddb514313cbe9d146c101b/packages/cli/README.md).

## Local metadata checks

```sh
cadencr registry validate-metadata /reviewed/package.json
cadencr registry validate-submission /reviewed/submission.json
cadencr registry validate --base /reviewed/base --candidate /reviewed/candidate
cadencr registry build-index --schema-version 2 \
  --packages /reviewed/candidate/packages \
  --generated-at YYYY-MM-DDTHH:mm:ssZ --expires-at YYYY-MM-DDTHH:mm:ssZ \
  --output /trusted/new-unsigned-index.json
```

Use actual whole-second UTC timestamps within the CLI's validity bounds. Outputs
must be new files. Metadata validation does not authenticate signatures, establish
publisher authority, or publish anything. Unsigned index assembly is not signing.

## Review and publication boundaries

Contributions use paired immutable package and source-pinned submission files.
Unprivileged CI is advisory; maintainer acceptance includes ownership and provenance
review. There is no formal CI or GitHub review merge gate: `rle-mino` is the sole
writer to `main`. Candidate metadata is inert: CI obtains
its helpers and released CLI pin from the trusted base and never executes a
contributor archive. Maintainers separately review ownership and source provenance.

Protected publication is a separate operator decision. The publication, policy
bootstrap and renewal jobs run only from `main` in reviewed GitHub environments
that hold the signing key, and stay inert until the repository variables in
[operations](OPERATIONS.md) are set. Never put private keys or credentials in
this repository.

The legacy JSON schemas are provider-only reference contracts, not schema-2
theme/tab schemas. Use the public CLI contract for all three kinds.

Implementation and orchestration tests are authoritative in the Cadencr monorepo;
this registry retains historical fixture data only, not a second test engine.
See [authoring](AUTHORING.md), [contribution policy](CONTRIBUTING.md),
[security](SECURITY.md), [operations](OPERATIONS.md) and the
[source provenance](SOURCE_PROVENANCE.md).
