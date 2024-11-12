
    export type RemoteKeys = 'settings/Module';
    type PackageType<T> = T extends 'settings/Module' ? typeof import('settings/Module') :any;