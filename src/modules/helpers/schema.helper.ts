import { Schema as NestSchema, SchemaFactory } from '@nestjs/mongoose';

export const Schema = (
  collectionName: string,
  declareId = true,
): ClassDecorator =>
  NestSchema({
    collection: collectionName,
    versionKey: false,
    toObject: { getters: true },
    toJSON: { getters: true },
    timestamps: {
      createdAt: 'createDate',
      updatedAt: 'updateDate',
    },
    _id: declareId,
    id: false,
  });
