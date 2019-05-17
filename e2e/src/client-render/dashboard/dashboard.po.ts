import { browser, by, element } from 'protractor';

export class DashboardPage {
  url = `http://localhost:4200/dashboard`;

  navigateTo() {
    return browser.get(this.url) as Promise<any>;
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
