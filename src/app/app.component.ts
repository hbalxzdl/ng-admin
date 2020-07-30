import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent {
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.url.subscribe(url => {
      console.log(url)
    });
  }


}
