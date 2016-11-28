# Lerna demo

This is a test repo, which aims to explore using `lerna` to publish multiple packages. Specifically, it explores how to set up organizational standards for a base `babel` preset and `eslint` config.

# Publishing

```
yarn run publish
```

# Approach

 * `babel-preset-*` base babel config for all development
 * `eslint-config-*` base eslint config, with a few rules that everyone can agree on
 * `eslint-config-*-strict` ideal base eslint config, which extends the basic one. As the organization adopts more linting patterns across teams, the base linting config can be phased out.