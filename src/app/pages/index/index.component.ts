import {Component, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  orientation = 'horizontal';
  splitBarSize = '2px';
  disabledBarSize = '1px';


  size = '50%';
  minSize = '20%';
  maxSize = '60%';

  scrollValueY:string

  listOfData=[]
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.getList()
    setTimeout(()=> this.scrollValueY=this.el.nativeElement.querySelector('.body-container').offsetHeight-75+'px',1000)
  }

  sizeChange(size) {
    console.log(size);
  }

  collapsedChange(event) {
    console.log(event);
  }

  getList():void{
    this.listOfData = new Array(200).fill(0).map((_, index) => {
      return {
        id: index,
        name: `Edward King ${index}`,
        age: 32,
        address: `London, Park Lane no. ${index}`
      };
    });
  }

}
