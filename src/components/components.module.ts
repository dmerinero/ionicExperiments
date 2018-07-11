import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product';

@NgModule({
	declarations: [ProductComponent,
    ProductComponent],
	imports: [],
	exports: [ProductComponent,
    ProductComponent]
})
export class ComponentsModule {}
