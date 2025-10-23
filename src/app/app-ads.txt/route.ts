import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the app-ads.txt file from the project root
    const filePath = path.join(process.cwd(), 'app-ads.txt');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Return the content with proper headers for app-ads.txt
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error reading app-ads.txt:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}
