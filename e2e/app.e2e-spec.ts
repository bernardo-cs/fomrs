import { FomrsPage } from './app.po';

describe('fomrs App', function() {
  let page: FomrsPage;

  beforeEach(() => {
    page = new FomrsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
