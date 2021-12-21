# Test React Package

## Usage

### Yarn Link

TODO: Document 'yarn link'

### Symlink

Or symlink src/ into the example-framework to retain the initial NextJS compilation speed:  
`ln -s <src>/ <symlinked-folder-name>`  
But remember to design the library interface abstract, so that nothing changes for the imports
but the import-path (by exporting all components etc. via `src/index.js`)

### Self-host

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
