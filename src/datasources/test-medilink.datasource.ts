import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'test_medilink',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Digit@l101',
  database: 'test_medilink'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TestMedilinkDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'test_medilink';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.test_medilink', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
