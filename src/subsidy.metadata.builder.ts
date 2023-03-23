import { MetadataBuilder } from './metadata.builder';
import { Metadata } from './metadata';

export class SubsidyMetadataBuilder implements MetadataBuilder {
  private constructor(private base: MetadataBuilder) {}

  public static createNew(base: MetadataBuilder) {
    return new SubsidyMetadataBuilder(base);
  }

  build(): Metadata {
    const metadata = this.base.build();
    metadata.labels.set('type', 'subsidy');
    return metadata;
  }
}
