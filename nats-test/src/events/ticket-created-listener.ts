import { Listener } from "@sonnemontickets/common";
import { Message } from "node-nats-streaming";
import { TicketCreatedEvent } from "@sonnemontickets/common";
import { Subjects } from "@sonnemontickets/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "payment-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data", data);
    data.id;
    msg.ack();
  }
}
