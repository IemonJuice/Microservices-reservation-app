import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { CreateChargeDto } from './dto/create-charge.dto';
import { NOTIFICATIONS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentsChargeDto } from './dto/create-payments-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe: Stripe;

  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationsService: ClientProxy,
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET'), {
      apiVersion: '2023-10-16',
    });
  }

  async createCharge({ token, amount, email }: CreatePaymentsChargeDto) {
    try {
      const payment = await this.stripe.paymentIntents.create({
        amount: 100 * amount,
        confirm: true,
        payment_method: 'pm_card_visa',
        payment_method_types: ['card'],
        currency: 'usd',
      });
      this.notificationsService.emit('notify_email', { email });
      return payment;
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  }
}
