import { Webca2Page } from './app.po';

describe('webca2 App', function() {
  let page: Webca2Page;

  beforeEach(() => {
    page = new Webca2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
