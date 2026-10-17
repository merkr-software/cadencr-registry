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
