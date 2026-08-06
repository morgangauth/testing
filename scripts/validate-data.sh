#!/usr/bin/env bash
# End-to-end check for this data/config repo: parse and validate every
# structured file that carries real content (JSON, XML, YAML). Placeholder
# and zero-byte fixtures are skipped. Exits non-zero if any file fails to parse.
set -euo pipefail

cd "$(dirname "$0")/.."

# Use the system Python; YAML tooling is installed into the user site by
# .cursor/install.sh.
PY=python3

fail=0

check_json() {
  local f="$1"
  if $PY -c "import json,sys; json.load(open(sys.argv[1]))" "$f"; then
    echo "OK   json  $f"
  else
    echo "FAIL json  $f"; fail=1
  fi
}

check_xml() {
  local f="$1"
  if $PY -c "import xml.dom.minidom,sys; xml.dom.minidom.parse(sys.argv[1])" "$f"; then
    echo "OK   xml   $f"
  else
    echo "FAIL xml   $f"; fail=1
  fi
}

check_yaml() {
  local f="$1"
  if $PY -c "import yaml,sys; list(yaml.safe_load_all(open(sys.argv[1])))" "$f"; then
    echo "OK   yaml  $f"
  else
    echo "FAIL yaml  $f"; fail=1
  fi
}

echo "=== Validating structured data files ==="

# Only validate files that actually contain content (skip empty placeholders).
while IFS= read -r -d '' f; do
  [ -s "$f" ] || continue
  case "$f" in
    ./.venv/*|./.git/*) continue ;;
  esac
  case "$f" in
    *.json)  check_json "$f" ;;
    *.xml|*.XML) check_xml "$f" ;;
    *.yaml|*.yml) check_yaml "$f" ;;
  esac
done < <(find . -type f \( -name '*.json' -o -iname '*.xml' -o -name '*.yaml' -o -name '*.yml' \) -print0)

echo "=== Done ==="
if [ "$fail" -ne 0 ]; then
  echo "Validation FAILED"
  exit 1
fi
echo "All structured data files parsed successfully."
