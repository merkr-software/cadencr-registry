# Pi 0.5.0 admission status

## Exact candidate

- Repository: https://github.com/edjubert/cadencr-plugin-provider-pi
- Source: `f10dd1298eb081e50505d33bc6674e21bd4f0dd2`.
- Signed annotated tag: `d1ed046dd0393e40941b120b76856eece3050376`, `v0.5.0`.
- Immutable release: https://github.com/edjubert/cadencr-plugin-provider-pi/releases/tag/v0.5.0
- Author CI: https://github.com/edjubert/cadencr-plugin-provider-pi/actions/runs/41878515853
- PR #22 still submits the different `pidancr 0.2.0` candidate at
  `a1f2aa6684ba4be0ccb7bdb962b2a385b2ee84d7`.

## Review disposition

**Not admitted.** Namespace authorization does not accept an executable. This
candidate requires a separate maintainer provenance/security review, required
platform qualification and explicit registry-owner admission on the exact final
artifacts. Our retirement request contains no replacement publication and has no
candidate-execution dependency.

All eight public assets were independently downloaded and checked against GitHub
digests. Archive/executable digests, ELF/Mach-O architectures and source documents
matched the public metadata. Static inspection found no traversal, duplicate
entries, links, special files or privileged mode bits. These checks do not prove
source-to-binary reproducibility or runtime safety. Author native reports remain
attributed to the author; no contributor executable has been independently run.

Independent dependency audits are retained here:

- `cargo-audit-independent.json`: cargo-audit `0.22.1`, RustSec database
  `26fd2d43f7280a1fb925a3743ec463017afe7119` (2026-11-05), 157 dependencies,
  zero vulnerabilities/warnings, no ignored advisories.
- `npm-audit-independent.json`: prerequisite Pi `1.5.0` installed with Node
  `22.19.0`, scripts disabled and isolated npm configuration/cache; zero
  vulnerabilities. This did not execute Pi or the connector.

Detailed security review and the suspended native-execution decision are retained
privately with the owner, according to [`SECURITY.md`](../../../SECURITY.md).
They must not be disclosed through a public issue/PR. Existing first-party Pi
sessions are not declared compatible with this connector. Installed state and
historical native files remain intact.
