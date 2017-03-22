import { FormationfinderClientPage } from './app.po';

describe('formationfinder-client App', function() {
  let page: FormationfinderClientPage;

  beforeEach(() => {
    page = new FormationfinderClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
