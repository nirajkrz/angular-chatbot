import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatDialogueComponent } from './chat-dialogue/chat-dialogue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatDialogueComponent],
  exports: [ChatDialogueComponent],
  providers: [ChatService]
})
export class ChatModule { }
