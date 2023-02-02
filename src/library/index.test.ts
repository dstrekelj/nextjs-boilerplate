import { describe, expect, test } from '@jest/globals';
import { ping } from '@/library/index';

describe('Library', () => {
  test('pongs when pinged', () => {
    expect(ping()).toBe('pong');
  });
});
