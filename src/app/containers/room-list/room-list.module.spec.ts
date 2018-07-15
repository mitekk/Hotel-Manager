import { RoomListModule } from './room-list.module';

describe('RoomListModule', () => {
  let roomListModule: RoomListModule;

  beforeEach(() => {
    roomListModule = new RoomListModule();
  });

  it('should create an instance', () => {
    expect(roomListModule).toBeTruthy();
  });
});
