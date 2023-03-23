import { MetadataBuilder } from './metadata.builder';
import { Metadata } from './metadata';

export class BaseMetadataBuilder implements MetadataBuilder {
  private constructor(private id: string, private createdAt: Date) {}

  public static createNew(id: string, createdAt: Date) {
    return new BaseMetadataBuilder(id, createdAt);
  }
  build(): Metadata {
    const metadata = new Metadata();
    metadata.id = this.id;
    metadata.createdAt = this.createdAt;
    return metadata;
  }
}
