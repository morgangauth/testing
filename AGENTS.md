# AGENTS.md

## Cursor Cloud specific instructions

This repository (`morgangauth/testing`) is a **static fixture repo** for Sourcegraph search, Batch Changes, and GitHub workflows. It is **not** an application monorepo: there is no `package.json`, `go.mod`, Docker Compose stack, or dev server to start.

### What “running” the product means here

| Goal | What to do |
|------|------------|
| Local content / git checks | Use `git` and inspect files at repo root (`README.md`, `hello-world*.batch.yaml`, `results.json`, etc.). |
| Validate batch specs locally | Parse/lint YAML (see commands below). Full Batch Change execution requires **Sourcegraph**, the **`src` CLI**, credentials, and a **container runtime** (see `hello-world.batch.yaml` `container: alpine:3`). |
| Reproduce search fixtures | `results.json` / `results.txt` were captured from `https://cse-k8s.sgdev.org`; optional unless you are testing search integration. |

### Lint and validation (no in-repo npm/Makefile targets)

There are **no** committed unit tests or CI workflows. Reasonable local checks:

```bash
export PATH="$HOME/.local/bin:$PATH"
yamllint hello-world.batch.yaml hello-world2.batch.yaml test.yaml
python3 -c "
import json, yaml
for p in ['hello-world.batch.yaml','hello-world2.batch.yaml','test.yaml']:
    yaml.safe_load(open(p))
json.load(open('results.json'))
print('OK')
"
```

`yamllint` may report style warnings on fixture files; structural validation is the `yaml.safe_load` / `json.load` step.

### Batch step dry-run (without Sourcegraph)

To exercise the README append logic from `hello-world.batch.yaml` without mutating this repo, run the `steps.run` command in a temporary directory that contains sample `README.md` files (same `find` + `tee` pattern as the batch spec).

### Services

- **Must run for default agent work:** none (git + file tools only).
- **Must run for full Batch Change E2E:** Sourcegraph instance, `src` CLI, container runtime, GitHub remote access.
- **Optional:** JetBrains `.idea` metadata is editor-only.

### Gotchas

- Do not expect `npm run dev`, `make test`, or similar; they are not defined in this repo.
- `hello-world2.batch.yaml` uses `importChangesets` against `github.com/morgangauth/testing` and is not self-contained offline.
- Cloud Agent VMs may not have Docker available; use a temp-dir shell simulation for the batch `run` step when Docker is missing.
