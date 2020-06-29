import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import IstorageProvider from '../models/IStorageProvider';

export default class DiskStorageProvider implements IstorageProvider {
  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }

  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadFolder, file),
    );

    return file;
  }
}
