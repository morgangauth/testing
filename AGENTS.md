# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **Sourcegraph / code-intelligence test fixture** ([`morgangauth/testing`](https://github.com/morgangauth/testing)). It is not an application monorepo: there are no dev servers, build targets, `package.json`, Makefile, or CI workflows in-tree.

### What “working” means here

- **No services to start** for local development. Validation is file- and Git-based.
- **Optional external tooling** (not required for basic fixture checks):
  - [Sourcegraph `src` CLI](https://github.com/sourcegraph/src-cli) and a Sourcegraph instance to run `hello-world*.batch.yaml` batch specs.
  - **Docker** only when executing the Alpine container step in `hello-world.batch.yaml`.
  - **GitHub** for remote/changeset flows referenced in batch YAML.

### Quick validation (smoke checks)

From the repo root:

```bash
python3 -c "
import json, pathlib, yaml
root = pathlib.Path('.')
for f in ['hello-world.batch.yaml', 'hello-world2.batch.yaml', 'test.yaml']:
    yaml.safe_load((root / f).read_text())
json.loads((root / 'results.json').read_text())
assert 'Hello World' in (root / 'README.md').read_text()
print('fixture smoke: OK')
"
```

### Lint / test / build

There are **no** configured linters, unit tests, or build scripts. Do not expect `npm test`, `make`, or compose stacks unless added upstream.

### Notable paths

| Path | Role |
|------|------|
| `README.md` | Batch-change target content (“Hello World”) |
| `hello-world.batch.yaml` | Multi-repo batch spec (`repo:morgangauth/*`) |
| `hello-world2.batch.yaml` | Import changesets from this repo |
| `results.json` / `results.txt` | Example Sourcegraph search output |
| `CODEOWNERS` | Ownership rule fixture |
| `test.*` | Empty or stub files for indexing / language detection |

### Dependencies

- `yarn.lock` is empty and there is **no** `package.json`; `node_modules/` is not part of a runnable Node app.
- System **Python 3** with **PyYAML** is sufficient for YAML fixture validation on typical cloud VMs.
