import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbfDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.nombre,
  ProductoRelations
> {
  constructor(
    @inject('datasources.mongodbf') dataSource: MongodbfDataSource,
  ) {
    super(Producto, dataSource);
  }
}
