#!/usr/bin/env bash
# Idempotent bootstrap for the scratch/data repository.
#
# This repo has no build system or long-running services; it is a collection of
# structured-data and config files (JSON, XML, YAML) plus placeholder fixtures.
# The "development experience" here is validating those files, so this script
# only installs a small, pinned set of YAML tools into the user site-packages.
set -euo pipefail

cd "$(dirname "$0")/.."

# Ubuntu's system Python is PEP 668 "externally managed"; install into the
# user site with --break-system-packages so no venv/apt/sudo is required.
python3 -m pip install --user --break-system-packages --quiet --upgrade pip
python3 -m pip install --user --break-system-packages --quiet "pyyaml==6.0.2" "yamllint==1.35.1"

echo "--- Toolchain ---"
echo "python:   $(python3 --version 2>&1)"
echo "pyyaml:   $(python3 -c 'import yaml; print(yaml.__version__)')"
echo "yamllint: $(python3 -m yamllint --version)"
echo "node:     $(node --version 2>/dev/null || echo 'n/a')"
echo "install complete"
