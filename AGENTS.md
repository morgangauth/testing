# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **test/scratch fixture**, not a runnable application. Key facts for future agents:

- There is **no application code**: the many `test.*` files (e.g. `test.py`, `test.js`, `test.ts`, `test.rs`, `test.ipynb`, ...) are empty placeholders used to exercise file-type handling.
- There are **no dependency manifests** (`package.json`, `requirements.txt`, `go.mod`, `Cargo.toml`, `pom.xml`, `Makefile`, etc.), **no build system**, **no test suite**, and **no lint configuration**.
- There is **nothing to install, build, lint, test, or run**. The update script is intentionally a no-op.
- Content files are sample data only:
  - `results.json` / `results.txt` — captured Sourcegraph search output.
  - `binary.XML` — a sample bookstore XML document.
  - `hello-world.batch.yaml` / `hello-world2.batch.yaml` — Sourcegraph batch-change specs (not executed by this repo).
  - `.idea/` — IntelliJ project metadata.

If real application code is added later, update this section with the actual install/build/test/run commands.
