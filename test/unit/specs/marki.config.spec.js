import marki from '@/main';

// markdown source file include

describe('marki.config', () => {

  describe('marki.config load', () => {

    it('# internal modules lengths should be 1', () => {
      expect(marki.context.modules.length).to.eq(1);
    });

    it('# modules length should be 0 when load empty config', () => {
      let emptyMarkiConfig = {
        modules: []
      };
      marki.load(emptyMarkiConfig);
      expect(marki.context.modules.length).to.eq(0);
    });
  });
});
