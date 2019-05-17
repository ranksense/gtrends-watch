import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should should have a title', () => {
    expect(page.getTitleText()).toEqual('Google Trends Watcher');
  });

  it('should should have a navigation bar', () => {
    expect(page.getNavigations().count()).toEqual(2);
  });

  it('Should be able navigate to Search Trends page', () => {
    const searchTrendLink = page.getNavigations().get(1);
    searchTrendLink.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/trends');
  });

  it('Should be able navigate to Dashboard page', () => {
    const dashboardLink = page.getNavigations().get(0);
    dashboardLink.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/dashboard');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
