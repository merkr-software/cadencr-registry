# Pi retirement and namespace handoff

## Decision and exact operation

The [maintainer authorization](https://github.com/merkr-software/cadencr-registry/pull/22#issuecomment-6630319571)
assigns provider ID `pi`, display name **Pi**, publisher `edjubert`, and repository
`https://github.com/edjubert/cadencr-plugin-provider-pi` to the independent owner.
[Issue #23](https://github.com/merkr-software/cadencr-registry/issues/23) tracks delivery.

`publication-request.json` is a **retirement-only** operation: `publications: []`.
`provider-handoffs.json` binds every retired version to its exact old owner and
canonical mirrored entry digest. Historical accepted files, signatures, releases,
archives, receipts, installations and conversations are retained. No database is
changed by this implementation. No blanket `pi` revocation or session migration
is performed. Namespace authorization does not admit a replacement artifact.

Prepared request SHA-256:
`9ccfed68700f1e90de4789500334874aee885105326dbf8d685e377b535e9b3d`.
This is a reviewable preparation, **not a deployed publication**. Refresh the live
baseline/window before publication and obtain confirmation of its new exact hash.
Never silently substitute a newer baseline into this recorded operation.

| Version | Retired canonical schema-2 mirrored entry SHA-256 |
| --- | --- |
| `0.4.0` | `8f434a4793ac955b4d76c49f8b36627a56154a60e31fc615f2f620d789a71add` |
| `0.4.1` | `efd43c79b5380cbc5ea2a934087a273089568edaa11e52ed80881cb187beb8b2` |

## Signed contract and client behavior

The canonical isolated source integration is
`/private/tmp/cadencr-pi-retirement-canonical-20261106`, branch
`feat/pi-retirement-signed-handoff`, based on exact current main
`ebd19991470b15aff76ea61bfed0f39e8318bb60`. It preserves PR #381 and all 25 LSP
policy entries. The earlier development worktree on `d2b4023a...` and the original
retirement checkout at `229d9c59f` are retained. The exact retirement patch was
included without touching the original checkout/database.

- Strict schema-2 `provider_handoffs` are append-only, bound to every previous
  version's owner/source/digest. Entries remain unchanged. A successor must use
  the authorized publisher/repository and a version above all retired versions.
  One handoff per provider is supported; plugin identities cannot use it.
- Normal contribution validation rejects administrative changes and all historical
  package/submission removal or mutation. Explicit `--administrative` validates
  the operator record; it does not authorize publication or admit an artifact.
- The existing authenticated baseline, trust, canonical signing, immutable release,
  conditional discovery update and public read-back remain mandatory. Renewals
  preserve signed records without redownloading historical archives.
- The service authenticates and retains the entire original envelope; only the
  active provider projection hides retired versions. Desktop filtering preserves
  the exact envelope used for installation. Retired new installations fail.
- Ownership changes are rejected before archive download/probe and checked again
  under the activation lock. Existing installations continue with their own
  immutable receipt; switching implementations requires explicit removal and a
  separately admitted installation.
- Newly persisted successor sessions carry a host-owned publisher/source binding,
  including the first runtime event and terminal resume commands. Raw first-party
  IDs and foreign-owner IDs fail visibly with `MANAGED_SESSION_OWNER_CHANGED`.
  Messages/native files remain intact. Non-transferred providers keep legacy IDs.

## Compatible rollout and channels

Older clients reject the new signed field. Do not send it to their feed.

| Consumer | Catalog channel | Cache and result |
| --- | --- | --- |
| Existing releases | `marketplace-v2` | Existing signed contract/cache, still lists historical Pi until client update |
| Delivered compatible release | `marketplace-v2-admin` | Independent `administrative-catalog.json` high-water/cache; retired Pi hidden |
| Revocation policies | Existing `marketplace-v2` policy URLs | Existing signed domains and independent policy high-water checks |

A legacy renewal may have a timestamp later than the first administrative
publication. Compatible clients never reuse that legacy cache as administrative
high-water or fallback. Both histories are retained, and rollback/equivocation
remain forbidden within each channel. A signed channel failure is visible;
there is no fallback to an unsigned or legacy Pi listing.

`renew-administrative-catalog.yml` renews/watches only the administrative catalog.
Its opt-in variable is `CADENCR_REGISTRY_ADMINISTRATIVE_CATALOG_URL`, exactly this
repository's `marketplace-v2-admin/managed-index.json`. Legacy renewal/policy
configuration remains unchanged. Both use the existing protected environment,
qualified CLI, shared publication concurrency lane and exact default-branch ref.
The runtime selector tests capability only; protected manual publication checks
that authenticated-baseline history plus the request delta equals reviewed
administrative history. A later request's delta need not repeat earlier records.

## Current independent candidate

Refreshed on **2026-11-06**:

| Item | Verified evidence |
| --- | --- |
| PR #22 actual head | `a1f2aa6684ba4be0ccb7bdb962b2a385b2ee84d7`; still submits `pidancr 0.2.0` |
| New public release | [Pi v0.5.0](https://github.com/edjubert/cadencr-plugin-provider-pi/releases/tag/v0.5.0), GitHub `immutable: true` |
| Signed annotated tag | `d1ed046dd0393e40941b120b76856eece3050376`, GitHub signature verified |
| Exact source | `f10dd1298eb081e50505d33bc6674e21bd4f0dd2` |
| Author CI | [41878515853](https://github.com/edjubert/cadencr-plugin-provider-pi/actions/runs/41878515853), successful for that source |
| Public assets | All eight downloaded independently; sizes and GitHub asset digests matched |
| Package/submission | Identical package body; `pi` / **Pi** / `0.5.0` / `edjubert`; all four archive hashes match |
| Static archives | No absolute/traversal paths, duplicate entries, links, special files or setuid/setgid bits |
| Executables and source documents | All four executable digests match native reports; ELF/Mach-O architectures match targets; archived README/license/notices/icon match the exact source |
| Native evidence | Author reports all four targets, Pi `1.5.0`, ACP lifecycle/resume/isolation and concurrent permission routing |

Exact inert candidate metadata, native report and release asset evidence are
under `administration/candidates/pi-0.5.0/`, outside accepted `packages/` and
`submissions/`. They are staged for review, **not admitted or published**.

Admission remains pending independent maintainer review, summarized in
[`candidates/pi-0.5.0/ADMISSION_REVIEW.md`](candidates/pi-0.5.0/ADMISSION_REVIEW.md).
Independent RustSec and npm audits passed. Author runtime evidence remains
attributed; native execution is suspended after an automatic approval rejection.
The independent candidate is not required to publish our retirement.

## Delivery and protected publication procedure

1. Finish review/QA, approve the concrete commit structure, integrate source
   retirement and shared code. Preserve LSP qualification and release controls.
2. Release the next handoff-capable CLI through `.agents/skills/release/SKILL.md`:
   proposed `0.15.7`. Existing qualified `0.15.6` is immutable and cannot acquire
   this code. Its actual triplet is version `0.15.6`, tag `cli/v0.15.6`, SHA-256
   `0d95aec0e56f1957d7e928226208fb2d987666b0713678e66ef5798a5ec16623`.
   Do not fabricate the next digest. Qualify the actual released binary, then
   atomically update all three values in `ci/released-cli.env`. The registry's
   current `0.15.4` pin remains unchanged until that real artifact exists. Do not
   land administrative activation with an incapable pin and break renewals.
3. Build and qualify a compatible desktop release on macOS and Linux, coordinated
   with the proposed application `0.16.1` release. Compile its catalog URL to the
   administrative channel; retain legacy policy URLs. Verify packaged behavior,
   preserved installs/conversations, explicit owner mismatch and cache isolation.
4. Authenticate current legacy discovery and retain exact bytes, branch commit,
   trust generation and digests. Refresh the retirement baseline/request/window
   if necessary as a new reviewed operation. Revalidate historical entry digests.
5. **Seed the administrative branch with the exact authenticated legacy head**
   containing that same baseline, before switching clients to it. This is a
   reviewed new-ref creation, not an empty-catalog bootstrap. Schema2-to-schema2
   publication has `discovery_bootstrap: false` and requires an existing matching
   discovery head. Do not pass `previous_index: "bootstrap"` to evade continuity.
   The initial copied catalog has no handoff field and is consumable by the
   compatible release while the signed retirement waits for protection approval.
   Deliver the reviewed compatible clients only after that seed is authenticated
   publicly; verify both legacy and compatible feeds before signing retirement.
6. Validate with the actually qualified CLI:

   ```sh
   cadencr registry validate --base /path/to/accepted --candidate . --administrative
   CADENCR_TEST_CLI=/path/to/qualified/cadencr node --test tests/*.test.mjs
   ```

   Ordinary contribution jobs never select administrative mode. Independent owner
   review remains required for accepting the administrative record into the base.
7. Present the exact registry commit, new request SHA-256, baseline/hash/head,
   signing-key/trust profile, actual CLI triplet, client versions/digests, platform
   QA and CI evidence. Dispatch `publish-protected-catalog` on canonical `main`
   with `confirm-request-sha256` only for that operation. A human approves
   `protected-marketplace-publisher`; the agent never self-approves deployments.
8. Independently fetch public bytes without credentials, verify signatures/trust,
   append-only continuity, exact retired digests and retained catalog entries.
   Confirm compatible marketplace hides `0.4.0`/`0.4.1` and refuses installation,
   existing installs/conversations survive, and legacy feed still authenticates.
   Record immutable publication receipts and public read-back digest.
9. Activate the separate administrative renewal/watch variable and exercise both
   legacy and administrative renewal/watch with the qualified released CLI.
   Do not declare retirement deployed before public/client verification passes.
10. Replacement admission is a **new** exact candidate decision/request, only after
    resolving source findings, fresh review, required platform QA and owner
    acceptance. Inert candidate evidence here is outside accepted directories.

## Verification evidence and remaining release gates

All current local execution is macOS. The latest isolated integration passed
core 170, publisher 222 and CLI 110 tests; the full service suite passed 4,298 tests
with 3 ignored after the final historical-membership guard. Managed suites passed
239 tests with 2 ignored, and the first-event persistence regression passed. Tools and
service Clippy passed. The full registry-template suite passed 98 tests, including protected publication,
renewal/watch, delta-history binding and legacy-channel coexistence.
Registry administrative validation and tests use the freshly built local CLI for
development verification, never as a production release pin.

Desktop checks passed 86 tests plus TypeScript, lint and knip. Live fixture API
checks authenticated the signed retirement and refused both retired installations.
Five targeted development UI cases subsequently passed on macOS 27.0.1 ARM64
through native CUA Chrome: before/after visibility, stale-action refusal, direct
link refusal, signature failure and signed recovery. Authentic captures and the
41-file manifest are retained in the companion QA report. Packaged macOS/Linux
and installed-session lifecycle remain unqualified by that browser campaign. Source review/delivery evidence is
`docs/qa/PI_RETIREMENT_DELIVERY_2026_11_06.md` in the companion worktree. Linux-native
CI, compatible packaged releases, qualified CLI delivery and protected/public
publication are still pending. Passing local checks do not imply deployment.
