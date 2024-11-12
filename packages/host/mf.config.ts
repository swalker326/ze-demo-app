import type { moduleFederationPlugin } from '@module-federation/sdk';

export const mfConfig: moduleFederationPlugin.ModuleFederationPluginOptions = {
  name: 'host',
  remotes: {
    settings: 'settings@http://localhost:3001/remoteEntry.js',
    header: 'header@http://localhost:3002/remoteEntry.js',
  },
};
