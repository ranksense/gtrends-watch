import { browser, by, element } from 'protractor';

export class CategoryTopicsPage {
  categoryTopicsUrl = `${browser.baseUrl}/topics/2`;

  navigateTo() {
    return browser.get(this.categoryTopicsUrl) as Promise<any>;
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
