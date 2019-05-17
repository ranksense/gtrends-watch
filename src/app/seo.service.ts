import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
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
}

