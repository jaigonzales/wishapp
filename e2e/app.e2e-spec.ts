import { WishappPage } from './app.po';

describe('wishapp App', () => {
  let page: WishappPage;

  beforeEach(() => {
    page = new WishappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
