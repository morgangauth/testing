# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **scratch / test playground**, not a deployable application.
Future agents should not expect a build system, package manager, or service to run.

Key facts (verified during environment setup):

- **No application code.** All source-extension files (`test.js`, `test.ts`, `test.py`,
  `test.rs`, `test.html`, `test.ipynb`, `test.json`, etc.) are empty 0-byte placeholders.
- **No dependency manifest or lockfile** (no `package.json`, `requirements.txt`,
  `go.mod`, `Cargo.toml`, `pom.xml`, etc.), so there is nothing to install. The
  startup/update script is intentionally a no-op.
- **No lint, test, or build commands** are defined. There is no CI config in-repo.
- **Substantive content is data / specs only:**
  - `binary.XML`, `results.json`, `results.txt` — sample data / search output.
  - `hello-world.batch.yaml`, `hello-world2.batch.yaml` — Sourcegraph `src batch`
    change specs. Actually executing them requires the external `src` CLI plus a
    Sourcegraph instance + auth token; they cannot be "run" from this repo alone.
    Their core transform step (`echo Hello World | tee -a $(find -name README.md)`)
    is a plain shell command and can be exercised directly against a temp copy.

If you need to "demonstrate the environment," run the batch spec's shell transform
against throwaway files (not the tracked ones) — that is the repo's only real
functionality.
