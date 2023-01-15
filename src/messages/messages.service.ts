import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {



  messages: Message[] = [{ name: "zaki", text: "heyooo" }];


  clientTouser: {};




  identify(name: string, clientId: string) {

    this.clientTouser[clientId] = name;
    return Object.values(this.clientTouser);
  }

  getClientByName(clientId: string) {
    return this.clientTouser[clientId];
  }






  create(createMessageDto: CreateMessageDto) {

    const message = { ...createMessageDto };


    return this.messages.push(message);
  }

  findAll() {
    return this.messages;
  }


}
