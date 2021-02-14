import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TestMedilinkDataSource} from '../datasources';
import {TestCenter, TestCenterRelations} from '../models';

export class TestCenterRepository extends DefaultCrudRepository<
  TestCenter,
  typeof TestCenter.prototype.id,
  TestCenterRelations
> {
  constructor(
    @inject('datasources.test_medilink') dataSource: TestMedilinkDataSource,
  ) {
    super(TestCenter, dataSource);
  }
}
