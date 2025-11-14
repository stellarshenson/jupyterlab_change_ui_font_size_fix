# jupyterlab_change_ui_font_size_fix

[![Github Actions Status](/workflows/Build/badge.svg)](/actions/workflows/build.yml)

Jupyterlab fix disguised as extension, to fix issue with changes to the UI font size, where file navigator item names get misaligned with icons

## Features

This extension provides two icon sizing modes for the file browser:

**Proportional Mode** (default) - Icons scale automatically with UI font size changes
- Icons maintain consistent proportion to text at any font size
- Configurable scaling multiplier via `--jp-custom-icon-scale` (default: 1.5)
- Examples: 1.0 = same as font size, 2.0 = 2x font size

**Fixed Mode** - Icons stay at a constant pixel size regardless of font size
- Useful for maintaining familiar icon sizes while adjusting text
- Configurable via `--jp-custom-icon-fixed-size` (default: 20px)
- Examples: 16px, 20px, 24px, 32px

## Configuration

You can customize icon sizing by adding CSS overrides to your JupyterLab settings. Go to Settings > Advanced Settings Editor > Custom CSS and add:

### Proportional Mode (default)
```css
:root {
  --jp-custom-icon-mode: proportional;
  --jp-custom-icon-scale: 1.5;  /* Adjust multiplier as needed */
}
```

### Fixed Mode
```css
:root {
  --jp-custom-icon-mode: fixed;
  --jp-custom-icon-fixed-size: 20px;  /* Adjust pixel size as needed */
}
```

### Example Configurations

**Smaller proportional icons** (icon = 1.2x font size):
```css
:root {
  --jp-custom-icon-scale: 1.2;
}
```

**Larger proportional icons** (icon = 2x font size):
```css
:root {
  --jp-custom-icon-scale: 2.0;
}
```

**Fixed 16px icons**:
```css
:root {
  --jp-custom-icon-mode: fixed;
  --jp-custom-icon-fixed-size: 16px;
}
```

**Fixed 24px icons**:
```css
:root {
  --jp-custom-icon-mode: fixed;
  --jp-custom-icon-fixed-size: 24px;
}
```

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_change_ui_font_size_fix
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_change_ui_font_size_fix
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_change_ui_font_size_fix directory

# Set up a virtual environment and install package in development mode
python -m venv .venv
source .venv/bin/activate
pip install --editable "."

# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite

# Rebuild extension Typescript source after making changes
# IMPORTANT: Unlike the steps above which are performed only once, do this step
# every time you make a change.
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_change_ui_font_size_fix
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab_change_ui_font_size_fix` within that folder.

### Testing the extension

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.

### Packaging the extension

See [RELEASE](RELEASE.md)
