# Contributing a Provider, Theme or Custom Tab

## Acceptance and CI

CI checks are advisory; there is no formal CI or GitHub review merge gate.
`rle-mino` is the sole writer to `main`. Maintainer acceptance includes
ownership, provenance and security review; a passing check is not acceptance or
publication authority.

## First submission

1. Build and test the plugin in Cadencr. Do not embed credentials, tokens or private
   keys in its metadata, archive, arguments or environment declarations.
2. Stage distributable files only and use the appropriate Rust packaging command.
3. Publish immutable assets in your public author repository. Record each exact
   SHA-256, full source commit and release tag; never submit placeholders.
4. Add `packages/<plugin-id>-<exact-version>.json` and the matching
   `submissions/<plugin-id>-<exact-version>.json` to a registry PR.
5. Validate the complete candidate against the accepted base with trusted Rust
   tooling, then request maintainer ownership/provenance and security review.

| Kind              | Validate locally                                                  | Package                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ACP provider      | `cadencr plugin validate <folder> --descriptor <descriptor.json>` | `cadencr registry pack-provider --package <metadata.json> --target <target> --directory <staging> --output <new.tar.gz>` for each declared target |
| Declarative theme | `cadencr plugin validate <folder> --kind theme`                   | `cadencr registry pack-theme --directory <staging> --output <new.tar.gz>`                                                                         |
| Custom tab        | `cadencr plugin validate <folder> --kind tab`                     | `cadencr registry pack-tab --directory <compiled-staging> --output <new.tar.gz>`                                                                  |

Providers must implement the documented executable/ACP contract and pass native
runtime/conformance tests on every declared platform. A theme remains declarative
with no ACP execution surface. A tab declares reviewed permissions/origins and
contains its built distribution, not an arbitrary source checkout. Packaging is
inert; it does not run a build or prove a plugin safe.

```sh
# Use the exact reviewed release pinned in ci/released-cli.env.
cadencr registry validate-metadata /path/to/package.json
cadencr registry validate-submission /path/to/submission.json
cadencr registry validate --base /path/to/base --candidate /path/to/candidate
```

Use the [CLI contract](https://github.com/merkr-software/cadencr/blob/07a41cbcacbcf7bdcfddb514313cbe9d146c101b/packages/cli/README.md) for the exact kind-specific
submission envelopes. Legacy providers use schema 1; mixed entries/submissions use
explicit schema-2 kinds. The schemas in this registry are legacy provider-only references, not schema-2
theme/tab contracts. Use the Rust CLI for the complete semantic policy. Maintainers separately check that the source tag resolves to the
pinned commit, inspect build provenance and confirm the submitter's authority.

## Updating a plugin

1. Increment to a new exact semantic version; build/test and publish new immutable
   author assets.
2. Add the new package and matching source-pinned submission in a new registry PR.
3. Run the same base/candidate validation and request maintainer acceptance.

Previously accepted versions cannot be modified or removed through this path.
Changing JSON whitespace/key order is not a semantic change; changing a checksum,
URL, permissions, publisher or any other metadata value is. Correct mistakes with
a new version, never by replacing accepted assets or metadata. The publisher also
checks continuity against the authenticated prior signed catalog.

## Identity, ownership and licensing

- IDs use `^[a-z][a-z0-9-]*$`; normalized collisions and reserved identities fail.
- New identities require proof of authority over the linked source project.
- A normal version PR cannot silently transfer publisher/source ownership.
  Transfers need a separate explicit administrative procedure and independent
  evidence; there is no ordinary contribution bypass.
- Declare the required license/provenance and include the distributable license
  and documentation. Review dependencies, privileges, setup and all target bytes.
- Acceptance is not a safety certificate or a promise of permanent listing.

After separate publication authorization, the protected registry publisher mirrors the exact archives to
registry-owned GitHub Releases and publishes the signed catalog. Authors do not
receive registry signing authority. No PR check executes contributor binaries or
proves which source produced an archive.

## Security reports

Do not report vulnerabilities in a public PR; follow [SECURITY.md](SECURITY.md).
Maintainers may reject, delist or revoke malicious, compromised or otherwise
unacceptable packages. Catalog discovery and signed revocation are distinct
controls; incidents require the protected operator procedure.
