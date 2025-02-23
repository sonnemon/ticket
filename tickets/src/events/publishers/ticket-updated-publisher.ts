import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@sonnemontickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
