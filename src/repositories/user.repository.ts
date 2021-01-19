import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {TestMedilinkDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.test_medilink') dataSource: TestMedilinkDataSource,
  ) {
    super(User, dataSource);
  }
}
