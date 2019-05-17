import { browser, logging } from 'protractor';
import { CategoryTopicsPage } from './category-topics.po';

describe('Category topics page', () => {
  let page: CategoryTopicsPage;

  beforeEach(() => {
    page = new CategoryTopicsPage();
    page.navigateTo();
    page.navigateToCategoriesTopicsPage();
  });

  it('should have a title', () => {
    expect(page.getTitle()).toEqual('Selected Trends - Google Trends Watcher');
  });

  it('should have a description meta tag', () => {
    expect(page.getDescription()).toEqual('Use the selected trends page to find the latest topics breaking out in Google Trends');
  });

  it('should have a canonical meta tag', () => {
    expect(browser.getCurrentUrl()).toEqual(page.getCanonical());
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
