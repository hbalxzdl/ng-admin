import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import {PageService} from '../../services/page/page.service'

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})


export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pageService:PageService
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit(): void {

    this.pageService.breadcrumbs.subscribe(res=>{
      console.log('面包屑'+JSON.stringify(res))
      this.breadcrumbs=res
    })
  }



}
