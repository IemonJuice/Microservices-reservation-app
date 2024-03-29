import { CreateChargeDto } from './create-charge.dto';
import { IsEmail } from 'class-validator';

export class CreatePaymentsChargeDto extends CreateChargeDto {
  @IsEmail()
  email: string;
}
