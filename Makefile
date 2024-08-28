#
# gloab variables
#

OUT_DIR = lib

#
# targets
#

install:
	@echo "\n> Installing dependecies..."
	@npm ci --loglevel=error
	@echo "[ok] Installation completed.\n"

dev:
	@echo "\n> Running tests in watch mode..."
	@npx vitest
.PHONY: dev

build:
	@echo "\n> Compilation..."
	@npx tsc
	@echo "\n[ok] Compilation completed.\n"
.PHONY: build

ci:
	@echo "\n> CI..."
	@rm -rf $(OUT_DIR)
	@make format-checking test build exports-checking
	@make copy-npm
	@echo "\n[ok] CI completed.\n"
.PHONY: ci

copy-npm:
	@cp package.json $(OUT_DIR)
	@cp README.md $(OUT_DIR)
	@cp LICENSE $(OUT_DIR)
.PHONY: copy-npm

changeset:
	@npx changeset add
.PHONY: local-release

local-release:
	@echo "\n Releasing..."
	@make ci
	@npx changeset version
	@npx changeset publish
	@echo "[ok] The package has been released."
.PHONY: local-release

formatting:
	@echo "\n> Formatting..."
	@npx prettier --write --log-level error --list-different .
	@echo "[ok] Formatting completed.\n"
.PHONY: formatting

format-checking:
	@npx prettier --check .
	@echo "[ok] Checking formatting completed.\n"
.PHONY: format-checking

exports-checking:
	@echo "\n> Exports checking..."
	@npx attw . --pack --no-emoji --ignore-rules cjs-resolves-to-esm
	@echo "\n[ok] Checking exports completed.\n"
.PHONY: exports-checking

test:
	@echo "> Testing...\n"
	@npx vitest run
	@echo "\n[ok] Testing completed.\n"
.PHONY: test

docs:
	@touch docs.md
	@npx documentation build src/** -f md --markdown-toc-max-depth 2 --shallow > docs.md
.PHONY: docs
