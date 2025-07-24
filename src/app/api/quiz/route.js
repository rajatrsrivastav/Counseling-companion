import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const amount = searchParams.get('amount') || 10;
  const category = searchParams.get('category') || 17;
  const difficulty = searchParams.get('difficulty') || '';
  const type = searchParams.get('type') || '';

  let apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}`;

  if (difficulty) {
    apiUrl += `&difficulty=${difficulty}`;
  }
  if (type) {
    apiUrl += `&type=${type}`;
  }

  try {
    const apiResponse = await fetch(apiUrl, { cache: 'no-store' });
    if (!apiResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch questions from the trivia API.' }, { status: 500 });
    }

    const data = await apiResponse.json();
    if (data.response_code !== 0) {
      return NextResponse.json({ 
        error: 'Could not retrieve questions for the specified criteria. Please try different settings.',
        response_code: data.response_code 
      }, { status: 400 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}