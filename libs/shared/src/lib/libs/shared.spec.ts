import { libsShared } from './libs/shared';

describe('libsShared', () => {
  it('should work', () => {
    expect(libsShared()).toEqual('libs/shared');
  });
});
