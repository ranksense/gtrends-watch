import { browser, by, element } from 'protractor';

export class CategoriesPage {
  url = `${browser.baseUrl}/trends`;

  navigateTo() {
    return browser.get(this.url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-categories h2')).getText() as Promise<string>;
  }

  getTitle() {
    return browser.getTitle();
  }

  getDescription() {
    return element(by.css('head meta[name="description"]')).getAttribute('content');
  }

  getCanonical() {
    return element(by.css('head link[rel="canonical"]')).getAttribute('href');
  }
}
