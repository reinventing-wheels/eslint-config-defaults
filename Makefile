PATH := node_modules/.bin:$(PATH)

node_modules: package.json
	npm i && touch $@

release: node_modules
	standard-version -a

.PHONY: release
