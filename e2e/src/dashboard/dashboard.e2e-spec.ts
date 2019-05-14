import { browser, logging, protractor } from 'protractor';
import { DashboardPage } from './dashboard.po';

const EC = protractor.ExpectedConditions;

describe('Dashboard page', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
    page.navigateTo();
  });

  it('Should be able access to Dashboard page', () => {
    expect(browser.getCurrentUrl()).toEqual(page.url);
  });

  it('should should have a title', () => {
    expect(page.getTitleText()).toEqual('Top Search Trends');
  });

  it('should have a page title `Main Dashboard - Google Trends Watcher`', function () {
    expect(browser.getTitle()).toEqual('Main Dashboard - Google Trends Watcher');
  });

  it('Should display Category Search component', () => {
    expect(page.getCategorySerachComponent()).not.toBeNull();
  });

  it('Should display Topics Search component', () => {
    expect(page.getTopicsSerachComponent()).not.toBeNull();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
