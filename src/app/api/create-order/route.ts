import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export async function POST(request: Request) {
  try {
    const { amount, currency = 'INR' } = await request.json();

    // राशि की जांच (न्यूनतम 100 पैसे = 1 रुपया)
    const amountInPaise = Math.round(amount * 100);
    if (!amountInPaise || amountInPaise < 100) {
      return NextResponse.json({ error: 'Invalid amount. Minimum is ₹1' }, { status: 400 });
    }

    const options = {
      amount: amountInPaise,
      currency: currency,
      receipt: `receipt_makhana_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error: any) {
    console.error('Razorpay Order Creation Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
