import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  given_name: string;

  @property({
    type: 'string',
    required: true,
  })
  middlename: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  passport_no: string;

  @property({
    type: 'string',
    required: true,
  })
  nationality: string;

  @property({
    type: 'date',
    required: true,
  })
  date_of_birth: string;

  @property({
    type: 'string',
    required: true,
  })
  type_of_visa: string;

  @property({
    type: 'string',
    required: true,
  })
  pre_approved_visa_no: string;

  @property({
    type: 'string',
    required: true,
  })
  arrival_flight: string;

  @property({
    type: 'date',
    required: true,
  })
  date_of_arrival: string;

  @property({
    type: 'string',
    required: true,
  })
  departure_flight: string;

  @property({
    type: 'string',
    required: true,
  })
  accommodation1: string;

  @property({
    type: 'date',
    required: true,
  })
  accom1_date: string;

  @property({
    type: 'string',
    required: true,
  })
  accommodation2: string;

  @property({
    type: 'date',
    required: true,
  })
  accom2_date: string;

  @property({
    type: 'string',
    required: true,
  })
  accommodation3: string;

  @property({
    type: 'date',
    required: true,
  })
  accom3_date: string;

  @property({
    type: 'string',
    required: true,
  })
  insurance_covid: string;

  @property({
    type: 'string',
    required: true,
  })
  insurace_company: string;

  @property({
    type: 'string',
    required: true,
  })
  policy_no: string;

  @property({
    type: 'string',
    required: true,
  })
  health_evisa: string;

  @property({
    type: 'date',
    required: true,
  })
  health_evisa_date: string;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
