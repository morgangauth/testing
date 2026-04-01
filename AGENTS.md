# AGENTS.md

## Cursor Cloud specific instructions

This is a test/sandbox repository (originally used for Sourcegraph batch change testing). It contains no application code, no build system, no package manager, and no services.

### Repository contents
- Empty placeholder files in various languages/formats (`test.py`, `test.js`, `test.ts`, `test.rs`, etc. — all 0 bytes)
- Sourcegraph batch change specs (`hello-world.batch.yaml`, `hello-world2.batch.yaml`)
- Cached Sourcegraph search results (`results.json`, `results.txt`)
- A `README.md` with "Hello World"

### Development notes
- **No dependencies to install** — there is no `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`, or any other dependency file.
- **No services to run** — there is no backend, frontend, database, or any runnable application.
- **No tests to execute** — there is no test framework configured.
- **No build step** — there is no build system.
- **No lint checks** — there are no linter configurations.

If actual application code is added to this repository in the future, this file should be updated with the relevant setup and run instructions.
