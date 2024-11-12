import type { moduleFederationPlugin } from '@module-federation/sdk';

export const mfConfig: moduleFederationPlugin.ModuleFederationPluginOptions = {
  name: 'header',
  exposes: {
    "./Module": "./src/App.tsx",
  }
}