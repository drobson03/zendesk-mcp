#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."
work_dir=$(mktemp -d)
trap 'rm -rf "$work_dir"' EXIT

curl --fail --silent --show-error --location https://developer.zendesk.com/zendesk/oas.yaml -o "$work_dir/openapi.yaml"
# rc.117 cannot parse compact nested YAML sequences in Zendesk's spec.
# Convert syntax only; all schema changes are handled by openapigen --patch.
pnpm exec yaml --json --single --strict < "$work_dir/openapi.yaml" > "$work_dir/openapi.json"
if ! pnpm exec openapigen --spec "$work_dir/openapi.json" --patch scripts/openapi.patch.json > "$work_dir/Generated.ts"; then
  cat "$work_dir/Generated.ts" >&2
  exit 1
fi
pnpm exec biome format --files-max-size=5000000 --stdin-file-path=src/Generated.ts < "$work_dir/Generated.ts" > "$work_dir/Formatted.ts"
test -s "$work_dir/Formatted.ts"
cp "$work_dir/Formatted.ts" src/Generated.ts
