import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { CreateChargeDto } from './dto/create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe: Stripe;

  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET'), {
      apiVersion: '2023-10-16',
    });
  }

  async createCharge({ token, amount }: CreateChargeDto) {
    try {
      return await this.stripe.paymentIntents.create({
        amount: 100 * amount,
        confirm: true,
        payment_method: 'pm_card_visa',
        payment_method_types: ['card'],
        currency: 'usd',
      });
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  }
}
