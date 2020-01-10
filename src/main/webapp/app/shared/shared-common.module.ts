import { NgModule } from '@angular/core';

import { CiaoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CiaoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CiaoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CiaoSharedCommonModule {}
