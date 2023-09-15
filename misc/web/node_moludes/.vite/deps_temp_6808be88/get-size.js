import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// node_modules/get-size/get-size.js
var require_get_size = __commonJS({
  "node_modules/get-size/get-size.js"(exports, module) {
    (function(window2, factory) {
      if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        window2.getSize = factory();
      }
    })(window, function factory() {
      function getStyleSize(value) {
        let num = parseFloat(value);
        let isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
      }
      let measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ];
      let measurementsLength = measurements.length;
      function getZeroSize() {
        let size = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        };
        measurements.forEach((measurement) => {
          size[measurement] = 0;
        });
        return size;
      }
      function getSize(elem) {
        if (typeof elem == "string")
          elem = document.querySelector(elem);
        let isElement = elem && typeof elem == "object" && elem.nodeType;
        if (!isElement)
          return;
        let style = getComputedStyle(elem);
        if (style.display == "none")
          return getZeroSize();
        let size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        let isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        measurements.forEach((measurement) => {
          let value = style[measurement];
          let num = parseFloat(value);
          size[measurement] = !isNaN(num) ? num : 0;
        });
        let paddingWidth = size.paddingLeft + size.paddingRight;
        let paddingHeight = size.paddingTop + size.paddingBottom;
        let marginWidth = size.marginLeft + size.marginRight;
        let marginHeight = size.marginTop + size.marginBottom;
        let borderWidth = size.borderLeftWidth + size.borderRightWidth;
        let borderHeight = size.borderTopWidth + size.borderBottomWidth;
        let styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width = styleWidth + // add padding and border unless it's already including it
          (isBorderBox ? 0 : paddingWidth + borderWidth);
        }
        let styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
          size.height = styleHeight + // add padding and border unless it's already including it
          (isBorderBox ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
      }
      return getSize;
    });
  }
});
export default require_get_size();
/*! Bundled license information:

get-size/get-size.js:
  (*!
   * Infinite Scroll v2.0.4
   * measure size of elements
   * MIT license
   *)
*/
//# sourceMappingURL=get-size.js.map
