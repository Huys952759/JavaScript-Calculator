(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_components_Numbers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_components_Operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),_components_Equals__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9),_components_Decimal__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10),_components_AC__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(11),_components_Output__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(12),_components_Smile__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(22),_App_css__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_13__),App=function(_Component){Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var _;return Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this,e)).state={expression:"0",formula:"",allowDecimal:!0},_.handleClick=_.handleClick.bind(Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumber=_.handleNumber.bind(Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimal=_.handleDecimal.bind(Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperator=_.handleOperator.bind(Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEqual=_.handleEqual.bind(Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleClear=_.handleClear.bind(Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(_Users_yaosonghu_Desktop_Front_End_Libraries_Projects_Javascript_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleClick",value:function(e){"number"==e.target.className&&this.handleNumber(e),"decimal"==e.target.className&&this.handleDecimal(e),"operator"==e.target.className&&this.handleOperator(e),"clear"==e.target.className&&this.handleClear(),"equals"==e.target.className&&this.handleEqual(e)}},{key:"handleNumber",value:function(e){"0"==this.state.expression?"0"!==e.target.textContent&&this.setState({expression:e.target.textContent}):/[\+\-\*\/]$/.test(this.state.expression)?this.setState({expression:this.state.expression+" "+e.target.textContent}):this.setState({expression:this.state.expression+e.target.textContent})}},{key:"handleDecimal",value:function(e){this.state.allowDecimal&&this.setState({expression:this.state.expression+e.target.textContent,allowDecimal:!1})}},{key:"handleOperator",value:function(e){var _="x"==e.target.textContent?"*":e.target.textContent;/([\+\-\*\/]\s-)$/.test(this.state.expression)?this.setState({expression:this.state.expression.replace(/([\+\-\*\/]\s-)$/,_)}):"-"==_?this.setState({expression:this.state.expression+" "+_}):/[\+\-\*\/]$/.test(this.state.expression)?this.setState({expression:this.state.expression.slice(0,-1)+_}):this.setState({expression:this.state.expression+" "+_}),this.setState({allowDecimal:!0})}},{key:"handleEqual",value:function handleEqual(e){var result=eval(this.state.expression);this.setState({formula:this.state.expression+" = "+result,expression:""+result,allowDecimal:!0})}},{key:"handleClear",value:function(){this.setState({expression:"0",formula:"",allowDecimal:!0})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Output__WEBPACK_IMPORTED_MODULE_11__.a,{formula:this.state.formula,expression:this.state.expression}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Smile__WEBPACK_IMPORTED_MODULE_12__.a,null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Numbers__WEBPACK_IMPORTED_MODULE_6__.a,{handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Operators__WEBPACK_IMPORTED_MODULE_7__.a,{handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Equals__WEBPACK_IMPORTED_MODULE_8__.a,{handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Decimal__WEBPACK_IMPORTED_MODULE_9__.a,{handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AC__WEBPACK_IMPORTED_MODULE_10__.a,{handleClick:this.handleClick}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},,,function(e,_,t){"use strict";var a=t(0),s=t.n(a),r=[{number:0,id:"zero"},{number:1,id:"one"},{number:2,id:"two"},{number:3,id:"three"},{number:4,id:"four"},{number:5,id:"five"},{number:6,id:"six"},{number:7,id:"seven"},{number:8,id:"eight"},{number:9,id:"nine"}];_.a=function(e){var _=r.map((function(_,t){return s.a.createElement("div",{key:t,onClick:e.handleClick,className:"number",id:_.id},_.number)}));return s.a.createElement("div",{id:"numbers"},_)}},function(e,_,t){"use strict";var a=t(0),s=t.n(a),r=[{operator:"+",id:"add"},{operator:"-",id:"subtract"},{operator:"x",id:"multiply"},{operator:"/",id:"divide"}];_.a=function(e){var _=r.map((function(_,t){return s.a.createElement("div",{key:t,onClick:e.handleClick,className:"operator",id:_.id},_.operator)}));return s.a.createElement("div",{id:"operators"},_)}},function(e,_,t){"use strict";var a=t(0),s=t.n(a);_.a=function(e){return s.a.createElement("div",{id:"equals",onClick:e.handleClick,className:"equals"},"=")}},function(e,_,t){"use strict";var a=t(0),s=t.n(a);_.a=function(e){return s.a.createElement("div",{id:"decimal",onClick:e.handleClick,className:"decimal"},".")}},function(e,_,t){"use strict";var a=t(0),s=t.n(a);_.a=function(e){return s.a.createElement("div",{id:"clear",onClick:e.handleClick,className:"clear"},"AC")}},function(e,_,t){"use strict";var a=t(0),s=t.n(a);_.a=function(e){return s.a.createElement("div",{id:"output",className:"output"},s.a.createElement("div",{id:"formula"},e.formula),s.a.createElement("div",{id:"display"},e.expression))}},function(e,_,t){"use strict";var a=t(0),s=t.n(a);_.a=function(e){return s.a.createElement("div",{id:"smile"},s.a.createElement("i",{class:"fa fa-smile-o","aria-hidden":"true"}))}},,,function(e,_,t){e.exports=t(23)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),s=t.n(a),r=t(3),n=t.n(r),o=(t(21),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.d6fb5722.chunk.js.map