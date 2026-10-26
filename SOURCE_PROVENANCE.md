# Source provenance

This registry bootstrap was derived from `tooling/marketplace-registry` in
`merkr-software/cadencr` at commit
`ca2cb8705fe9918f2c14b49aa68ec71500d119f2`.

The live `packages/` and `submissions/` directories were intentionally emptied;
demonstration metadata remains only under `tests/fixtures/`. The protected
signing and publication workflows remain reviewable examples under
`examples/workflows/` and are not active GitHub Actions workflows.

## Qualified CLI bootstrap — 2026-10-17

The released-CLI pin and three `scripts/ci/*.sh` helpers are copied from
`tooling/marketplace-registry` at CadencR commit `3881812ef5bce64c794caf8cdd6de5a1057905ff`.
The pin selects CLI `0.13.1-dev.38974097824.1`, released from source
`b3e3ed5ac9d2cd4580117558a218b4c809af65d5`; its digest and explicit tag
are reviewed together in `ci/released-cli.env`.

This bootstrap does not change active workflows, packages, submissions, branch
protections, signing keys or publication authority. Existing JavaScript validation
remains active until a separate reviewed trusted-base workflow cutover. Protected
publication workflows remain inert under `examples/workflows/`.

## Validation-helper refresh — 2026-10-17

`scripts/ci/validate-provider-contribution.sh` is refreshed byte-for-byte from
`tooling/marketplace-registry` in `merkr-software/cadencr` at commit
`5eb6bc3e3d49f8686995f36c5614639a5e382e10`. The helper retains its validation scratch
directory on every outcome, including executable-bootstrap failure.

The registry-qualified CLI pin remains `0.13.1-dev.38974097824.1` unchanged;
newer author-only QA is not registry qualification and does not promote that pin.
This refresh changes no active workflows, registry data, branch protections,
signing keys or publication authority.

## Qualified CLI pin refresh preparation - 2026-10-21

The reviewed release selection is CLI `0.13.1-dev.39306959010.1`, tag
`cli/v0.13.1-dev.39306959010.1`, Linux SHA-256
`251c5d0cc7120ccc44dc2d8ad473bd5bb31e3577542098feb72f31372ed7b88a`.
The pin selection is derived from reviewed released metadata; it is not claimed
to be the pin file present in the release source commit. The three CI helpers
and the separately proposed contribution workflow were verified byte-for-byte
against public CadencR source commit
`646864caeca2896170baa65d5389b475099b2ce1`.
Qualification evidence is recorded in CadencR
`docs/MARKETPLACE_RUST_CUTOVER_QUALIFICATION_2026-10-21.md`; public release run
`39306959010` and qualification runs `39307730636` and `39307825181` are historical evidence, not
deployment authority.

This bootstrap refresh does not activate the proposed workflow, change registry
packages/submissions, protections, keys or publication authority. Fresh approval
and a later trusted-base cutover are required.

Latest qualification also covers provider, theme and tab author flows, mixed
incremental publication and renewal of the 11-entry/14-archive QA catalog; see
the dated qualification record and exact public run IDs bound by this review
manifest. This remains isolated QA evidence, not production deployment.

## Stable CLI pin - 2026-10-25

The pin selects stable CLI `0.14.2`, tag `cli/v0.14.2`, Linux SHA-256
`1a2c28a13009c303e01148fe87b54fa77936bcfbe3947c51db918cbae5477849`, released
from public CadencR source commit `7bd611a0d10bfd161bb71f0f87ad693313b2c24f`.
`scripts/ci/fetch-released-cli.sh` now accepts canonical stable `cli/vX.Y.Z`
tags alongside development tags, byte-for-byte with the CadencR template; legacy
parsing, digest, version, redirect and output checks are unchanged.
This changes no registry packages, protections, signing keys or publication
authority.

## Protected publisher deployment - 2026-10-25

The pin selects stable CLI `0.15.2`, tag `cli/v0.15.2`, Linux SHA-256
`f4a719871f776bdbbb9845ac98eb381a85da5730237e0c9b50c2e15198fc4031`, released
from public CadencR source commit `07a41cbcacbcf7bdcfddb514313cbe9d146c101b`.
The workflows `prepare-protected-publication`, `publish-protected-catalog`,
`bootstrap-revocation-policies`, `renew-protected-catalog` and
`watch-registry-expiry`, and `scripts/ci/registry-feeds.sh`, are copied
byte-for-byte from `tooling/marketplace-registry` at CadencR commit
`16469b9f2f614cf940135ac2751f24e23696ed12`; the former inactive copies under
`examples/workflows/` are removed. The jobs stay inert until
`CADENCR_REGISTRY_CATALOG_URL` is set. This changes no registry packages,
submissions, branch protections or signing keys.

## Allowed action pins - 2026-10-26

This repository allows only `actions/checkout@11d5960a326750d5838078e36cf38b85af677262`
and `actions/setup-node@49933ea5288caeca8642d1e84afbd3f7d6820020`, with SHA
pinning required. The publication, policy bootstrap, renewal and watch workflows
are refreshed byte-for-byte from CadencR commit
`8a4203bea9d7596c06bda9470929466655e52862`, which uses those pins.
`prepare-protected-publication` is removed: its unsigned index upload needs an
action this repository does not allow, and publication does not depend on it.
