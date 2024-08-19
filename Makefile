#
# gloab variables
#

OUT_DIR = lib
BASE_DIR = src
TEST_DIR = tests

#
# targets
#

install:
	@echo "\n> Installing dependecies..."
	@bun install --loglevel=error
	@echo "[ok] Installation completed.\n"

build:
	@echo "\n> Compilation..."
	@rm -rf $(OUT_DIR)
	@make formatting type-check
	@npx tsc --build tsconfig.build.json
	@npx tsc-alias -p tsconfig.build.json
	@make copy-npm copy-dts
	@echo "\n[ok] Compilation completed.\n"
.PHONY: build

copy-npm:
	@cp package.json $(OUT_DIR)
	@cp README.md $(OUT_DIR)
	@cp LICENSE $(OUT_DIR)
.PHONY: copy-npm

copy-dts:
	@find ./$(BASE_DIR) -name '*.d.ts' -exec cp -prv '{}' 'lib' ';'
.PHONY: copy-dts

publishing:
	@echo "\n> Publishing..."
	@make build
	@cd ./$(OUT_DIR) && npm publish --no-interaction
	@echo "[ok] Publishing completed.\n"
.PHONY: publishing

formatting:
	@echo "\n> Formatting..."
	@npx prettier --write --log-level error --list-different .
	@echo "[ok] Formatting completed.\n"
.PHONY: formatting

type-check:
	@npx tsc -p tsconfig.typecheck.json
.PHONY: type-check

test:
	@echo "> Testing...\n"
	@make type-check
	@bun test
	@echo "\n[ok] Testing completed.\n"
.PHONY: test

docs:
	@touch docs.md
	@npx documentation build src/** -f md --markdown-toc-max-depth 2 --shallow > docs.md
.PHONY: docs
