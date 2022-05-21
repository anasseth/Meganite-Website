import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faComment, faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('scrollChat') private myScrollContainer!: ElementRef;
  isEmojiPickerVisible: boolean = false;
  faSmile = faSmile
  faPaperclip = faPaperclip
  faPaperPlane = faPaperPlane
  faEnvelop = faEnvelope;
  faComment = faComment
  faChevronDown = faChevronDown
  messageText: string = "";
  showChatBox: boolean = false;
  chatData: any = [
    {
      messageBy: "Meganite",
      content: "Hello there, this is Maganite online assistant, how can i help?"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getCon(index: any, condition?: any) {
    if (index != this.chatData.length - 1 && condition != 2) {
      return this.chatData[index + 1].messageBy
    }
    else if (condition == 2 && index > 0) {
      return this.chatData[index - 1].messageBy
    }
  }

  toggleChatBox() {
    this.showChatBox = !this.showChatBox
  }

  addEmoji(event: any) {
    this.messageText = `${this.messageText}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  sendMessage() {
    var messageObject = {
      messageBy: "Visitor",
      content: this.messageText
    }
    this.chatData.push(messageObject)
    this.messageText = '';
    setTimeout(() => {
      var messageObject = {
        messageBy: "Meganite",
        content: "Your Message is Recorded"
      }
      this.chatData.push(messageObject)
    }, 200);
    this.scrollToBottom
  }
  autoGrowTextZone(e: any) {
    // if (this.messageText = '') {
    //   e.target.style.height = "0px";
    // }
    // else {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15) + "px";
    // }
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
