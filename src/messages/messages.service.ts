import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { User } from './entities/user.entity';

@Injectable()
export class MessagesService {



  messages: Message[] = [{ name: "zaki", text: "heyooo" }];


  clientTouser: User[] = [{id:'' , name:''}] ;
   




  identify(name: string, clientId: string) {

    console.log(clientId);


    const user ={
      id : clientId ,
      name : name
    };

    this.clientTouser.push(user);


    console.log(this.clientTouser);
   // return Object.values(this.clientTouser);
  }

  getClientByName(clientId: string) {

    let name: string;

    this.clientTouser.map(client =>{ 
      
     if (client.id==clientId){ name = client.name }  
    
    } );

    return name ;


  }






  create(createMessageDto: CreateMessageDto ,clientId: string) {

    const message = {

      name : this.getClientByName(clientId) ,

      text: createMessageDto.text

    }

    console.log(message.name);

    console.log(message.text);



    return this.messages.push(message);
  }

  findAll() {
    return this.messages;
  }


}
