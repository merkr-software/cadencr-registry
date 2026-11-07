# Next CLI qualification preparation

## Existing evidence independently authenticated

The public CLI 0.15.6 retained manifest at QA commit
`cfb92d0c9232aabdd7c6ea417a1f63179ac4fe70` was independently fetched from
https://raw.githubusercontent.com/merkr-software/cadencr-registry-qa/cfb92d0c9232aabdd7c6ea417a1f63179ac4fe70/requests/cli0156/proofs/manifest.json
and has exact SHA-256
`945ba5a2f06760b733185018464b7d5a469ac31d7a81de3b44d2024d492e03f5`.
It proves only that existing inventory, not a future CLI or the Pi candidate.

Existing reusable harness boundaries inspected at that exact QA commit:

- `scripts/qualify-released-cli.sh`: general offline contracts.
- `scripts/qualify-lsp-released.py`: original and 0.15.6 LSP contracts.
- `scripts/registry-cli-qa/`: first/fresh registry publication, replay and renewal.
- `scripts/author-cli-qa/`: independent author lifecycle/recovery.
- `scripts/cli0156/{cli_profile.py,profile.mjs,guard.py}`: exact release/profile,
  checked QA repository/id/main/workflow/commit and pre-secret digest binding.
- `.github/workflows/cli0156-{offline,author,registry,policy}.yml`: Linux network
  isolation, cleaned environment, exact public binary download and key-free proof
  retention. They are version-specific; do not relax their old guards in place.

## Version and immutable-profile gate

Prepared next version: **0.15.7**, explicitly approved for the local bump and
committed in signed source `53aa303cc77246c25aa595ad567e1d7e07b54aac`.
[CadencR PR #386](https://github.com/merkr-software/CadencR/pull/386) preserves it in
forward merge `397858ada04bfb996a47af9eb0de61fc7722f5b1`, based on reviewed main
`da81a83a594554d89e00565fb93ce079f5a7c552`. The release helper reports ready and
unreleased; no remote `cli/v0.15.7` tag existed at the 2026-11-07 check.
Recheck availability before the actual release. No release, distributed artifact,
qualification or production pin is implied by this preparation. Do not fabricate
future public digests, integrated main SHAs, run IDs or finalized profiles.

After the approved release exists, create a **new** isolated profile/request/proof
namespace (for example `cli0157` only if that exact version is approved). Preserve
all `cli0155`/`cli0156` inputs, guards and proofs byte-for-byte. Reuse the existing
harness modules through explicit profile selection. The profile remains pending
and non-executable until independently authenticated public provenance, all four
asset bytes, source commit, version/tag, checksum manifest and actual ELF digest
are available. Only then can its pre-secret guards allow qualification dispatch.

## Required new handoff campaign

Retain the existing general/LSP/author/policy regression coverage and add these
cases using our own inert fixtures, never the independent Pi executable:

1. Normal contribution validation rejects file deletion, metadata mutation,
   unapproved publisher/source change and administrative-record append.
2. Explicit administrative validation accepts only complete, exact old-version
   digest bindings and the authorized owner. Reject missing/changed versions,
   unauthorized owner, plugin identities and non-increasing successor versions.
3. Published administrative catalog retains historical entries unchanged. Legacy
   discovery rejects handoffs before remote writes; the new channel must start
   with exact authenticated baseline bytes and use ordinary CAS continuity.
4. First and independent fresh runner publish/replay the same retirement-only
   request (`publications: []`), with no mirror/history mutations. Changed request,
   baseline, source or same-time content fails without advancing discovery.
5. Unchanged-set renewal and replay retain signed records, historical entry bytes
   and release inventories. Legacy renewal/manual publication remains possible
   beside accepted root administrative history; it never receives handoffs.
6. A separately reviewed inert successor above retired versions is constrained to
   the new owner. This synthetic admission is QA-only, not Pi 0.5.0 admission.
7. Independently fetch/authenticate public QA catalog bytes and retain exact
   first/fresh receipts, run/attempt, profile/request/plan digests, inventory and
   before/after heads. Download and hash artifacts rather than only reading green
   status. Keep failures separate from successful retries.

Client QA remains separate: signed projection, old-install retention, early
owner-change refusal, new-owner session binding, explicit raw/foreign resume
failure and separate channel caches on macOS/Linux packaged clients. Source tests
and a local development CLI do not qualify the distributed ELF or packaged app.

## Coordination and authority

The serial LSP publication series completed all 24 new packages (96 assets),
and the operator explicitly lifted its main/pin/publication-lane freeze. With
the existing TypeScript package, its retained inventory covers 25 packages and
100 assets; its SHA-256 is
`9ac42513f70c3df286cab54c8d6b749b9a6d0df293535ec99273e8cf0d6b219a`.
Those immutable `lsp-*-v0.1.0` tags remain bound to
`ebd19991470b15aff76ea61bfed0f39e8318bb60`; never retag or republish them.

PR #385 subsequently integrated the final WS fix on main `da81a83a…`.
The Pi forward merge retains its three proxy files byte-for-byte and passes all
seven final WS network tests in its complete macOS hook run. Main-tip CI and
distributed CLI qualification remain separate checks; prior LSP evidence does
not qualify this new binary. No app release/version is authorized or reserved.
This preparation does not modify existing QA profiles or proof inventories, and
contains no private signing key, publication token or finalized release profile.

The release requires the exact reviewed source on green canonical main, passing
release dry run, release T6 explicit go and a human approval of `cli-release`.
Production pin promotion follows actual distributed qualification and a separate
atomic version/tag/digest review. Never self-approve protected deployments.
