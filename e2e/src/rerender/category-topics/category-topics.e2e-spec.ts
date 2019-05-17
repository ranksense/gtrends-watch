import { browser, logging } from 'protractor';
import { CategoryTopicsPage } from './category-topics.po';

describe('Category topics page', () => {
  let page: CategoryTopicsPage;

  beforeEach(() => {
    page = new CategoryTopicsPage();
    page.navigateTo();
  });

  it('should have a title', () => {
    expect(page.getTitle()).not.toBeNull();
  });

  it('should have a description meta tag', () => {
    expect(page.getDescription()).not.toBeNull()
  });

  it('should have a canonical meta tag', () => {
    expect(browser.getCurrentUrl()).toEqual(page.getCanonical());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
