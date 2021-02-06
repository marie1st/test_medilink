import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {TestCenter} from '../models';
import {TestCenterRepository} from '../repositories';

export class TestCenterController {
  constructor(
    @repository(TestCenterRepository)
    public testCenterRepository : TestCenterRepository,
  ) {}

  @post('/test-centers', {
    responses: {
      '200': {
        description: 'TestCenter model instance',
        content: {'application/json': {schema: getModelSchemaRef(TestCenter)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestCenter, {
            title: 'NewTestCenter',

          }),
        },
      },
    })
    testCenter: TestCenter,
  ): Promise<TestCenter> {
    return this.testCenterRepository.create(testCenter);
  }

  @get('/test-centers/count', {
    responses: {
      '200': {
        description: 'TestCenter model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TestCenter) where?: Where<TestCenter>,
  ): Promise<Count> {
    return this.testCenterRepository.count(where);
  }

  @get('/test-centers', {
    responses: {
      '200': {
        description: 'Array of TestCenter model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TestCenter, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TestCenter) filter?: Filter<TestCenter>,
  ): Promise<TestCenter[]> {
    return this.testCenterRepository.find(filter);
  }

  @patch('/test-centers', {
    responses: {
      '200': {
        description: 'TestCenter PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestCenter, {partial: true}),
        },
      },
    })
    testCenter: TestCenter,
    @param.where(TestCenter) where?: Where<TestCenter>,
  ): Promise<Count> {
    return this.testCenterRepository.updateAll(testCenter, where);
  }

  @get('/test-centers/{id}', {
    responses: {
      '200': {
        description: 'TestCenter model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TestCenter, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: number,
    @param.filter(TestCenter, {exclude: 'where'}) filter?: FilterExcludingWhere<TestCenter>
  ): Promise<TestCenter> {
    return this.testCenterRepository.findById(id, filter);
  }

  @patch('/test-centers/{id}', {
    responses: {
      '204': {
        description: 'TestCenter PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestCenter, {partial: true}),
        },
      },
    })
    testCenter: TestCenter,
  ): Promise<void> {
    await this.testCenterRepository.updateById(id, testCenter);
  }

  @put('/test-centers/{id}', {
    responses: {
      '204': {
        description: 'TestCenter PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: number,
    @requestBody() testCenter: TestCenter,
  ): Promise<void> {
    await this.testCenterRepository.replaceById(id, testCenter);
  }

  @del('/test-centers/{id}', {
    responses: {
      '204': {
        description: 'TestCenter DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: number): Promise<void> {
    await this.testCenterRepository.deleteById(id);
  }
}
