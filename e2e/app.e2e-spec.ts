<<<<<<< HEAD
import { SteamGameLibraryTrackerPage } from './app.po';

describe('steam-game-library-tracker App', function() {
  let page: SteamGameLibraryTrackerPage;

  beforeEach(() => {
    page = new SteamGameLibraryTrackerPage();
=======
import { SGLTPage } from './app.po';

describe('sglt App', function() {
  let page: SGLTPage;

  beforeEach(() => {
    page = new SGLTPage();
>>>>>>> SB1
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
