# AGENTS.md

## Cursor Cloud specific instructions

This is a personal test/scratch repository (`morgangauth/testing`) used for experimenting with Sourcegraph features (batch changes, code search) and GitHub features (CODEOWNERS, pull requests).

**There is no application, build system, test framework, linter, or dependency manager in this repository.**

- All `test.*` files are 0-byte empty placeholders created to test file-type detection or tooling behavior.
- `hello-world.batch.yaml` and `hello-world2.batch.yaml` are Sourcegraph Batch Changes specs (require Sourcegraph CLI `src` to execute, targeting `morgangauth/*` repos).
- `results.json` / `results.txt` contain output from Sourcegraph code search queries.
- `binary.XML` is a sample bookstore XML document.
- No services need to be started. No dependencies need to be installed.
- The update script is a no-op (`echo "No dependencies to install"`).
