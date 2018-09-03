
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminSharedModule } from '../../../shared/admin-shared.module';
import { AdminChatRoutingModule } from './admin-chat.route';
import { ChatsComponent } from './chats.component';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';
import { CollapsibleModule } from 'angular2-collapsible';
import { ChatPipe } from '../chatpipe';
import { TabsModule } from '../../../shared/components/ngx-tabset-component/ngx-tabset';
@NgModule({
  imports: [
    AdminSharedModule,
    AdminChatRoutingModule,
    CollapsibleModule,
    TabsModule.forChild(),
  ],
  declarations: [ChatsComponent,
    ChatLayoutComponent,
    ChatPipe]
})
export class AdminChatLevelModule { }
