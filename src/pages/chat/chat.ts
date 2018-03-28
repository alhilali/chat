import { ConversationServiceProvider } from "./../../providers/conversation-service/conversation-service";
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  message: string = "";
  messages: Array<Message>;
  restaurants: Array<Restaurant>;

  constructor(public navCtrl: NavController,
    private conversationService: ConversationServiceProvider) {
    this.messages = new Array<Message>();
  }

  ionViewDidEnter() {
    this.messages = new Array<Message>();
    this.restaurants = new Array<Restaurant>();
    this.conversationService.sendMessage("").subscribe(
      data => {
        console.log(data);
        this.updateConversation(data);
      },
      error => {
        console.log(error);
      }
    )
    this.generateMenue('كنتاكي')
  }

  generateMenue(restaurantName: string) {
    const restaurant = new Restaurant(restaurantName, 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png');
    restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
    restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
    restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
    restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
    this.restaurants.push(restaurant);
  }

  loadMoreItems(restaurant: Restaurant) {
    restaurant.addMenuItem('وجبة دينر', 16, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/bites_Big_menu.jpg');
  }

  send() {
    this.messages.push(new Message(this.message, false));
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

    this.conversationService.sendMessage(this.message).subscribe(
      data => {
        if (data.entities[0].entity == 'مطعم') {
          this.updateConversationWithRestaurant(this.restaurants[0]);
        }
        this.updateConversation(data);
      },
      error => {
        console.log(error);
      }
    )

    this.message = "";
  }

  private updateConversationWithRestaurant(restaurant: Restaurant) {
    this.messages.push(new Message("", true, true, restaurant));
  }

  private updateConversation(data: any) {
    let msg = "";

    if (data.output.text.length >= 1) {
      msg = data.output.text.join(" ");
    } else if (data.output.text.length == 1) {
      msg = data.output.text[0];
    }

    this.messages.push(new Message(msg, true));

    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }

  footerTouchStart(event) {
    if (event.target.localName !== "input") {
      event.preventDefault();
    } else {
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 300);
    }
  }

  touchSendButton(event: Event) {
    event.preventDefault();
    this.send();
  }

}

export class Message {
  content: string;
  isWatson: boolean;
  timestamp: string;
  isRestaurant?: boolean;
  restaurant?: Restaurant;

  constructor(content: string, isWatson: boolean,
    type?: boolean, restaurant?: Restaurant) {
    this.content = content;
    this.isWatson = isWatson;
    const date = new Date();
    this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    if (type) {
      this.restaurant = restaurant;
      this.isRestaurant = type;
    } else type = false;
  }
}

export class MenuItem {
  name: string;
  price: number;
  quantitiy: number;
  image: string;

  constructor(name: string, price: number, image: string) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}


export class Restaurant {
  name: string;
  menu: Array<MenuItem>;
  logoImage: string;

  constructor(name: string, logo?: string) {
    this.name = name;
    this.menu = new Array<MenuItem>();
    if (logo) this.logoImage = logo;
  }

  addMenuItem(name: string, price: number, image: string) {
    const menuItem = new MenuItem(name, price, image);
    this.menu.push(menuItem);
  }
}
