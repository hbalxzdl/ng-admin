import { Component } from '@angular/core';
import { Router ,ActivatedRoute,NavigationEnd} from "@angular/router";
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators';
import {PageService} from './services/page/page.service'
import {observable} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent {
  constructor( private route: ActivatedRoute,
               private router: Router,
               private title: Title,
               public pageService:PageService) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((event) =>{
        //设置面包屑
        let data=this.pageService.getBreadcrumbs(this.route.root)
        this.pageService.setBreadcrumbs(data)

        //设置title
        this.pageService.setTitle(this.router.routerState,this.router.routerState.root)
        this.pageService.title.subscribe(title=>this.title.setTitle(title))
      })

  }


}
