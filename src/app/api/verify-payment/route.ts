import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing required validation fields' }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET || '';
    
    // रेज़रपे के नियमों के अनुसार सिग्नेचर स्ट्रिंग तैयार करना
    const signBody = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(signBody.toString())
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      return NextResponse.json({ status: 'success', message: 'Payment verified securely!' });
    } else {
      return NextResponse.json({ status: 'failed', error: 'Cryptographic signature mismatch. Unauthorized transaction!' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Signature Verification Error:', error);
    return NextResponse.json({ error: 'Internal Verification Failure' }, { status: 500 });
  }
}
