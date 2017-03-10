import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class ProjectPage {
=======
<<<<<<< HEAD
export class SteamGameLibraryTrackerPage {
=======
export class SGLTPage {
>>>>>>> SB1
>>>>>>> a680f7c6768d53d2ea99bf11d4f95cdb4216c101
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
