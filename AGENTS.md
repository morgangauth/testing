# AGENTS.md

## Cursor Cloud specific instructions

This is a **test/sandbox repository** (`morgangauth/testing`) used for Sourcegraph feature testing (Batch Changes, code search). It does **not** contain a runnable application, build system, or dependency management.

### Repository contents

- **Empty placeholder files**: `test.js`, `test.py`, `test.ts`, `test.rs`, `test.html`, `test.json`, etc. — all 0 bytes, used for file-type filtering tests.
- **Sourcegraph Batch Change specs**: `hello-world.batch.yaml`, `hello-world2.batch.yaml` — Batch Changes configuration targeting `repo:morgangauth/*`.
- **Search results**: `results.json`, `results.txt` — output from Sourcegraph code search queries.
- **Misc**: `README.md` (contains "Hello World"), `CODEOWNERS`, `binary.XML` (sample XML), `.idea/` (JetBrains IDE metadata).

### Development notes

- **No lint, test, or build commands exist.** There is no `package.json`, `Makefile`, `Cargo.toml`, `go.mod`, `requirements.txt`, or CI configuration.
- **No services to start.** There are no backend, frontend, or database services in this tree.
- **No dependencies to install.** The VM update script is a no-op.

### Verifying the environment (hello-world workflow)

The closest thing to an “application” here is the Batch Changes step in `hello-world.batch.yaml`. You can dry-run that step locally without mutating the repo:

```bash
TMP=$(mktemp -d)
cp README.md "$TMP/"
cd "$TMP"
IFS=$'\n'; echo Hello World | tee -a $(find -name README.md)
cat README.md
```

Expect three lines of `Hello World` after the dry-run (the committed `README.md` has two).

Sanity checks:

```bash
python3 -c "import yaml; yaml.safe_load(open('hello-world.batch.yaml'))"
python3 -m json.tool results.json > /dev/null
git status
```

Full Batch Changes or live search against `results.json` require an external **Sourcegraph** instance and **GitHub** credentials; they are not defined in this repository.
