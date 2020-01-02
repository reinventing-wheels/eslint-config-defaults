For JS projects:
```sh
npm install -D eslint \
  reinventing-wheels/eslint-config-defaults

echo extends: defaults > .eslintrc.yml
```

For TS projects:
```sh
npm install -D eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  reinventing-wheels/eslint-config-defaults

echo extends: defaults/ts > .eslintrc.yml
```
