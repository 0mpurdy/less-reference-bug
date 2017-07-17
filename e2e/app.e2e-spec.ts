import { LessReferenceBugPage } from './app.po';

describe('less-reference-bug App', () => {
  let page: LessReferenceBugPage;

  beforeEach(() => {
    page = new LessReferenceBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
