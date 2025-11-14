import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_change_ui_font_size_fix extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_change_ui_font_size_fix:plugin',
  description: 'Jupyterlab fix disguised as extension, to fix issue with changes to the UI font size, where file navigator item names get misaligned with icons',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_change_ui_font_size_fix is activated!');
  }
};

export default plugin;
