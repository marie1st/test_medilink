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
import {DrlinkUserViews} from '../models';
import {DrlinkUserViewsRepository} from '../repositories';

export class DrlinkUserViewController {
  constructor(
    @repository(DrlinkUserViewsRepository)
    public drlinkUserViewsRepository : DrlinkUserViewsRepository,
  ) {}

  @post('/drlink-user-views', {
    responses: {
      '200': {
        description: 'DrlinkUserViews model instance',
        content: {'application/json': {schema: getModelSchemaRef(DrlinkUserViews)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DrlinkUserViews, {
            title: 'NewDrlinkUserViews',

          }),
        },
      },
    })
    drlinkUserViews: DrlinkUserViews,
  ): Promise<DrlinkUserViews> {
    return this.drlinkUserViewsRepository.create(drlinkUserViews);
  }

  @get('/drlink-user-views/count', {
    responses: {
      '200': {
        description: 'DrlinkUserViews model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DrlinkUserViews) where?: Where<DrlinkUserViews>,
  ): Promise<Count> {
    return this.drlinkUserViewsRepository.count(where);
  }

  @get('/drlink-user-views', {
    responses: {
      '200': {
        description: 'Array of DrlinkUserViews model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DrlinkUserViews, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DrlinkUserViews) filter?: Filter<DrlinkUserViews>,
  ): Promise<DrlinkUserViews[]> {
    return this.drlinkUserViewsRepository.find(filter);
  }

  @patch('/drlink-user-views', {
    responses: {
      '200': {
        description: 'DrlinkUserViews PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DrlinkUserViews, {partial: true}),
        },
      },
    })
    drlinkUserViews: DrlinkUserViews,
    @param.where(DrlinkUserViews) where?: Where<DrlinkUserViews>,
  ): Promise<Count> {
    return this.drlinkUserViewsRepository.updateAll(drlinkUserViews, where);
  }

  @get('/drlink-user-views/{id}', {
    responses: {
      '200': {
        description: 'DrlinkUserViews model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DrlinkUserViews, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: number,
    @param.filter(DrlinkUserViews, {exclude: 'where'}) filter?: FilterExcludingWhere<DrlinkUserViews>
  ): Promise<DrlinkUserViews> {
    return this.drlinkUserViewsRepository.findById(id, filter);
  }

  @patch('/drlink-user-views/{id}', {
    responses: {
      '204': {
        description: 'DrlinkUserViews PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DrlinkUserViews, {partial: true}),
        },
      },
    })
    drlinkUserViews: DrlinkUserViews,
  ): Promise<void> {
    await this.drlinkUserViewsRepository.updateById(id, drlinkUserViews);
  }

  @put('/drlink-user-views/{id}', {
    responses: {
      '204': {
        description: 'DrlinkUserViews PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: number,
    @requestBody() drlinkUserViews: DrlinkUserViews,
  ): Promise<void> {
    await this.drlinkUserViewsRepository.replaceById(id, drlinkUserViews);
  }

  @del('/drlink-user-views/{id}', {
    responses: {
      '204': {
        description: 'DrlinkUserViews DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: number): Promise<void> {
    await this.drlinkUserViewsRepository.deleteById(id);
  }
}
