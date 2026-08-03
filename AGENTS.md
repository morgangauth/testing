# AGENTS.md

## Cursor Cloud specific instructions

### What this repository is

This is a **scratch / test repository**, not a runnable software application. It
holds test data and experiments for Sourcegraph `src-cli` **Batch Changes**:

- `hello-world.batch.yaml`, `hello-world2.batch.yaml` — Sourcegraph batch change
  spec files (the repo's only "functional" artifacts).
- `results.json`, `results.txt` — captured output from a Sourcegraph `src search`
  run.
- `binary.XML`, `test.yaml`, `README.md`, `CODEOWNERS`, `newbranch.md` — sample
  data / text files.
- `test.*` (e.g. `test.py`, `test.js`, `test.ts`, `test.rs`, ...) — **empty
  placeholder files** (0 bytes). They contain no code.
- `.idea/` — JetBrains IDE project metadata.

There is **no** dependency manifest (no `package.json`, `requirements.txt`,
`go.mod`, `pom.xml`, `Makefile`, etc.), **no source code**, **no build system**,
**no test suite**, and **no lint configuration**. Consequently there is nothing
to build, no tests to run, and no linter to invoke for this repo.

### Environment / tooling

The base image already provides everything needed to inspect the content here;
nothing from the repo needs installing:

- `node` (v22), `python3` (3.12), `go` (1.22), `jq`, `xmllint` are preinstalled.
- The **update script is intentionally a no-op** — there are no repo dependencies
  to refresh.

### Validating the content (the closest thing to "tests" here)

- YAML: `python3 -c "import yaml; yaml.safe_load(open('hello-world.batch.yaml'))"`
- XML: `xmllint --noout binary.XML`
- JSON: `jq -e . results.json`

### Working with the batch specs (`src-cli`)

The `*.batch.yaml` files are consumed by Sourcegraph's `src` CLI. To get the
tool, download the prebuilt static binary (external, optional — do NOT put this
in the startup/update script, since it fetches from the network and is not a repo
dependency):

```
curl -sL https://sourcegraph.com/.api/src-cli/src_linux_amd64 -o /usr/local/bin/src && chmod +x /usr/local/bin/src
```

Note: `go install github.com/sourcegraph/src-cli/cmd/src@latest` **fails** because
the module's `go.mod` uses `replace` directives — use the prebuilt binary above.

**Gotcha:** `src batch validate` / `preview` / `apply` are **not** local
operations. They query a Sourcegraph instance and require a **licensed** server
plus `SRC_ENDPOINT` and `SRC_ACCESS_TOKEN`. Against the public `sourcegraph.com`
instance (the default) they fail with GraphQL errors like
`Cannot query field "batchChanges"`. Running the batch-change flow end to end
requires those external credentials, which are not available in this environment.

The actual *work* a batch change performs is the `steps[].run` shell command. For
`hello-world.batch.yaml` that is simply appending `Hello World` to every
`README.md`, which can be exercised locally without a server:

```
echo Hello World | tee -a $(find -name README.md)
```
