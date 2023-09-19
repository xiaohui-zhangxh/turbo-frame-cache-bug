// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import Alpine from "alpinejs"
Alpine.start()
import "./controllers"

document.addEventListener("turbo:before-visit", () => { console.log("turbo:before-visit") })
document.addEventListener("turbo:visit", (event) => { console.log("turbo:visit", event.detail.url) })
document.addEventListener("turbo:before-fetch-request", () => { console.log("turbo:before-fetch-request") })
document.addEventListener("turbo:before-fetch-response", () => { console.log("turbo:before-fetch-response") })
document.addEventListener("turbo:before-cache", () => { console.log("turbo:before-cache") })
document.addEventListener("turbo:before-render", () => { console.log("turbo:before-render") })
document.addEventListener("turbo:before-stream-render", () => { console.log("turbo:before-stream-render") })
document.addEventListener("turbo:render", () => { console.log("turbo:render") })
document.addEventListener("turbo:load", (event) => { console.log("turbo:load", event.detail.url) })
document.addEventListener("turbo:before-frame-render", () => { console.log("turbo:before-frame-render") })
document.addEventListener("turbo:frame-render", () => { console.log("turbo:frame-render") })
document.addEventListener("turbo:frame-load", () => { console.log("turbo:frame-load") })
document.addEventListener("turbo:fetch-request-error", () => { console.log("turbo:fetch-request-error") })

document.addEventListener("turbo:before-cache", (event) => {
  console.log("turbo:before-cache h1->", document.querySelector("h1").textContent)
})

document.addEventListener("turbo:before-render", (event) => {
  console.log("turbo:before-render h1->", event.detail.newBody.querySelector("h1").textContent)
})
