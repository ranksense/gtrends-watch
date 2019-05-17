import { browser, logging, protractor } from 'protractor';
import { CategoriesPage } from './categories.po';

const EC = protractor.ExpectedConditions;

describe('Trends page', () => {
  let page: CategoriesPage;

  beforeEach(() => {
    page = new CategoriesPage();
    page.navigateTo();
  });

  it('Should be able access to Trends page', () => {
    expect(browser.getCurrentUrl()).toEqual(page.url);
  });

  it('Should have a title', () => {
    expect(page.getTitleText()).toEqual('Search Trends');
  });

  it('Should have a list of categories', () => {
    expect(page.getCategories().count()).toBeGreaterThan(0);
  });

  it ('Should be able to create category', async () => {
    const oldLength = await page.getCategories().count();

    page.setCategoriesNameInput('e2e category');
    page.clickAddCategoryButton();

    expect(page.getCategories().count()).toBe(oldLength + 1);
  });

  it ('Should be able to delete category', async () => {
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
