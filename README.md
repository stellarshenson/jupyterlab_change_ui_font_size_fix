# jupyterlab_change_ui_font_size_fix

[![Github Actions Status](https://github.com/stellarshenson/jupyterlab_change_ui_font_size_fix/actions/workflows/build.yml/badge.svg)](https://github.com/stellarshenson/jupyterlab_change_ui_font_size_fix/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/jupyterlab_change_ui_font_size_fix.svg)](https://www.npmjs.com/package/jupyterlab_change_ui_font_size_fix)
[![PyPI version](https://img.shields.io/pypi/v/jupyterlab_change_ui_font_size_fix.svg)](https://pypi.org/project/jupyterlab_change_ui_font_size_fix/)
[![Total PyPI downloads](https://static.pepy.tech/badge/jupyterlab_change_ui_font_size_fix)](https://pepy.tech/project/jupyterlab_change_ui_font_size_fix)
[![JupyterLab 4](https://img.shields.io/badge/JupyterLab-4-orange.svg)](https://jupyterlab.readthedocs.io/en/stable/)

A JupyterLab extension that fixes file browser alignment when changing UI font size. Icons and text stay properly aligned across all font sizes.

> [!WARNING]
> This extension is a temporary fix and will be deprecated once JupyterLab core implements proper icon scaling. We plan to submit a PR to the main JupyterLab repository to address this issue natively. Once accepted and released, this extension will no longer be necessary.

## The Problem We're Solving

When you change JupyterLab's UI font size, the file browser can show alignment issues. Icons floating in space, text misaligned, the interface looking somewhat off. This extension fixes that alignment problem.

When text scales but icons stay at fixed 20px dimensions, vertical alignment breaks down.

## Features

This extension provides two icon sizing modes for maximum flexibility:

**Proportional Mode** (default) - Icons scale with your font size automatically
- Icons maintain consistent proportion to text at any font size
- Configurable scaling multiplier via `--jp-custom-icon-scale` (default: 1.5)
- At 13px font: icons are ~19.5px, at 9px font: icons are 13.5px
- Leverages SVG scalability for crisp rendering at any size

**Fixed Mode** - Keep icons at constant size while text scales independently
- Useful when you want smaller text but familiar icon dimensions
- Configurable via `--jp-custom-icon-fixed-size` (default: 20px)
- Standard sizes: 16px, 18px, 20px, 24px, 32px

Both modes include flexbox-based vertical alignment to ensure icons and text stay properly centered regardless of sizing choices.

This extension works well with custom icon extensions like [jupyterlab_vscode_icons_extension](https://github.com/stellarshenson/jupyterlab_vscode_icons_extension), maintaining proper alignment with VSCode-style icons across all font sizes.

## Problem Statement and Solution

**Problem**: JupyterLab's file browser uses fixed 20px icon dimensions while text size scales via the `--jp-ui-font-size1` CSS variable (default 13px). When users adjust UI font size, icons remain static while text shrinks or grows, breaking vertical alignment. At 9px font size, the misalignment becomes severe with icons appearing significantly larger than text and floating off-center.

**Solution**: This extension implements dynamic icon sizing using `calc(var(--jp-ui-font-size1) * var(--jp-custom-icon-scale))` for proportional mode or fixed pixel values via `--jp-custom-icon-fixed-size` for fixed mode. Combined with flexbox alignment (display: flex, align-items: center) applied to `.jp-DirListing-item`, `.jp-DirListing-itemIcon`, and `.jp-DirListing-itemText` selectors, icons and text maintain proper vertical centering across all font sizes. SVG icons scale cleanly at any dimension without quality loss.

## Configuration

Customize icon sizing through JupyterLab's Custom CSS settings (Settings > Advanced Settings Editor > Custom CSS):

**Proportional mode with custom scaling:**
```css
:root {
  --jp-custom-icon-mode: proportional;
  --jp-custom-icon-scale: 1.2;  /* Smaller icons (1.2x font size) */
}
```

**Fixed mode at 16px:**
```css
:root {
  --jp-custom-icon-mode: fixed;
  --jp-custom-icon-fixed-size: 16px;
}
```

**Proportional mode with larger icons:**
```css
:root {
  --jp-custom-icon-scale: 2.0;  /* Icons 2x the font size */
}
```

The extension uses CSS variables for configuration, making adjustments straightforward without rebuilding or restarting JupyterLab.

## Requirements

- JupyterLab >= 4.0.0

## Installation

```bash
pip install jupyterlab_change_ui_font_size_fix
```

## Uninstall

```bash
pip uninstall jupyterlab_change_ui_font_size_fix
```
