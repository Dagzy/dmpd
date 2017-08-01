import { DmpdPage } from './app.po';

describe('dmpd App', () => {
  let page: DmpdPage;

  beforeEach(() => {
    page = new DmpdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
