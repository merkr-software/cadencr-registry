import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const read = (path) => JSON.parse(readFileSync(new URL(`../${path}`, import.meta.url), "utf8"));
const records = read("provider-handoffs.json");
const request = read("publication-request.json");
const baseline = read(request.previous_index);
const sorted = (value) =>
  Array.isArray(value) ? value.map(sorted) : value && typeof value === "object"
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, sorted(value[key])])) : value;

test("retirement request is separate from successor admission and binds exact history", () => {
  assert.equal(request.schema_version, 2);
  assert.equal(request.discovery_branch, "marketplace-v2-admin");
  assert.deepEqual(request.publications, []);
  assert.deepEqual(request.provider_handoffs, records);
  assert.equal(records.length, 1);
  const [record] = records;
  assert.equal(record.provider_id, "pi");
  assert.deepEqual(record.from, { publisher: "cadencr", repository: "https://github.com/merkr-software/CadencR" });
  assert.deepEqual(record.to, { publisher: "edjubert", repository: "https://github.com/edjubert/cadencr-plugin-provider-pi" });
  assert.deepEqual(Object.keys(record.retired_versions), ["0.4.0", "0.4.1"]);
  for (const [version, digest] of Object.entries(record.retired_versions)) {
    const old = baseline.signed.packages.find((entry) => entry.kind === "provider" &&
      entry.package.agent.id === "pi" && entry.package.agent.version === version);
    assert.ok(old);
    assert.equal(createHash("sha256").update(JSON.stringify(sorted(old))).digest("hex"), digest);
    // The accepted author metadata and provenance are retained, never deleted.
    assert.equal(read(`packages/pi-${version}.json`).package.host.publisher, "cadencr");
    assert.equal(read(`submissions/pi-${version}.json`).package.package.agent.version, version);
  }
});

test("captured baseline authenticates with the pinned public key through the Rust CLI", {
  skip: !process.env.CADENCR_TEST_CLI && "Set CADENCR_TEST_CLI to a trusted handoff-capable Rust CLI",
}, () => {
  const result = spawnSync(process.env.CADENCR_TEST_CLI, ["registry", "verify-index",
    "--index", request.previous_index, "--public-key", request.public_key,
    "--key-id", request.key_id, "--allow-expired"], { encoding: "utf8" });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
});
