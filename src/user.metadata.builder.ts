import { MetadataBuilder } from './metadata.builder';
import { Metadata, UserMetadata } from './metadata';

export class UserMetadataBuilder implements MetadataBuilder {
  private constructor(
    private base: MetadataBuilder,
    private id: string,
    private name: string,
    private email: string,
  ) {}

  public static createNew(
    base: MetadataBuilder,
    id: string,
    name: string,
    email: string,
  ) {
    return new UserMetadataBuilder(base, id, name, email);
  }
  build(): Metadata {
    const metadata = this.base.build();
    const userMetadata = new UserMetadata();
    userMetadata.id = this.id;
    userMetadata.name = this.name;
    userMetadata.email = this.email;
    metadata.user = userMetadata;
    return metadata;
  }
}
