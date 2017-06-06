import { PeperPage } from './app.po';

describe('peper App', () => {
  let page: PeperPage;

  beforeEach(() => {
    page = new PeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
