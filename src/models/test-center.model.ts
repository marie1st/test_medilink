import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TestCenter extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  test_center_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  clinic_name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  clinic_file1: string;

  @property({
    type: 'string',
    required: true,
  })
  clinic_file2: string;

  @property({
    type: 'string',
    required: true,
  })
  clinic_file3: string;

  @property({
    type: 'string',
    required: true,
  })
  clinic_registration_number: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TestCenter>) {
    super(data);
  }
}

export interface TestCenterRelations {
  // describe navigational properties here
}

export type TestCenterWithRelations = TestCenter & TestCenterRelations;
