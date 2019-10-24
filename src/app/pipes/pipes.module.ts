// other imports
import { TitleCasePipe } from './titleCase.pipe';
import { TruncatePipe } from './truncate.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    TitleCasePipe,
      TruncatePipe,
  ],
  exports: [
    TitleCasePipe,
      TruncatePipe,
  ]
})
export class PipesModule {}
