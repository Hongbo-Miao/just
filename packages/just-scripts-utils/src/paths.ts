import path from 'path';
import os from 'os';

let projectPath: string = '';

export const paths = {
  /**
   * Location where the generated project will go. Defaults to `process.cwd()`.
   */
  get projectPath(): string {
    return projectPath || process.cwd();
  },

  set projectPath(value: string) {
    projectPath = value;
  },

  /**
   * Gets a directory path under `${os.tmpdir()}/just-stack` for temporarily storing files.
   * @param segments Names of extra directory segments to include.
   * @returns The directory path.
   */
  tempPath(...segments: string[]): string {
    return path.resolve(os.tmpdir(), 'just-stack', ...segments);
  }
};
