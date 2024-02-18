import Stripe from 'stripe';

export class CreateChargeDto {
  amount: number;
  token?: string;
  card: Stripe.PaymentMethodCreateParams.Card1;
}
