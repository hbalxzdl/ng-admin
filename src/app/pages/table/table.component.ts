import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router ,ActivatedRoute,NavigationEnd,NavigationCancel} from "@angular/router";
import { Observable } from "rxjs";
import {filter} from 'rxjs/operators';
import {DialogService} from '../../services/others/dialog/dialog.service'

interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})




export class TableComponent implements OnInit {
  listOfData: ItemData[] = [];
  listOfCurrentPageData: ItemData[] = [];
  checked:boolean=false
  indeterminate = false;
  setOfCheckedId = new Set<number>();

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      status:null
    });

    this.router.events.pipe(filter(event => event instanceof NavigationCancel))
      .subscribe(event =>{
        console.log('离开')
    })

      this.getList()

  }

  canDeactivate(): Observable<boolean> | boolean {
    // 这里处理业务逻辑 如果业务不通过就return 通过就不返回任何东西 dialogService可以单独做个服务也可以不需要
    return this.dialogService.leaveConfirm(true);
  }



  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }

    console.log(this.validateForm)
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



  //触发全选事件
  onAllChecked(value: boolean): void {
    this.listOfData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: number, checked: boolean): void {
    //是否全选，是就添加数据，否在就删除
    checked?this.setOfCheckedId.add(id):this.setOfCheckedId.delete(id);
  }

  refreshCheckedStatus(): void {
    //全选/不确定
    this.checked = this.listOfData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
}
