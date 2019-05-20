import { browser, by, element } from 'protractor';

export class DashboardPage {
  url = `${browser.baseUrl}/dashboard`;

  navigateTo() {
    return browser.get(this.url) as Promise<any>;
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

  getTitleText() {
    return element(by.css('app-dashboard h3')).getText() as Promise<string>;
  }

  getCategorySerachComponent() {
    return element(by.css('app-dashboard app-category-search')).getTagName();
  }

  getTopicsSerachComponent() {
    return element(by.css('app-dashboard app-topics-search')).getTagName();
  }
}
