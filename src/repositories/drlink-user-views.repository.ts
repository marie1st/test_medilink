import {DefaultCrudRepository} from '@loopback/repository';
import {DrlinkUserViews, DrlinkUserViewsRelations} from '../models';
import {TestMedilinkDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DrlinkUserViewsRepository extends DefaultCrudRepository<
  DrlinkUserViews,
  typeof DrlinkUserViews.prototype.user_id,
  DrlinkUserViewsRelations
> {
  constructor(
    @inject('datasources.test_medilink') dataSource: TestMedilinkDataSource,
  ) {
    super(DrlinkUserViews, dataSource);
  }
}
