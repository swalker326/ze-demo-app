import type { moduleFederationPlugin } from '@module-federation/sdk';

export const mfConfig: moduleFederationPlugin.ModuleFederationPluginOptions = {
  name: 'header',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/Header.tsx',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
};