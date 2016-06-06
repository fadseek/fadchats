import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FadChatsAppComponent } from '../app/fad-chats.component';

beforeEachProviders(() => [FadChatsAppComponent]);

describe('App: FadChats', () => {
  it('should create the app',
      inject([FadChatsAppComponent], (app: FadChatsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fad-chats works!\'',
      inject([FadChatsAppComponent], (app: FadChatsAppComponent) => {
    expect(app.title).toEqual('fad-chats works!');
  }));
});
