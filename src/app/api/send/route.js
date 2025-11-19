import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(1, '86400 s'),
});

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';

    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return new Response(JSON.stringify({ error: 'Sadece günde bir kez mesaj gönderebilirsiniz.' }), {
        status: 429,
      });
    }

    const body = await req.json();
    const { email, subject, message } = body;
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['serrcan.celik@gmail.com', email],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error('API error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
