import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@sonnemontickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
