import {Component} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {PageService} from './services/page/page.service';
import {observable} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`
})

export class AppComponent {
  //路由列表
  menuList: Array<{ title: string, module: string, power: string,isSelect:boolean }>=[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private title: Title,
              public pageService: PageService) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          console.log(route);
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => {

        //路由data的标题
        let title = event['title'];
        this.title.setTitle(title)

        //路径
        let path=this.router.routerState.snapshot.url
        this.menuList.forEach(p => p.isSelect=false);
        var menu = { title: title, module: path, power: event["power"], isSelect:true};

        this.pageService.setMenuList(menu)

        //设置面包屑
        let data=this.pageService.getBreadcrumbs(this.activatedRoute.root)
        this.pageService.setBreadcrumbs(data)

      });

    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd)
    //   )
    //   .subscribe((event) =>{
    //     //设置面包屑
    //     let data=this.pageService.getBreadcrumbs(this.route.root)
    //     this.pageService.setBreadcrumbs(data)
    //
    //     //设置title
    //     this.pageService.setTitle(this.router.routerState,this.router.routerState.root)
    //     this.pageService.title.subscribe(title=>this.title.setTitle(title))
    //
    //
    //   })

  }


}
