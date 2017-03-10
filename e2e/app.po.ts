import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class SteamGameLibraryTrackerPage {
=======
export class SGLTPage {
>>>>>>> SB1
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
