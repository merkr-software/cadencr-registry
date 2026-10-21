# Registry security

## Reporting and review

Do not disclose vulnerabilities or credentials in a public pull request. Use the
repository's private vulnerability reporting channel when available. Maintainers
may suspend review, delist or revoke compromised packages; discovery removal and
signed execution revocation are separate operations.

Metadata checks do not prove publisher authority, source-to-binary provenance,
archive safety or runtime conformance. Review source ownership, immutable tag and
commit bindings, licenses, checksums, privileges and executable behavior separately.
Schemas are structural references, not a substitute for semantic validation.

## Executable and contribution trust

Use only the reviewed released Rust CLI pinned in `ci/released-cli.env`. Trusted
helpers verify its SHA-256 before execution and check the exact version. Missing or
invalid runtime inputs fail closed; there is no alternate business implementation.
Pull-request CI uses trusted-base helpers and inert candidate metadata, read-only
permissions and no publication credentials. Never execute contributor archives.

## Protected publication

Publication requires an independently reviewed immutable request, trusted state
directory, explicit confirmations and protected credential access. Keep signing
keys outside source and operation state. Environment approvals, branch protection,
key custody and monitoring are operator responsibilities, not workflow guarantees.
Inactive examples are not deployed publishers or authorization to activate one.

Preserve state after partial failure and reconcile exact remote evidence. Never
resolve conflicts by overwriting immutable versions, moving tags, deleting
releases or rolling back discovery. Verified recovery is not a distributed
transaction; external privileged mutation remains possible. Consumers must verify
signatures, digests and continuity against explicitly configured trust roots.

See the [public CLI contract](https://github.com/merkr-software/cadencr/blob/646864caeca2896170baa65d5389b475099b2ce1/packages/cli/README.md)
for signing, publication, restoration and discovery guarantees and limits.
