import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon/nz-icon.module';

@Component({
  selector: 'app-config-qualitychartsconfig',
  templateUrl: './qualitychartsconfig.component.html',
})
export class ConfigQualitychartsconfigComponent implements OnInit {
  record: any = {};
  i: any;
  tabs = [
    {
      active: true,
      name: '对内数据配置',
      icon: 'setting',
    },
    {
      active: false,
      name: '对内图表展示',
      icon: 'pie-chart',
    },
    {
      active: false,
      name: '对外数据配置',
      icon: 'setting',
    },
    {
      active: false,
      name: '对外图表展示',
      icon: 'pie-chart',
    },
  ];
  listOfImage: string[] = [];
  constructor(public msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    for(let i=0; i<30; i++)
    {
      this.listOfImage.push("D:\\hezq\\work\\01-pictures\\test.jpg");
    }
  }

  close() {
    // this.modal.destroy();
  }
}
