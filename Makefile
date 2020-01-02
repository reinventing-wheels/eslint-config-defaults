PATH := node_modules/.bin:$(PATH)

lint: node_modules
	eslint js ts

release: lint
	standard-version -a

node_modules: package.json
	npm i && touch $@

.PHONY: lint release
