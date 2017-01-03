import { SimpleWebsite01Page } from './app.po';

describe('simple-website01 App', function() {
  let page: SimpleWebsite01Page;

  beforeEach(() => {
    page = new SimpleWebsite01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
