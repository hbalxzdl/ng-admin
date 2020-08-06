import { Component } from '@angular/core';
import { Router ,ActivatedRoute,NavigationEnd} from "@angular/router";
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent {
  constructor( private route: ActivatedRoute,
               private router: Router,
               private title: Title) { }

  ngOnInit(): void {
    this.setTitle();

    this.route.url.subscribe(url => {
      // 更改页面title

    });
  }

  setTitle() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router)
      )
      .subscribe((event) => {

        // 更改页面title
        const titles = this.getTitle(this.router.routerState, this.router.routerState.root);
        const title = titles[titles.length - 1];
        console.log(title)
        if (title) {
          this.title.setTitle(title);
        }
      });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }



}
