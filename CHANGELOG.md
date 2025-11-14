# Changelog

<!-- <START NEW CHANGELOG ENTRY> -->

## 1.0.4

### Features

- Implemented dual-mode icon sizing system with proportional and fixed modes
- Proportional mode scales icons dynamically with UI font size using `calc(var(--jp-ui-font-size1) * var(--jp-custom-icon-scale))`
- Fixed mode maintains constant icon size via `--jp-custom-icon-fixed-size` CSS variable
- Added flexbox-based vertical alignment for `.jp-DirListing-item`, `.jp-DirListing-itemIcon`, and `.jp-DirListing-itemText`
- Configurable icon scaling multiplier (default: 1.5)
- Compatible with custom icon extensions like jupyterlab_vscode_icons_extension

### Changes

- Updated repository URLs to stellarshenson organization
- Added comprehensive badges (GitHub Actions, npm, PyPI, downloads, JupyterLab 4)
- Improved README with problem statement and technical solution details
- Updated build workflow to match jupyterlab_vscode_icons_extension standards
- Changed Python version in CI from 3.9 to 3.12
- Added link checker ignore patterns for badge URLs
- Removed coverage flag from test script
- Professional tone in documentation without critical language

### Technical Details

- Leverages SVG scalability for crisp rendering at any size
- Icon dimensions scale proportionally: 19.5px at 13px font, 13.5px at 9px font
- CSS-variable based configuration allows runtime adjustment without rebuilding

## 0.6.10

### Initial Development

- Project initialization and basic structure
- Initial CSS fix exploration
- Repository setup and configuration

## 0.6.9

### Iteration

- Version bump during development
- Package configuration updates

## 0.6.8

### Iteration

- Early development iteration
- Dependency installations and tooling setup

<!-- <END NEW CHANGELOG ENTRY> -->
