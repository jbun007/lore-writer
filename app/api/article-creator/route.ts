import { NextRequest, NextResponse } from 'next/server';
import ArticleCreator from '@/lib/article/article-creator';

export async function POST(req: NextRequest) {
  const { intent, mainIdea, keywords } = await req.json();

  try {
    const articleCreator = new ArticleCreator();
    // const result = await articleCreator.execute(contentType, searchQuery);
    // return NextResponse.json({ result });

    return NextResponse.json(await articleCreator.execute(intent, mainIdea, keywords));


  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}