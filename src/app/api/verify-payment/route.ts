import { NextResponse } from 'next/server';
import crypto from 'crypto';

// ⚡ Next.js को बिल्ड के समय इस रूट को स्टेटिक कंपाइल करने से रोकने के लिए अनिवार्य लाइन
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing required validation fields' }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET || '';
    
    const signBody = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(signBody.toString())
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      return NextResponse.json({ status: 'success', message: 'Payment verified securely!' });
    } else {
      return NextResponse.json({ status: 'failed', error: 'Cryptographic signature mismatch.' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Signature Verification Error:', error);
    return NextResponse.json({ error: 'Internal Verification Failure' }, { status: 500 });
  }
}
