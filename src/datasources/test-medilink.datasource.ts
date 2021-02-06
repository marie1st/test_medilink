import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'vernal-union-303915:us-central1:test-gothailand2021',
  connector: 'mysql',
  url: 'mysql://root:P@ssword@34.69.109.131:3306/test_medilink',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: ''
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
