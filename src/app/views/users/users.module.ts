import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { UserFormComponent, UserFormComponentDialog } from './user-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
   ],
  declarations:[
    UserFormComponent,
    UserFormComponentDialog
  ],
  entryComponents: [UserFormComponentDialog],
  providers: [UsersService],
})
export class UsersModule {}

