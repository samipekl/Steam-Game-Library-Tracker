import { SteamGameLibraryTrackerPage } from './app.po';

describe('steam-game-library-tracker App', function() {
  let page: SteamGameLibraryTrackerPage;

  beforeEach(() => {
    page = new SteamGameLibraryTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
