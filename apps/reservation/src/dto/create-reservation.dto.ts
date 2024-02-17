import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  startDate: Date;
  @IsNotEmpty()
  endDate: Date;
  @IsString()
  @IsNotEmpty()
  placeId: string;
  invoiceId: string;
}
