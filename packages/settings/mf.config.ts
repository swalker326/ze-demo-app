import type { moduleFederationPlugin } from '@module-federation/sdk';

export const mfConfig: moduleFederationPlugin.ModuleFederationPluginOptions = {
  name: 'settings',
  filename: 'remoteEntry.js',
  async: true,
  exposes: {
    './Module': './src/App.tsx',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
};