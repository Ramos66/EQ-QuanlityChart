import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigQualitychartsconfigComponent } from './qualitychartsconfig/qualitychartsconfig.component';
import { SysImagesComponent } from './innerconfig/images.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { ConfigSelectDetailComponent } from './select-detail/select-detail.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule} from '@angular/cdk/scrolling';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [
  ConfigQualitychartsconfigComponent,
  SysImagesComponent,
  ConfigSelectDetailComponent,
];

@NgModule({
  imports: [SharedModule, ConfigRoutingModule, NzListModule, FormsModule, ScrollingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [SysImagesComponent, SysImagesComponent],
})
export class ConfigModule {}
