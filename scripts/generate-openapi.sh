#!/usr/bin/env bash

mkdir -p tmp

SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

curl https://developer.zendesk.com/zendesk/oas.yaml -Lo tmp/openapi.yaml

git apply $SCRIPT_DIR/openapi.patch

echo "/**
 * @since 0.0.0
 */

 // biome-ignore-all lint/suspicious/noExplicitAny: required
 // biome-ignore-all lint/style/noNonNullAssertion: required
 // biome-ignore-all lint/correctness/noUnusedFunctionParameters: required
 // biome-ignore-all lint/complexity/useLiteralKeys: required
 // biome-ignore-all lint/nursery/useSingleJsDocAsterisk: required
 // biome-ignore-all lint/style/useFilenamingConvention: required" > src/Generated.ts

pnpm openapi-gen -s tmp/openapi.yaml >> src/Generated.ts

git apply $SCRIPT_DIR/generated.patch

pnpm biome format src/Generated.ts --write
pnpm biome check src/Generated.ts --write

rm -r tmp
