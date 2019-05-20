import { browser, by, element } from 'protractor';

export class CategoriesPage {
  url = `${browser.baseUrl}/trends`;

  navigateTo() {
    return browser.get(this.url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-categories h2')).getText() as Promise<string>;
  }

  getCategories() {
    return element.all(by.css('app-categories ul.categories li'));
  }

  setCategoriesNameInput(name: string) {
    return element(by.css('app-categories input[data-protractor=category-name-input]')).sendKeys(name);
  }

  clickAddCategoryButton() {
    return element(by.css('app-categories button[data-protractor=create-category-button]')).click();
  }

  clickDeleteLastCategoryButton() {
    return element(by.css('app-categories ul.categories li:last-child button[data-protractor=delete-category-button]')).click();
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
