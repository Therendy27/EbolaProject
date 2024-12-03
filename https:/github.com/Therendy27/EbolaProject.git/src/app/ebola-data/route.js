import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://apps.who.int/gho/athena/xmart/EBOLA_MEASURE/CASES,DEATHS.json?filter=COUNTRY:*;LOCATION:-;DATAPACKAGEID:2016-05-11;INDICATOR_TYPE:SITREP_CUMULATIVE;INDICATOR_TYPE:SITREP_CUMULATIVE_21_DAYS');
    if (!res.ok) {
      throw new Error('Failed to fetch data from WHO API');
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from WHO API:', error);
    return NextResponse.error();
  }
}
