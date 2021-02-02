# cra-template-vaa

This is the VAA TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

## Notice

create-react-app is no longer a global package. To ensure that npx or yarn always uses the latest create-react-app version, run:
`npm uninstall -g create-react-app`

You might have to change "jsx": "react-jsx" to "jsx": "react" manually in tsconfig.json if you're having issues.

## Usage

To use this template, add `--template vaa` when creating a new app.

For example:

```sh
npx create-react-app my-app --template vaa

# or

yarn create react-app my-app --template vaa
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
- [Ant Design components](https://ant.design/components/button/) - For components you can immediately use. This project is set up with Ant Design preconfigured.
