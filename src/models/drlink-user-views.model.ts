import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class DrlinkUserViews extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  user_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  given_name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;

  @property({
    type: 'string',
    required: true,
  })
  nationality: string;

  @property({
    type: 'string',
    required: true,
  })
  passport_no: string;

  @property({
    type: 'date',
    required: true,
  })
  test_date: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'string',
    required: true,
  })
  test_result: string;

  @property({
    type: 'boolean',
    required: true,
  })
  covid_test: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  fit_test: boolean;

  @property({
    type: 'date',
    required: true,
  })
  arrival_date: string;

  @property({
    type: 'date',
    required: true,
  })
  departure_date: string;

  @property({
    type: 'string',
    required: true,
  })
  flight: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  accommodation1: string;

  @property({
    type: 'string',
    required: true,
  })
  country_of_birth: string;

  @property({
    type: 'date',
    required: true,
  })
  date_of_birth: string;

  @property({
    type: 'string',
    required: true,
  })
  covid_file_path: string;

  @property({
    type: 'string',
    required: true,
  })
  fit_file_path: string;

  @property({
    type: 'string',
    required: true,
  })
  other_names: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DrlinkUserViews>) {
    super(data);
  }
}

export interface DrlinkUserViewsRelations {
  // describe navigational properties here
}

export type DrlinkUserViewsWithRelations = DrlinkUserViews & DrlinkUserViewsRelations;
