# Testing

Small repository used for experiments and [Sourcegraph Batch Changes](https://docs.sourcegraph.com/batch_changes). This document covers how to get a local copy and work with the batch specifications in this repo.

## Prerequisites

- [Git](https://git-scm.com/)
- (Optional) [Sourcegraph CLI](https://docs.sourcegraph.com/cli) (`sg` or legacy `src`) if you want to serve or apply the `.batch.yaml` specs against a Sourcegraph instance

## Clone the repository

```bash
git clone https://github.com/morgangauth/testing.git
cd testing
```

To work on an existing feature branch (example):

```bash
git fetch origin cursor/project-setup-readme-1647
git checkout cursor/project-setup-readme-1647
```

## What is in this repo

| Item | Purpose |
| --- | --- |
| `hello-world.batch.yaml` | Example batch spec that matches repositories and appends text to `README.md` files via an Alpine container step |
| `hello-world2.batch.yaml` | Example batch spec that imports changesets from an existing change |
| `test.yaml`, `test.txt` | Scratch / test files |
| `CODEOWNERS` | Default code owner assignments |

There is no application runtime (no `package.json`, `requirements.txt`, or compiled binary to install). After cloning, you can edit the YAML files or batch specs directly.

## Batch Changes (optional)

If you use Sourcegraph Batch Changes:

1. Install and authenticate the CLI per [Sourcegraph documentation](https://docs.sourcegraph.com/batch_changes).
2. From this directory, you can validate or run a spec (exact flags depend on your CLI version), for example:

   ```bash
   # Example; replace with the command your Sourcegraph version documents
   sg batch preview -f hello-world.batch.yaml
   ```

Refer to your organization’s Sourcegraph instance and docs for server URL, permissions, and whether preview/apply commands use `sg batch` or `src batch`.

## Contributing

1. Create a branch from `main`.
2. Make changes and open a pull request.
3. Note any new setup steps here so others can reproduce your workflow.
