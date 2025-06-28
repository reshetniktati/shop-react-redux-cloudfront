import { formatAsPrice } from './utils';

git('formatAsPrice', () => {
  // BEGIN: Test for valid price
  it('should format a valid price correctly', () => {
    expect(formatAsPrice(1234.56)).toBe('$1,234.56');
  });
  // END: Test for valid price

  // BEGIN: Test for zero price
  it('should format zero price correctly', () => {
    expect(formatAsPrice(0)).toBe('$0.00');
  });
  // END: Test for zero price

  // BEGIN: Test for negative price
  it('should format a negative price correctly', () => {
    expect(formatAsPrice(-1234.56)).toBe('-$1,234.56');
  });
  // END: Test for negative price
});