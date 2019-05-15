import { browser, logging, protractor } from 'protractor';
import { CategoryTopicsPage } from './category-topics.po';

const EC = protractor.ExpectedConditions;

describe('Category topics page', () => {
  let page: CategoryTopicsPage;

  beforeEach(() => {
    page = new CategoryTopicsPage();
    page.navigateTo();
    page.navigateToCategoriesTopicsPage();
  });

  it('Should be able access to Category topics page', () => {
    expect(browser.getCurrentUrl()).toContain(page.categoryTopicsUrl);
  });

  it('Should have a category topics', () => {
    expect(page.getTopics().count()).toBeGreaterThan(0);
  });

  it('Should be able to go back', () => {
    page.clickGoBackButton();

    expect(browser.getCurrentUrl()).toEqual(page.dashboardUrl);
  });

  it('Should be able to save category', async () => {
    // page.navigateToCategoriesTopicsPage();
    page.setCategoryNameInput('e2e category');
    page.clickSaveButton();

    browser.sleep(2000);

    expect(page.getFirstTopSearchTrendsFirstItemNamePage()).toEqual('e2e category');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
