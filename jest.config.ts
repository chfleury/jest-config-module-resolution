/** @jest-config-loader ts-node */
/** @jest-config-loader-options {"compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "lib": ["ESNext"],
    "allowJs": true,
    "checkJs": false,
    "sourceMap": true,
    "noEmit": true,
    "isolatedModules": true,
    "strict": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": false,
    "resolveJsonModule": true,
    "noErrorTruncation": true
  }} */

import { createJestConfig } from "./createJestConfig";

export default createJestConfig();
