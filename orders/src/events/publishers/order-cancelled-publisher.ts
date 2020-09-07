import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@sonnemontickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
