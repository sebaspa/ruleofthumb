import { RuleofthumbPage } from './app.po';

describe('ruleofthumb App', () => {
  let page: RuleofthumbPage;

  beforeEach(() => {
    page = new RuleofthumbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
