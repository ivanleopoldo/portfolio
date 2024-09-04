type GetParams = {
  params: {
    filename: string;
  };
};

export async function GET(req: Request, { params }: GetParams) {
  const filename = params.filename;

  const RESUME =
    "https://drive.google.com/uc?export=download&id=1kJbsaOM_Jy-PYqm9p5-viDLDz9U8QAD3";

  const response = await fetch(RESUME);

  return new Response(response.body, {
    headers: {
      ...response.headers,
      "content-disposition": `attachment; filename=${filename}`,
    },
  });
}
