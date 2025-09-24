import type { Config } from "jest";
import path from "path";

export function createJestConfig() {
  const config: Config = {
    automock: true,
    testPathIgnorePatterns: [path.resolve(__dirname, "folder")],
  };

  return config;
}
