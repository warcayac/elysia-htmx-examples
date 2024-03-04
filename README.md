# Elysia & htmx

Reference: https://htmx.org/examples/

## Modifiers for ***hx-trigger***

The `hx-trigger` attribute in HTMX supports various modifiers to customize event handling. Here is a complete list of all modifiers used with `hx-trigger`:

- `once`: Triggers a request only once.
- `throttle`: Delays events, triggering them once every specified interval.
- `changed`: Initiates a request only when the value property of an element has changed.
- `delay`: Specifies a delay before issuing a request.
- `load`, `revealed`, and `intersect`: Synthetic events for loading, revealing, and intersecting elements respectively.
- `from:body`: Triggers an event from an HX-Trigger response header.
- `from:(selector)`: Listens to the event of a different element.
- `root:(selector)`: A root element CSS selector for intersection.
- `threshold:(float)`: A floating point number between 0.0 and 1.0 indicating the amount of intersection on which the event should be triggered.
- `every:(timing declaration)`: Polls the specified URL periodically.
- `queue:(queue option)`: Determines how events are queued if an event occurs while a request for another event is in flight. Options are: `first`, `last`, `all`, `none`.
- `filter:(javascript expression)`: Applies a filter to events by evaluating a JavaScript expression. If the expression evaluates to true, the event will be triggered; otherwise, it will not[1][2][3][4][5].

**Citations:**
- [1] https://pkg.go.dev/github.com/will-wow/typed-htmx-go/hx/trigger
- [2] https://htmx.org/docs/
- [3] https://hypermedia.systems/deep-htmx/
- [4] https://refine.dev/blog/what-is-htmx/
- [5] https://htmx.org/attributes/hx-trigger/

---
## TO-DO

- Solution 2 for **Updating Other Content** presents an unexpected behavior, it needs to be fixed
- **Async Authentication** needs a better example about how it should work

---

Updated: **03-March-2024** by **William AC**
