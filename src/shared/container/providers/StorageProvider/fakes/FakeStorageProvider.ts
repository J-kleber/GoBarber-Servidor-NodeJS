import IstorageProvider from '../models/IStorageProvider';

export default class FakeStorageProvider implements IstorageProvider {
  private storage: string[] = [];

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.splice(findIndex, 1);
  }

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);
    return file;
  }
}
