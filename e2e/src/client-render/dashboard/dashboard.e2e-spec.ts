import { browser, logging } from 'protractor';
import { DashboardPage } from './dashboard.po';

describe('Dashboard page', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
    page.navigateTo();
  });

  it('Should be able access to Dashboard page', () => {
    expect(browser.getCurrentUrl()).toEqual(page.url);
  });

  it('should have a title', () => {
    expect(page.getTitle()).toEqual('Main Dashboard - Google Trends Watcher');
  });

  it('should have a description meta tag', () => {
    expect(page.getDescription()).toEqual('Use the dashboard to find the latest trends to watch for in Google Trends');
  });

  it('should have canonical meta tag', () => {
    expect(browser.getCurrentUrl()).toEqual(page.getCanonical());
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
