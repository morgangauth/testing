# AGENTS.md

## Cursor Cloud specific instructions

This is a **test/sandbox repository** (`morgangauth/testing`) used for Sourcegraph feature testing (Batch Changes, code search). It does **not** contain a runnable application, build system, or dependency management.

### Repository contents

- **Empty placeholder files**: `test.js`, `test.py`, `test.ts`, `test.rs`, `test.html`, `test.json`, etc. — all 0 bytes, used for file-type filtering tests.
- **Sourcegraph Batch Change specs**: `hello-world.batch.yaml`, `hello-world2.batch.yaml` — Batch Changes configuration targeting `repo:morgangauth/*`.
- **Search results**: `results.json`, `results.txt` — output from Sourcegraph code search queries.
- **Misc**: `README.md` (contains "Hello World"), `CODEOWNERS`, `binary.XML` (sample XML), `.idea/` (JetBrains metadata).

### Development notes

- **No lint, test, or build commands exist.** There is no `package.json`, `Makefile`, `Cargo.toml`, `go.mod`, `requirements.txt`, or any other build/dependency file.
- **No services to start.** There are no backend, frontend, or database services.
- **No dependencies to install.** The update script is a no-op (`echo "No dependencies to install"`).
