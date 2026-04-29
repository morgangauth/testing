# workspace

A multi-language test repository containing sample files for various languages and formats.

## Prerequisites

Ensure you have the following installed before getting started:

- [Git](https://git-scm.com/) 2.x or later
- [Python](https://www.python.org/downloads/) 3.8 or later (for `.py` files)
- [Node.js](https://nodejs.org/) 18 or later and npm (for `.js` / `.ts` files)
- [Rust](https://www.rust-lang.org/tools/install) 1.70 or later (for `.rs` files)

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd workspace
```

### 2. Python

No external dependencies are required for the Python sample files. If you add packages in the future, install them with:

```bash
pip install -r requirements.txt
```

### 3. Node.js / TypeScript

If a `package.json` is present, install dependencies with:

```bash
npm install
```

To run a TypeScript file directly (requires `ts-node`):

```bash
npx ts-node test.ts
```

### 4. Rust

Compile and run the Rust sample:

```bash
rustc test.rs -o test_bin
./test_bin
```

### 5. Environment variables

Copy the provided template and fill in the required values:

```bash
cp test.env .env
```

Edit `.env` with your local configuration before running any scripts.

## Repository structure

| File / Directory | Description |
|---|---|
| `test.py` | Python sample |
| `test.js` | JavaScript sample |
| `test.ts` | TypeScript sample |
| `test.rs` | Rust sample |
| `test.yaml` | YAML configuration sample |
| `test.json` | JSON data sample |
| `test.xml.template` | XML template sample |
| `test.properties.template` | Properties file template |
| `test.ipynb` | Jupyter notebook sample |
| `test.html` | HTML sample |
| `test.env` | Environment variable template |
| `hello-world.batch.yaml` | Sourcegraph batch change spec |
| `CODEOWNERS` | Repository ownership rules |

## Batch changes

The `hello-world.batch.yaml` and `hello-world2.batch.yaml` files are [Sourcegraph Batch Changes](https://docs.sourcegraph.com/batch_changes) specs. To run a batch change:

1. Install the [Sourcegraph CLI (`src`)](https://docs.sourcegraph.com/cli)
2. Authenticate: `src login`
3. Preview the change: `src batch preview -f hello-world.batch.yaml`
4. Apply the change: `src batch apply -f hello-world.batch.yaml`

## Code ownership

Ownership is defined in [`CODEOWNERS`](./CODEOWNERS). All files default to `@morgangauth`; Markdown files are additionally owned by `@test5`.
