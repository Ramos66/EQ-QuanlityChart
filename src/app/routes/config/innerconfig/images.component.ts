import { Component, OnInit, NgModule } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { GetconfiginfoService } from '../getconfiginfo.service';
import { Procedure } from '../procedure';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.less'],
})
@NgModule({
  declarations: [],
})
export class SysImagesComponent implements OnInit {
  record: any = {};
  i: any;
  listOfChartGroup: ItemData[] = [];
  listOfDisplayData: ItemData[] = [];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  procedureList: Procedure[];
  isLoadingOne = false;
  sample = 50;
  selectedProject = 'Vinci';
  selectedRatio = 10;
  listOfRatio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  dateRange = [];
  listOfSelectedDimension = ['线体'];
  listOfDimension = ['线体', '周期', '机台', 'Config'];
  defaultDimension = [...this.listOfSelectedDimension];
  constructor(
    public msgSrv: NzMessageService,
    public http: _HttpClient,
    private getconfigservice: GetconfiginfoService,
  ) {}
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    for (let i = 0; i < 15; i++) {
      this.listOfChartGroup.push({
        id: i,
        project: 'vinci',
        demension: ['yy', 'config'],
        errorRatio: 10,
        sample: 30,
        itemList: [
          'wwdfdsdfsdf',
          'ijtnign',
          'wwdfdsdfsdf',
      
        ],
      });
    }
  }

  projectChange(): void {
    // alert('test');
    this.getProcedure();

    // alert(this.procedureList);
  }

  getProcedure(): void {
    this.getconfigservice.getProcedureList().subscribe(data => (this.procedureList = data));
  }

  loadData(pi: number): void {
    /*  this.data = new Array(5).fill({}).map((_, index) => {
      return {
        
      };
    });
    */
  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  close() {
    // this.modal.destroy();
  }
}
