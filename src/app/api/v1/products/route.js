export async function GET() {
    return Response.json({message:"Getting Products Success", products: []});
}

export async function POST() {
    return Response.json({message:"Creating New Products Success", products: []});
}