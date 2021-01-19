import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  given_name: string;

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
    type: 'date',
    required: true,
  })
  date_of_departure: string;

  @property({
    type: 'string',
    required: true,
  })
  accomodation1: string;

  @property({
    type: 'date',
    required: true,
  })
  accom1_date: string;

  @property({
    type: 'string',
    required: true,
  })
  accomodation2: string;

  @property({
    type: 'date',
    required: true,
  })
  accom2_date: string;

  @property({
    type: 'string',
    required: true,
  })
  accomodation3: string;

  @property({
    type: 'date',
    required: true,
  })
  accom3_date: string;

  @property({
    type: 'boolean',
    required: true,
  })
  insurance_covid: boolean;

  @property({
    type: 'string',
    required: true,
  })
  insurance_company: string;

  @property({
    type: 'string',
    required: true,
  })
  policy_no: string;

  @property({
    type: 'boolean',
    required: true,
  })
  health_evisa: boolean;

  @property({
    type: 'date',
    required: true,
  })
  health_evisa_date: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
