# Test React Package

## Goal

This repository provides a boilerplate for developing react libraries.

It uses the following technologies
- Webpack for bundling
- Babel for transpiling
- Jest for testing
- NextJS as React host framework
- `mini-css-extract-plugin` as 'css bundler'

## Structure

```
|-- host/    <- provides a react server for live-testing the library
|-- src/     <- recommended libary structure
    |-- __example__/    -> provide example components, which can be used during development
        |-- index.js    -> always use index.js files as interfaces for the library consumer
    |-- __tests__/
    |-- .../
    |-- index.js        -> library interface
|-- dist/
|-- ...    
```

To sum up, there should be two possible entrypoints for the library consumer:
1. All modules used in production should only be accessible via `src/index.js`
2. In some cases example-components for showcasing can be accessible via `src/__example__/index.js`  
   (Though they are initially intended for usage during library development/showcasing)

## Usage

### Development

Use _Behavior Driven Development_ during development (`yarn dev`)

### Host

To live test the library, you can use following options:

#### Yarn Link

1. Execute `yarn link` in the root directory
2. Execute the provided command (`yarn link <package>`) in `host/`

#### Symlink

Or symlink src/ into the example-framework to retain the initial NextJS compilation speed:  
`ln -s <src>/ <symlinked-folder-name>`  
But remember to design the library interface abstract, so that nothing changes for the imports
but the import-path (by exporting all components etc. via `src/index.js`)

#### Self-host

_Not implemented!_

Also consider to spin up a custom React server via webpack-dev-server.
See [this tutorial](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
for more info.

## Git

### Commit Messages

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
- Follow [Angular types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
  - additionally
    - devenv: Changes that affect the development environment. So everything regarding the React
    server setup for live-'testing' or viewing the library

### Branch names

`<type>--<description>`

Start the description with a verb if possible.

## Notes

### `react` as dev-& peer-dependency

Also add `react` as a dev-dependency alongside the peer-dependency in the library. 
Because otherwise NextJS throws the error `Module not found: Can't resolve 'react'`

## Library Guidelines

### CSS

In the library you can use css-modules. CSS will be built into a separate file, which has to be 
included separately in the library host.  
In NextJS fe. this is done as `import '@pmirau/<package-name>/dist/main.css` in `_app.js`.

Try to develop the library with dynamic css:  
Use css variables to make the library customizable. In the library you can use a 
`src/styles/_variables.scss` which all components will rely on by 
`@use '<relative-path-to>/styles/variables';`.  
in `_variables.css` use _CSS custom properties_, which can be overridden by the library consumer.

To override in the library consumer, use following pattern:  
1. Import the css-file **once** globally (fe. in `_app.js` in NextJS)
2. Create a separate scss-file in the consumer, only for overriding the library styles:  
  Fe. as `<consumer-root>/src/styles/<library-package>.scss`
3. Override the _CSS custom properties_
