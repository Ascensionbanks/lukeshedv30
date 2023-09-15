import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// node_modules/ev-emitter/ev-emitter.js
var require_ev_emitter = __commonJS({
  "node_modules/ev-emitter/ev-emitter.js"(exports, module) {
    (function(global, factory) {
      if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        global.EvEmitter = factory();
      }
    })(typeof window != "undefined" ? window : exports, function() {
      function EvEmitter() {
      }
      let proto = EvEmitter.prototype;
      proto.on = function(eventName, listener) {
        if (!eventName || !listener)
          return this;
        let events = this._events = this._events || {};
        let listeners = events[eventName] = events[eventName] || [];
        if (!listeners.includes(listener)) {
          listeners.push(listener);
        }
        return this;
      };
      proto.once = function(eventName, listener) {
        if (!eventName || !listener)
          return this;
        this.on(eventName, listener);
        let onceEvents = this._onceEvents = this._onceEvents || {};
        let onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
      };
      proto.off = function(eventName, listener) {
        let listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length)
          return this;
        let index = listeners.indexOf(listener);
        if (index != -1) {
          listeners.splice(index, 1);
        }
        return this;
      };
      proto.emitEvent = function(eventName, args) {
        let listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length)
          return this;
        listeners = listeners.slice(0);
        args = args || [];
        let onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (let listener of listeners) {
          let isOnce = onceListeners && onceListeners[listener];
          if (isOnce) {
            this.off(eventName, listener);
            delete onceListeners[listener];
          }
          listener.apply(this, args);
        }
        return this;
      };
      proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
        return this;
      };
      return EvEmitter;
    });
  }
});

export {
  require_ev_emitter
};
//# sourceMappingURL=chunk-HQOI5DSA.js.map
