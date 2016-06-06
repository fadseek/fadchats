export class FadChatsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fad-chats-app h1')).getText();
  }
}
