import type { moduleFederationPlugin } from '@module-federation/sdk';

export const mfConfig: moduleFederationPlugin.ModuleFederationPluginOptions = {
  name: 'settings',
  exposes: {
    './Module': './src/App.tsx',
  },
};