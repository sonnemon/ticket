import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@sonnemontickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
