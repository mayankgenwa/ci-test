import { describe, it, expect } from 'vitest';
import { add } from '../src/utils/math';

describe('Math Utilities', () => {
  it('should add two numbers correctly', () => {
    // PASSING TEST
    expect(add(2, 3)).toBe(5);
  });

  // UNCOMMENT THE CODE BELOW TO TEST "PR FAILURE" SCENARIOS (Story 6)
  /*
  it('should fail this test purposely', () => {
    // FAILING TEST
    expect(add(2, 2)).toBe(5); 
  });
  */
});