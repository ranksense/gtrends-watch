import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc
  ) { }

  setPageTitle(title: string) {
    this.title.setTitle(title);
  }

  setCanonicalURL() {
    //check if it is exists first
    const canonical = this.doc.querySelector('link[rel="canonical"]');

    if (canonical === null) { // added this to eliminate duplicate canonical

      let link: HTMLLinkElement = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
      link.setAttribute('href', this.doc.URL);

    }
  }

  setMetaDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

  addMetaTags(page: string){
    this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project, Google Trends Watcher'});
    this.meta.addTag({name: 'description', content: page + ' Google Trends Watcher Angular project training on rsgitech.com'});
    this.meta.addTag({name: 'author', content: 'a'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Google Trends Watcher Angular' });
    this.meta.updateTag({ property: 'og:title', content: page + ' Google Trends Watcher Angular title' });
    this.meta.updateTag({ property: 'og:description', content: page + ' description Google Trends Watcher Angular ' });
    this.meta.updateTag({ property: 'og:image', content: 'https://angularfirebase.com/images/logo.png' });
    this.meta.updateTag({ property: 'og:url', content: `https://rendertron.azurewebsites.net/` });
  }
}

