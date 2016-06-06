import { FadChatsPage } from './app.po';

describe('fad-chats App', function() {
  let page: FadChatsPage;

  beforeEach(() => {
    page = new FadChatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fad-chats works!');
  });
});
