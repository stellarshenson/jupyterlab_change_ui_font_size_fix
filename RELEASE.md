# Release Information

**Current Version**: 1.0.4 (STABLE_1.0.4)

## Features

- Dual-mode icon sizing system (proportional and fixed modes)
- Proportional mode scales icons dynamically with UI font size using `calc(var(--jp-ui-font-size1) * var(--jp-custom-icon-scale))`
- Fixed mode maintains constant icon size via `--jp-custom-icon-fixed-size` CSS variable
- Flexbox-based vertical alignment for proper icon-text centering at all font sizes
- Configurable icon scaling multiplier (default: 1.5)
- Compatible with custom icon extensions like jupyterlab_vscode_icons_extension
- CSS-variable based configuration allows runtime adjustment without rebuilding
- Leverages SVG scalability for crisp rendering at any size

## Changes

- Updated repository URLs to stellarshenson organization
- Added comprehensive badges (GitHub Actions, npm, PyPI, downloads, JupyterLab 4)
- Improved README with problem statement and technical solution details
- Updated build workflow to match jupyterlab_vscode_icons_extension standards
- Changed Python version in CI from 3.9 to 3.12
- Added link checker ignore patterns for badge URLs
- Removed coverage flag from test script
- Professional tone in documentation

See [CHANGELOG.md](CHANGELOG.md) for complete version history.
