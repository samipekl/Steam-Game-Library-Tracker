import { SGLTPage } from './app.po';

describe('sglt App', function() {
  let page: SGLTPage;

  beforeEach(() => {
    page = new SGLTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
