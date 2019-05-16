import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Params, ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  /**
   * @class DetailComponent
   * @constructor
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
    this.breadcrumbs = [];
  }

  /**
   * Let's go!
   *
   * @class DetailComponent
   * @method ngOnInit
   */
  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //subscribe to the NavigationEnd event
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);

      console.log('breadcrumbs', this.breadcrumbs);

      let itemListElement = '';

      this.breadcrumbs.forEach(item => {
        itemListElement = itemListElement +
          `{
          "@type": "ListItem",
          "name": "${item.label}",
          "item": "${item.url}"
        },
        `
      });
      itemListElement = itemListElement.substring(0, itemListElement.length - 2);


      let s = this._renderer2.createElement('script');
      s.type = `application/ld+json`;
      s.text = `
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [${itemListElement}]
        }
      `;

      this._renderer2.appendChild(this._document.body, s);

    });
  }

  /**
   * Returns array of IBreadcrumb objects that represent the breadcrumb
   *
   * @class DetailComponent
   * @method getBreadcrumbs
   * @param {ActivateRoute} route
   * @param {string} url
   * @param {IBreadcrumb[]} breadcrumbs
   */
  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB]['label'],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
