import { browser, logging, protractor } from 'protractor';
import { CategoriesPage } from './categories.po';

describe('Trends page', () => {
  let page: CategoriesPage;

  beforeEach(() => {
    page = new CategoriesPage();
    page.navigateTo();
  });

  it('Should be able access to Trends page', () => {
    expect(browser.getCurrentUrl()).toEqual(page.url);
  });

  it('should be able to have page title', () => {
    expect(page.getTitle()).toEqual('Global Trends - Google Trends Watcher');
  });

  it('should be able to have description meta tag', () => {
    expect(page.getDescription()).toEqual('Use the global trends page to narrow down into specific categories');
  });

  it('should be able to have canonical meta tag', () => {
    expect(browser.getCurrentUrl()).toEqual(page.getCanonical());
  });

  it('Should have a title', () => {
    expect(page.getTitleText()).toEqual('Search Trends');
  });

  it('Should have a list of categories', () => {
    expect(page.getCategories().count()).toBeGreaterThan(0);
  });

  it('Should be able to create category', async () => {
    const oldLength = await page.getCategories().count();

    page.setCategoriesNameInput('e2e category');
    page.clickAddCategoryButton();

    expect(page.getCategories().count()).toBe(oldLength + 1);
  });

  it('Should be able to delete category', async () => {
    const oldLength = await page.getCategories().count();

    page.clickDeleteLastCategoryButton();

    expect(page.getCategories().count()).toBe(oldLength - 1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
