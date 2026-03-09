## Cursor Cloud specific instructions

This is a minimal test/scratch repository with no application code, build system, or runnable services.

### Repository contents

- **Sourcegraph Batch Change specs**: `hello-world.batch.yaml`, `hello-world2.batch.yaml` — these are Sourcegraph batch change definitions targeting `morgangauth/*` repos.
- **Sample data files**: `binary.XML` (bookstore XML), `results.json` / `results.txt` (Sourcegraph search output).
- **Empty test files**: Various `test.*` files (`.js`, `.py`, `.ts`, `.rs`, `.html`, etc.) — all 0 bytes, used for file-type testing.
- **Docs**: `README.md` ("Hello World"), `newbranch.md`, `CODEOWNERS`.

### Development environment

- No dependencies to install (no `package.json`, `requirements.txt`, `Makefile`, etc.).
- No lint, test, or build commands are applicable.
- No services to start.
- YAML validation can be done with `python3 -c "import yaml; yaml.safe_load(open('hello-world.batch.yaml'))"` if needed.
