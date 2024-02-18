import { CardDto } from './card.dto';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChargeDto {
  @IsNumber()
  amount: number;
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CardDto)
  card: CardDto;
}
