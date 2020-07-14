export const track = (event, body) => {
  if (typeof window !== "undefined" && window.splitbee)
    return window.splitbee.track(event, body)
}
