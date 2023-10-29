'use client'

import { useEffect } from 'react'
import { Interface } from 'readline'

export interface UseAddEventListenerConfigInstsance {
  class: string | null,
  event: string,
  handler: (e: Event) => void
}

export const toggleClass = (element: Element, className: string) => {
  if (element) {
    if (element.className != null && element.classList.contains(className)) {
      element.classList.remove(className)
    } else {
      element.classList.add(className)
    }
  }
}

export const useAddEventListeners = (configs: UseAddEventListenerConfigInstsance[]) => {
  useEffect(() => {
    configs.forEach((config) => {
      if (typeof config.class == "string") {
        const elements = document.querySelectorAll(config.class);
        elements.forEach((element) => {
          element.addEventListener(config.event, config.handler);
        });
      } else {
        const element = config.class;
        window.addEventListener(config.event, config.handler);
      }
    });

    return (() => {
      configs.forEach((config) => {
        if (typeof config.class == "string") {
          const elements = document.querySelectorAll(config.class);
          elements.forEach((element) => {
            element.removeEventListener(config.event, config.handler);
          });
        } else {
          window.removeEventListener(config.event, config.handler);
        }
      });
    });
  });
}
