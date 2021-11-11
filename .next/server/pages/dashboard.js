/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n\nvar _jsxFileName = \"/home/herlanderbento/Documentos/Books/Rocketseat/ignite-aulas/reactjs/project-dashgo/src/pages/dashboard.tsx\";\n\n\n\n\n\nconst Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ \"react-apexcharts\", 23)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ \"react-apexcharts\")],\n    modules: [\"dashboard.tsx -> \" + \"react-apexcharts\"]\n  }\n});\nconst options = {\n  chart: {\n    toolbar: {\n      show: false\n    },\n    zoom: {\n      enabled: false\n    },\n    foreColor: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.colors.gray[500]\n  },\n  grid: {\n    show: false\n  },\n  dataLabels: {\n    enabled: false\n  },\n  tooltip: {\n    enabled: false\n  },\n  xaxis: {\n    type: \"datetime\",\n    axisBorder: {\n      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.colors.gray[600]\n    },\n    axisTicks: {\n      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.colors.gray[600]\n    },\n    categories: [\"2021-11-07T00:00.000Z\", \"2021-11-08T00:00.000Z\", \"2021-11-09T00:00.000Z\", \"2021-11-10T00:00.000Z\", \"2021-11-11T00:00.000Z\", \"2021-11-12T00:00.000Z\", \"2021-11-13T00:00.000Z\"],\n    fill: {\n      opacity: 0.3,\n      type: \"gradient\",\n      gradient: {\n        shade: \"dark\",\n        opacityFrom: 0.8,\n        opacityTo: 0.3\n      }\n    }\n  }\n};\nconst series = [{\n  name: \"series1\",\n  data: [31, 120, 10, 28, 61, 18, 109]\n}];\nfunction Dashboard() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n    direction: \"column\",\n    h: \"100vh\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      w: \"100%\",\n      my: \"6\",\n      maxWidth: 1480,\n      mx: \"auto\",\n      px: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        flex: \"1\",\n        gap: \"4\",\n        minChildWidth: \"320px\",\n        align: \"flex-start\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          pb: \"4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Inscritos da semana\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Inscritos da semana\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"area\",\n            height: 160\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ28vLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeD85YjMxIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsIm9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93Iiwiem9vbSIsImVuYWJsZWQiLCJmb3JlQ29sb3IiLCJ0aGVtZSIsImdyaWQiLCJkYXRhTGFiZWxzIiwidG9vbHRpcCIsInhheGlzIiwidHlwZSIsImF4aXNCb3JkZXIiLCJjb2xvciIsImF4aXNUaWNrcyIsImNhdGVnb3JpZXMiLCJmaWxsIiwib3BhY2l0eSIsImdyYWRpZW50Iiwic2hhZGUiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtREFBTyxDQUFDLE1BQU0sc0lBQVAsRUFBbUM7QUFDdERDLEtBQUcsRUFBRSxLQURpRDtBQUFBO0FBQUEsd0NBQXJCLDBDQUFxQjtBQUFBLG9DQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO0FBSUEsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FESjtBQUlMQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREwsS0FKRDtBQU9MQyxhQUFTLEVBQUVDLGlFQUFBO0FBUE4sR0FETztBQVVkQyxNQUFJLEVBQUU7QUFDSkwsUUFBSSxFQUFFO0FBREYsR0FWUTtBQWFkTSxZQUFVLEVBQUU7QUFDVkosV0FBTyxFQUFFO0FBREMsR0FiRTtBQWdCZEssU0FBTyxFQUFFO0FBQ1BMLFdBQU8sRUFBRTtBQURGLEdBaEJLO0FBbUJkTSxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFVBREQ7QUFFTEMsY0FBVSxFQUFFO0FBQ1ZD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RmxleCwgU2ltcGxlR3JpZCwgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IEFwZXhPcHRpb25zIH0gZnJvbSBcImFwZXhjaGFydHNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYXBleGNoYXJ0c1wiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGNoYXJ0OiB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGZvcmVDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNTAwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHNob3c6IGZhbHNlLFxuICB9LFxuICBkYXRhTGFiZWxzOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSxcbiAgeGF4aXM6IHtcbiAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgYXhpc0JvcmRlcjoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzYwMF0sXG4gICAgfSxcbiAgICBheGlzVGlja3M6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs2MDBdLFxuICAgIH0sXG4gICAgY2F0ZWdvcmllczogW1xuICAgICAgXCIyMDIxLTExLTA3VDAwOjAwLjAwMFpcIixcbiAgICAgIFwiMjAyMS0xMS0wOFQwMDowMC4wMDBaXCIsXG4gICAgICBcIjIwMjEtMTEtMDlUMDA6MDAuMDAwWlwiLFxuICAgICAgXCIyMDIxLTExLTEwVDAwOjAwLjAwMFpcIixcbiAgICAgIFwiMjAyMS0xMS0xMVQwMDowMC4wMDBaXCIsXG4gICAgICBcIjIwMjEtMTEtMTJUMDA6MDAuMDAwWlwiLFxuICAgICAgXCIyMDIxLTExLTEzVDAwOjAwLjAwMFpcIixcbiAgICBdLFxuICAgIGZpbGw6IHtcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIHR5cGU6IFwiZ3JhZGllbnRcIixcbiAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgIHNoYWRlOiBcImRhcmtcIixcbiAgICAgICAgb3BhY2l0eUZyb206IDAuOCxcbiAgICAgICAgb3BhY2l0eVRvOiAwLjMsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59IGFzIEFwZXhPcHRpb25zO1xuXG5jb25zdCBzZXJpZXMgPSBbXG4gIHsgbmFtZTogXCJzZXJpZXMxXCIsIGRhdGE6IFszMSwgMTIwLCAxMCwgMjgsIDYxLCAxOCwgMTA5XSB9LFxuXSBhcyBBcnJheTxhbnk+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgaD1cIjEwMHZoXCI+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIgbXk9XCI2XCIgbWF4V2lkdGg9ezE0ODB9IG14PVwiYXV0b1wiIHB4PVwiNlwiPlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxTaW1wbGVHcmlkIGZsZXg9XCIxXCIgZ2FwPVwiNFwiIG1pbkNoaWxkV2lkdGg9XCIzMjBweFwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgIDxCb3ggcD1cIjhcIiBiZz1cImdyYXkuODAwXCIgYm9yZGVyUmFkaXVzPXs4fSBwYj1cIjRcIj5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtYj1cIjRcIj5cbiAgICAgICAgICAgICAgSW5zY3JpdG9zIGRhIHNlbWFuYVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPVwiYXJlYVwiIGhlaWdodD17MTYwfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggcD1cIjhcIiBiZz1cImdyYXkuODAwXCIgYm9yZGVyUmFkaXVzPXs4fT5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBtYj1cIjRcIj5cbiAgICAgICAgICAgICAgSW5zY3JpdG9zIGRhIHNlbWFuYVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPVwiYXJlYVwiIGhlaWdodD17MTYwfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n  colors: {\n    gray: {\n      \"900\": \"#181b23\",\n      \"800\": \"#1f2029\",\n      \"700\": \"#353646\",\n      \"600\": \"#4b4d63\",\n      \"500\": \"#616480\",\n      \"400\": \"#797d9a\",\n      \"300\": \"#9699b0\",\n      \"200\": \"#b3b5c6\",\n      \"100\": \"#d1d2dc\",\n      \"50\": \"#eeeef2\"\n    }\n  },\n  fonts: {\n    heading: \"Roboto\",\n    body: \"Roboto\"\n  },\n  styles: {\n    global: {\n      body: {\n        bg: \"gray.900\",\n        color: \"gray.50\"\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ28vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsidGhlbWUiLCJleHRlbmRUaGVtZSIsImNvbG9ycyIsImdyYXkiLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUdDLDZEQUFXLENBQUM7QUFDL0JDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFDSixhQUFPLFNBREg7QUFFSixhQUFPLFNBRkg7QUFHSixhQUFPLFNBSEg7QUFJSixhQUFPLFNBSkg7QUFLSixhQUFPLFNBTEg7QUFNSixhQUFPLFNBTkg7QUFPSixhQUFPLFNBUEg7QUFRSixhQUFPLFNBUkg7QUFTSixhQUFPLFNBVEg7QUFVSixZQUFNO0FBVkY7QUFEQSxHQUR1QjtBQWUvQkMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxRQURKO0FBRUxDLFFBQUksRUFBRTtBQUZELEdBZndCO0FBbUIvQkMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQUNORixVQUFJLEVBQUU7QUFDSkcsVUFBRSxFQUFFLFVBREE7QUFFSkMsYUFBSyxFQUFFO0FBRkg7QUFEQTtBQURGO0FBbkJ1QixDQUFELENBQXpCIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy90aGVtZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBncmF5OiB7XG4gICAgICBcIjkwMFwiOiBcIiMxODFiMjNcIixcbiAgICAgIFwiODAwXCI6IFwiIzFmMjAyOVwiLFxuICAgICAgXCI3MDBcIjogXCIjMzUzNjQ2XCIsXG4gICAgICBcIjYwMFwiOiBcIiM0YjRkNjNcIixcbiAgICAgIFwiNTAwXCI6IFwiIzYxNjQ4MFwiLFxuICAgICAgXCI0MDBcIjogXCIjNzk3ZDlhXCIsXG4gICAgICBcIjMwMFwiOiBcIiM5Njk5YjBcIixcbiAgICAgIFwiMjAwXCI6IFwiI2IzYjVjNlwiLFxuICAgICAgXCIxMDBcIjogXCIjZDFkMmRjXCIsXG4gICAgICBcIjUwXCI6IFwiI2VlZWVmMlwiLFxuICAgIH0sXG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgaGVhZGluZzogXCJSb2JvdG9cIixcbiAgICBib2R5OiBcIlJvYm90b1wiLFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6IFwiZ3JheS45MDBcIixcbiAgICAgICAgY29sb3I6IFwiZ3JheS41MFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-apexcharts");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_react-icons_ri_index_esm_js","src_components_Header_tsx-src_components_Sidebar_tsx"], function() { return __webpack_exec__("./src/pages/dashboard.tsx"); });
module.exports = __webpack_exports__;

})();