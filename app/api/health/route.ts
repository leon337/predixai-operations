export function GET() {
  return Response.json(
    {
      status: 'ok',
      service: 'predixai-operations'
    },
    { status: 200 }
  );
}
