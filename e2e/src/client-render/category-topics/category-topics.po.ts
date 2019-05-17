import { browser, by, element } from 'protractor';

export class CategoryTopicsPage {
  dashboardUrl = `http://localhost:4200/dashboard`;
  categoryTopicsUrl = `http://localhost:4200/topics`;

  navigateTo() {
    return browser.get(this.dashboardUrl) as Promise<any>;
  }

  navigateToCategoriesTopicsPage() {
    return element(by.css('app-dashboard div[data-protractor=top-search-trends] a:first-child')).click();
  }

  getTopics() {
    return element.all(by.css('app-category-topics ul.topics li')) ;
  }

  clickGoBackButton() {
    return element(by.css('app-category-topics button[data-protractor=go-back-button]')).click();
  }

  setCategoryNameInput(name: string) {
    const nameInput = element(by.css('app-category-topics input[data-protractor=category-name-input]'));
    return nameInput.clear().then(() => nameInput.sendKeys(name));
  }

  clickSaveButton() {
    return element(by.css('app-category-topics button[data-protractor=save-button]')).click();
  }

  getFirstTopSearchTrendsFirstItemNamePage() {
    return element(by.css('app-dashboard div[data-protractor=top-search-trends] a:first-child h4')).getText();
  }
}
