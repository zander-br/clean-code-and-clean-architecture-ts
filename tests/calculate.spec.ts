import { multiply, subtract, sum } from '@/calculate';

describe('Calculate demo', () => {
  it('should return 2 when call sum with 1 and 1', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });

  it('should return 2 when call subtract with 5 and 3', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should return 15 when call subtract with 5 and 3', () => {
    const result = multiply(5, 3);
    expect(result).toBe(15);
  });
});
