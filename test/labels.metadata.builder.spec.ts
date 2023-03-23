import { BaseMetadataBuilder } from '../src/base.metadata.builder';
import { UserMetadataBuilder } from '../src/user.metadata.builder';
import { GrantMetadataBuilder } from '../src/grant.metadata.builder';
import { SubsidyMetadataBuilder } from '../src/subsidy.metadata.builder';

it('When call grant metadata builder with given user metadata builder instance then build method returns metadata object with given user values and proper label', () => {
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
  const grantMetadataBuilder =
    GrantMetadataBuilder.createNew(userMetadataBuilder);
  const metadata = grantMetadataBuilder.build();
  expect(metadata.id).toEqual(id);
  expect(metadata.createdAt).toEqual(now);
  expect(metadata.user.email).toEqual(userEmail);
  expect(metadata.user.name).toEqual(userName);
  expect(metadata.user.id).toEqual(userId);
  expect(metadata.labels.get('type')).toEqual('grant');
});

it('When call subsidy metadata builder with given user metadata builder instance then build method returns metadata object with given user values and proper label', () => {
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
  const subsidyMetadataBuilder =
    SubsidyMetadataBuilder.createNew(userMetadataBuilder);
  const metadata = subsidyMetadataBuilder.build();
  expect(metadata.id).toEqual(id);
  expect(metadata.createdAt).toEqual(now);
  expect(metadata.user.email).toEqual(userEmail);
  expect(metadata.user.name).toEqual(userName);
  expect(metadata.user.id).toEqual(userId);
  expect(metadata.labels.get('type')).toEqual('subsidy');
});
