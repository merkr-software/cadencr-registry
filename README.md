# Cadencr Registry

Official public registry metadata for Cadencr managed providers.

## Current state

The registry is intentionally empty. No provider package or catalogue has been
published from this repository. Provider contributions belong in paired files:

- `packages/<provider>-<version>.json`
- `submissions/<provider>-<version>.json`

Every change requires human review by `@rle-mino`. Pull requests run only the
unprivileged metadata-validation workflow; it does not download or execute
provider archives and has no publication credentials.

## Local verification

Requires Node `>=22.19.0 <23.0.0`.

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run validate
```

Contributor format and security policy are documented in `AUTHORING.md`,
`CONTRIBUTING.md`, and `SECURITY.md`. Protected signing/publication workflows are
inactive examples under `examples/workflows/`; activating them requires a
separate security review, pinned trust configuration, protected environment,
and explicit key-management decision.

See `SOURCE_PROVENANCE.md` for the exact source revision.

## Build a local unsigned index

After adding real package metadata, an optional local smoke test is:

```bash
generated_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
expires_at="$(node -e 'console.log(new Date(Date.now() + 7 * 86400000).toISOString())')"
npm run build:index -- --generated-at "$generated_at" --expires-at "$expires_at" --output /tmp/cadencr-managed-index.json
```

This produces only a local unsigned file. It does not sign, upload, or publish a catalog.
