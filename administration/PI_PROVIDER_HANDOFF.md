# Pi retirement and ownership handoff

Retire first-party Pi `0.4.0` and `0.4.1`. The [maintainer authorization](https://github.com/merkr-software/cadencr-registry/pull/22#issuecomment-6630319571)
assigns provider ID `pi`, display name **Pi**, publisher `edjubert`, and repository
`https://github.com/edjubert/cadencr-plugin-provider-pi` to the independent owner.
Replacement package admission is a separate review.

## Operation

- [`provider-handoffs.json`](../provider-handoffs.json) binds the retired versions
  to their original owner/source and canonical entry digests.
- [`publication-request.json`](../publication-request.json) has `publications: []`:
  it retires listings without admitting a replacement package.
- [`pi-baseline.json`](pi-baseline.json) is the signed baseline input. Refresh it
  and the request window against authenticated live discovery before publication.

Accepted packages, submissions, assets and signed history remain immutable.
Installed receipts and conversations are retained; no session migration or
blanket identity revocation is part of this operation.

## Administrative review boundary

Ordinary contribution validation must reject a new handoff. Review this operation
with the qualified CLI's explicit `registry validate --administrative` mode
against the current trusted main revision. Never make candidate metadata select
administrative authority in the ordinary contribution workflow.

## Publication order

1. Qualify a released handoff-capable CLI and promote its version/tag/digest pin.
   Authenticate the legacy head and seed `marketplace-v2-admin` with those exact
   bytes before delivering compatible clients. Keep legacy catalog/policy URLs;
   never publish handoffs on `marketplace-v2` or substitute an empty bootstrap.
2. Review the refreshed baseline and request, then validate with the qualified
   CLI's explicit `--administrative` mode. Ordinary contribution validation must
   reject a new handoff even with a capable CLI; owner review remains required.
3. Publish through the protected workflow using the exact reviewed commit and
   request digest, with human environment approval.
4. Independently verify public signatures, continuity and retired digests; confirm
   compatible clients hide/refuse the retired versions while installed state and
   the legacy feed remain intact. Enable administrative renewal separately.

See [registry operations](../OPERATIONS.md#administrative-provider-retirement-and-ownership-transfer)
for the protected workflow and channel configuration.
