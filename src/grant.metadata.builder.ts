import { MetadataBuilder } from './metadata.builder';
import { Metadata } from './metadata';

export class GrantMetadataBuilder implements MetadataBuilder {
  private constructor(private base: MetadataBuilder) {}

  public static createNew(base: MetadataBuilder) {
    return new GrantMetadataBuilder(base);
  }

  build(): Metadata {
    const metadata = this.base.build();
    metadata.labels.set('type', 'grant');
    return metadata;
  }
}
