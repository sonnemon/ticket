import { Publisher } from "@sonnemontickets/common";
import { TicketCreatedEvent } from "@sonnemontickets/common";
import { Subjects } from "@sonnemontickets/common";
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
