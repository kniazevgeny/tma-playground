import { hydrateRoot } from "react-dom/client"
import { StartClient } from "@tanstack/start"
import { createRouter } from "./router"
import "./service-worker"

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}
