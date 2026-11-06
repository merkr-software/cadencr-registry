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

Proposed next version: **0.15.7**, not reserved or approved. Release skill T2
confirmation must precede the bump. Recheck version/tag availability when approved.
Do not create fake public pins, source hashes, run IDs or finalized profiles.

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

The active serial LSP publication series owns exact main/workflows and global
publication lanes. Until its explicit completion signal, make no main merge,
remote pin/policy/workflow change or competing author dispatch. Preparation here
is local/read-only and does not modify the QA repository or existing profiles.
No private signing key, publication token or finalized next-release profile is
present in this preparation.

The release requires the exact reviewed source on green canonical main, passing
release dry run, release T6 explicit go and a human approval of `cli-release`.
Production pin promotion follows actual distributed qualification and a separate
atomic version/tag/digest review. Never self-approve protected deployments.
