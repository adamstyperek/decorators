import { BaseMetadataBuilder } from '../src/base.metadata.builder';
import { UserMetadataBuilder } from '../src/user.metadata.builder';

it('When call user metadata builder with id, name and email and base metadata builder instance then build method returns metadata object with given user values', () => {
  const id = 'SomeId';
  const now = new Date();
  const builder = BaseMetadataBuilder.createNew(id, now);
  const userId = 'SomeUserId';
  const userEmail = 'john@doe.com';
  const userName = 'John Doe';
  const userMetadataBuilder = UserMetadataBuilder.createNew(
    builder,
    userId,
    userName,
    userEmail,
  );
  const metadata = userMetadataBuilder.build();
  expect(metadata.id).toEqual(id);
  expect(metadata.createdAt).toEqual(now);
  expect(metadata.user.email).toEqual(userEmail);
  expect(metadata.user.name).toEqual(userName);
  expect(metadata.user.id).toEqual(userId);
});
