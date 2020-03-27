import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { Procedure } from '../procedure';

@Component({
  selector: 'app-config-select-detail',
  templateUrl: './select-detail.component.html',
})
export class ConfigSelectDetailComponent implements OnInit {
  @Input() procedure: Procedure;
  record: any = {};
  i: any;

  constructor(
   // private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
  }

  close() {
  //  this.modal.destroy();
  }
}
