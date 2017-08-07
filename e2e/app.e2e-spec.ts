import { NgDevscssPage } from './app.po';

describe('ng-devscss App', () => {
  let page: NgDevscssPage;

  beforeEach(() => {
    page = new NgDevscssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
