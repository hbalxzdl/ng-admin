import {Component, ElementRef, OnInit, LOCALE_ID, Inject} from '@angular/core';
import {WorkflowService} from '../../services/workflow/workflow.service'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers:[{provide: LOCALE_ID, useValue: 'zh-Hans' }]
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

  curRowIndex:number
  msg:string

  constructor(private el: ElementRef,public workflowService:WorkflowService,@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.getList()
    setTimeout(()=> this.scrollValueY=this.el.nativeElement.querySelector('.body-container').offsetHeight-75+'px',1000)

    this.workflowService.getMessage().subscribe((state)=>{
      this.msg=state

      console.log(formatDate(new Date(), 'yyyy-MM-dd', this.locale))
    })
  }



  sizeChange(size) {
    console.log(size);
  }

  collapsedChange(event) {
    console.log(event);
  }
  edit(data,index:number){
    this.workflowService.sendMessage(JSON.stringify(data))
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
