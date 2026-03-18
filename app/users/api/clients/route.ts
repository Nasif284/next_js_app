export async function GET() {
    return Response.json({ users: [{ name: "nasif", age: "23" }] });
}

export async function POST(req: Request) {
    const body = await req.json()
    return Response.json({message:"success",body})
}