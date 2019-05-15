import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';

import { MetaTagsService } from './meta-tags.service';

describe('MetaTagsService', () => {
  let service: MetaTagsService;
  let titleService: Title = jasmine.createSpyObj('Title', ['setTitle']);
  let metaService: Meta = jasmine.createSpyObj('Meta', ['updateTag']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Title, useValue: titleService },
      { provide: Meta, useValue: metaService },
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(MetaTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setPageTitle should call title.setTitle function with correct parram', () => {
    const title = 'Page title';
    service.setPageTitle(title);
    expect(titleService.setTitle).toHaveBeenCalledWith(title);
  });

  it('setMetaDescription should call meta.updateTag function with correct parram', () => {
    const desc = 'Page description';
    const description = { name: 'description', content: 'Page description' };

    service.setMetaDescription(desc);
    expect(metaService.updateTag).toHaveBeenCalledWith(description);
  });

});
