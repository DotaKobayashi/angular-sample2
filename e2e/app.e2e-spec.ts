import { AngularSample2Page } from './app.po';

describe('angular-sample2 App', () => {
  let page: AngularSample2Page;

  beforeEach(() => {
    page = new AngularSample2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
