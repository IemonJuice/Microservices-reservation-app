import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreateChargeDto } from '@app/common';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  placeId: string;

  @IsString()
  @IsNotEmpty()
  invoiceId: string;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
}
