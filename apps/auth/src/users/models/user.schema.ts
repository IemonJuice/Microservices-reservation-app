import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common/database/abstract.schema';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  email: string;

  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);