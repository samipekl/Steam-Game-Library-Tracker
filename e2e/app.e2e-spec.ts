<<<<<<< HEAD
import { ProjectPage } from './app.po';

describe('project App', function() {
  let page: ProjectPage;

  beforeEach(() => {
    page = new ProjectPage();
=======
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
>>>>>>> a680f7c6768d53d2ea99bf11d4f95cdb4216c101
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
