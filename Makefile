.PHONY: dist build
install:
	#@npm install
	yarn install

dev: install
	#@npm run dev
	@yarn run dev

build:
	#@npm run build
	@yarn run build
