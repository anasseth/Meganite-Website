import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faComment, faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollChat') private myScrollContainer!: ElementRef;
  faSmile = faSmile
  faPaperclip = faPaperclip
  faPaperPlane = faPaperPlane
  faEnvelop = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faCartPlus = faCartPlus;
  faComment = faComment
  faChevronDown = faChevronDown
  videoURL: string = "https://www.youtube.com/embed/-8XU8KyebTU";
  safeURL: any = "";
  activeProduct = "";
  activeIndex = -1;
  showProduct: boolean = false;
  showChatBox: boolean = false;
  messageText: string = "";
  chatData: any = [
    {
      messageBy: "Meganite",
      content: "Hello there, this is Maganite online assistant, how can i help?"
    },
    // {
    //   messageBy: "Visitor",
    //   content: "Hello !"
    // },
    // {
    //   messageBy: "Meganite",
    //   content: "Let me grab a pilot to answer that for you real quick!"
    // },
    // {
    //   messageBy: "Meganite",
    //   content: "What's your email in case we get disconnected?"
    // },
    // {
    //   messageBy: "Visitor",
    //   content: "Hello !"
    // },
    // {
    //   messageBy: "Meganite",
    //   content: "What's your email in case we get disconnected?"
    // },
    // {
    //   messageBy: "Visitor",
    //   content: "support@meganite.com"
    // },
  ]
  productData = [
    {
      _3dImage: "../../assets/product-1.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-2.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-3.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-4.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-1.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-2.png",
      _2dImage: "../../assets/product-1-3d.png"
    },
    {
      _3dImage: "../../assets/product-1.png",
      _2dImage: "../../assets/product-1-3d.png"
    }
  ]

  constructor(private _sanitizer: DomSanitizer, private wowService: NgwWowService) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
    this.wowService.init();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    // this.scrollToBottom();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoHeight: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  clickProduct(event: any, i: any) {
    this.showProduct = true;
    this.activeIndex = i;
    this.activeProduct = "../../" + event.target.src.slice(event.target.src.indexOf("assets"))
  }

  hideProduct() {
    this.activeIndex = -1
    this.showProduct = false
  }

  getCon(index: any,condition?:any) {
    if (index != this.chatData.length - 1 && condition != 2) {
      return this.chatData[index + 1].messageBy
    }
    else if(condition == 2 && index > 0){
      return this.chatData[index - 1].messageBy
    }
  }

  toggleChatBox() {
    this.showChatBox = !this.showChatBox
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
