(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(5)),o=n(117),i=c(n(695)),a=c(n(118)),u=n(187);function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  .mq-editable-field {\n    width: calc(100% - 40px);\n    height: calc(100% - 40px);\n    font-size: 26px !important;\n    padding: 20px;\n    border: none !important;\n  }\n\n  .mq-cursor {\n    border-color: "," !important;\n  }\n"]);return h=function(){return e},e}(0,i.addStyles)();var m=(0,a.createGlobalStyle)(h(),function(e){return e.darkTheme?"white":"black"}),b=a.default.div.withConfig({displayName:"VisualInput__Container",componentId:"h2l39f-0"})(["width:100%;height:100%;"]),y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}(this,p(t).call(this,e))).mathElement=null,n.mathField=null,n.previousLatex=null,n.updateLatex.bind(d(d(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.Component),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"componentDidMount",value:function(){}},{key:"updateLatex",value:function(){var e=this.props.store.getState().input.latex;e!=this.mathField.latex()&&this.mathField.latex(e)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return r.createElement(b,{onClick:function(){e.updateLatex()}},r.createElement(m,{darkTheme:this.props.darkTheme}),r.createElement(i.default,{ref:function(t){null==e.mathElement&&(e.mathElement=t.element)},latex:this.props.latex,onChange:function(t){t.trim()!==e.props.latex.trim()&&e.props.changeLatex(t)},mathquillDidMount:function(t){e.mathField=t}}))}}]),t}(),v=(0,o.connect)(function(e){return{latex:e.input.latex,darkTheme:e.settings.darkTheme}},u.actions)(y);t.default=v}}]);
//# sourceMappingURL=comp-visual-input.bundle.js.map