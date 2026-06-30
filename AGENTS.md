# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **sandbox / test repository**, not a runnable software
project. It contains sample/test data and configuration files, with no
application source code to build, run, or test.

What's here:

- `README.md` — placeholder ("Hello World").
- `*.batch.yaml` — Sourcegraph batch change spec examples (not executed in this repo).
- `results.json` / `results.txt` — captured Sourcegraph search output (sample data).
- `binary.XML` — a sample XML document (a small "bookstore").
- Many empty placeholder files (`test.py`, `test.js`, `test.ts`, `test.rs`, ...) used
  to exercise file-type handling. They are intentionally empty.

What is NOT here (so don't go looking for it):

- No dependency manifest (`package.json`, `requirements.txt`, `go.mod`, `Cargo.toml`,
  `pom.xml`, `Makefile`, etc.).
- No build system, no lint config, no automated tests, and no services/servers to run.

### Setup / run / lint / test

There is nothing to install, build, lint, or test. The startup update script is a
no-op by design. The VM provides standard runtimes (Python 3.12, Node 22) if you need
to ad-hoc process the sample data files.

Note: a previously configured environment install step ran `yarn`, which (with no
`package.json`) just creates an empty `node_modules/` and `yarn.lock`. These are
generated artifacts — do not commit them.
