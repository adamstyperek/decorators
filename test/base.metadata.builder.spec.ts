import { BaseMetadataBuilder } from '../src/base.metadata.builder';

it('When call base metadata builder with id and createdAt then build method returns metadata object with given values', () => {
  const id = 'SomeId';
  const now = new Date();
  const builder = BaseMetadataBuilder.createNew(id, now);
  const metadata = builder.build();
  expect(metadata.id).toEqual(id);
  expect(metadata.createdAt).toEqual(now);
});
