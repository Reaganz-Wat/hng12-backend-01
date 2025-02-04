import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {

  isPerfectNumber(num: number): boolean {
    if (num < 2) return false; // Numbers less than 2 are not perfect
  
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i; // Add proper divisor
      }
    }
  
    return sum === num; // If sum equals the number, it's perfect
  }
  

  getSumNumbers(digit: number): number {
    return digit
      .toString() // Convert the number to a string
      .split('') // Split into individual digits
      .map(Number) // Convert back to numbers
      .reduce((sum, num) => sum + num, 0); // Sum all digits
  }
  isPrime(digit: number): boolean {
    if (digit < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(digit); i++) {
      if (digit % i === 0) return false; // If divisible by any number other than 1 and itself, not prime
    }
    return true; // If no divisors found, it's prime
  }
  getNumberProperties(num: number): string[] {
    const properties: string[] = [];
  
    // Check if the number is an Armstrong number
    const numStr = num.toString();
    const numLength = numStr.length;
    const sum = numStr
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + Math.pow(digit, numLength), 0);
  
    if (sum === num) {
      properties.push("armstrong");
    }
  
    // Check if the number is odd or even
    properties.push(num % 2 === 0 ? "even" : "odd");
  
    return properties;
  }
  async getFunFact(digit: number): Promise<string> {
    try {
      const response = await axios.get(`http://numbersapi.com/${digit}`);
      return response.data; // The API returns the fact as a string
    } catch (error) {
      console.error("Error fetching fun fact:", error);
      return "Could not fetch a fun fact at this time.";
    }
  }
  
  
}
