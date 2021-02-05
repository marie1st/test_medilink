import {DefaultCrudRepository} from '@loopback/repository';
import {TestCenter, TestCenterRelations} from '../models';
import {TestMedilinkDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestCenterRepository extends DefaultCrudRepository<
  TestCenter,
  typeof TestCenter.prototype.test_center_id,
  TestCenterRelations
> {
  constructor(
    @inject('datasources.test_medilink') dataSource: TestMedilinkDataSource,
  ) {
    super(TestCenter, dataSource);
  }
}
