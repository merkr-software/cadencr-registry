# Prepare a provider release

## Implement and test the connector

Implement `version`, `models --format acp-config-options-v1 --cwd <absolute-path>`,
and `run --protocol acp-v1`. Test the connector in Cadencr. Document native CLI
installation and authentication separately; never distribute credentials.
Packaging is not runtime conformance approval or proof of source ownership.

## Stage and package

Build each declared platform outside this registry. Put only reviewed distribution
files in a dedicated trusted staging directory, not a source checkout or home
directory. Keep it unchanged during packaging and inspect all files for secrets.

```sh
cadencr registry pack-provider \
  --package /reviewed/package.json --target darwin-aarch64 \
  --directory /trusted/staging \
  --output /trusted/artifacts/provider-0.1.0-darwin-aarch64.tar.gz
```

Use the exact reviewed release pinned in `ci/released-cli.env`. The output parent
must exist and the output must not already exist. The command does not build or
execute the connector. Record its archive SHA-256 and compressed size; update the
package with the exact release asset URL and digest, then verify uploaded bytes.
Repeat for each supported and tested target. A local placeholder digest is not an
acceptable submitted checksum. Filename filters are not a secret-content scanner
or an operating-system sandbox.

## Submit immutable metadata

Publish exact-version assets in the author's public repository. Pin the source
commit and release tag, and prepare the matching package/submission pair described
in [CONTRIBUTING.md](CONTRIBUTING.md).

```sh
cadencr registry validate-metadata /reviewed/package.json
cadencr registry validate-submission /reviewed/submission.json
cadencr registry validate --base /reviewed/base --candidate /reviewed/candidate
```

These checks do not fetch archives, execute the connector, or establish ownership.
CI is advisory; maintainer acceptance includes ownership and provenance review,
not a formal GitHub review merge gate. Author releases are provenance, not
registry-owned distribution or catalog publication. Protected mirroring, signing
and discovery advancement require separate authorization.

See the [public CLI contract](https://github.com/merkr-software/cadencr/blob/7bd611a0d10bfd161bb71f0f87ad693313b2c24f/packages/cli/README.md)
for complete limits, commands, confirmations and recovery semantics. For themes
and custom tabs, use the kind-specific validation and packaging commands in
[CONTRIBUTING.md](CONTRIBUTING.md); they do not implement the ACP provider runtime.
