import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ColorPickerService} from './color-picker.service';
import {ColorPickerDirective} from './color-picker.directive';
import { DynamicCpModule } from './color-picker.directive';

@NgModule({
    imports: [CommonModule,DynamicCpModule],
    providers: [],
    declarations: [ColorPickerDirective],
    exports: [DynamicCpModule,ColorPickerDirective]
})
export class ColorPickerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ColorPickerModule,
            providers: [ColorPickerService]
        };
    }
}
