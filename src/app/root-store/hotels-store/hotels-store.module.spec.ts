import { HotelsStoreModule } from './hotels-store.module';

describe('HotelsStoreModule', () => {
  let hotelsStoreModule: HotelsStoreModule;

  beforeEach(() => {
    hotelsStoreModule = new HotelsStoreModule();
  });

  it('should create an instance', () => {
    expect(hotelsStoreModule).toBeTruthy();
  });
});
