(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),o=a(0),c=a.n(o),l=a(10),m=a(16),i=a(2),s=a(1),u=a(11),h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("mesh",{position:[0,1.25,0],rotation:[0,.25*Math.PI,0]},c.a.createElement("coneBufferGeometry",{attach:"geometry",args:[1.6,.5,4]}),c.a.createElement("meshStandardMaterial",{attach:"material",color:"#d8342b",roughness:.3})),c.a.createElement("mesh",{position:[0,.5,0]},c.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,1,2]}),c.a.createElement("meshStandardMaterial",{attach:"material",color:"#dec7c7",roughness:.5})))},E=function(){return c.a.createElement("mesh",null,c.a.createElement("boxBufferGeometry",{attach:"geometry",args:[5,.1,5]}),c.a.createElement("meshStandardMaterial",{attach:"material",color:"green",roughness:.45}))},f=function(){return c.a.createElement("mesh",{position:[0,.1,1.5]},c.a.createElement("boxBufferGeometry",{attach:"geometry",args:[1,.1,2]}),c.a.createElement("meshStandardMaterial",{attach:"material",color:"#c7ae87",roughness:.6}))},d=function(){var e=[0,3,0],t=Object(o.useRef)(),a=Object(o.useRef)();return Object(i.c)((function(){var e=.001*Date.now(),n=1*Math.cos(e),r=1*Math.sin(e);t.current.position.x=n,t.current.position.z=r,a.current.position.x=n,a.current.position.z=r})),c.a.createElement(c.a.Fragment,null,c.a.createElement("mesh",{ref:t,position:e},c.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.25,32,32]}),c.a.createElement("meshStandardMaterial",{attach:"material",color:"#d8a921"})),c.a.createElement("spotLight",{ref:a,intensity:.1,position:e,castShadow:!0}))};function g(){var e=r()(["\n    body {\n        font-family: sans-serif;\n        margin: 0;\n        background: rgb(175, 175, 255);\n    }\n    \n    html,\n    body,\n    #root {\n        width: 100%;\n        height: 100%;\n    }\n"]);return g=function(){return e},e}Object(i.b)({OrbitControls:u.a});var b=Object(m.a)(g());function p(){var e=Object(o.useRef)(),t=Object(i.d)(),a=t.camera,n=t.gl;return Object(i.c)((function(){return e.current.update()})),c.a.createElement("orbitControls",{ref:e,args:[a,n.domElement],enableDamping:!0,dampingFactor:.1,rotateSpeed:.5})}function y(){return c.a.createElement(o.Fragment,null,c.a.createElement(b,null),c.a.createElement(i.a,{shadowMap:!0,camera:{position:new s.Vector3(0,3,7)}},c.a.createElement("ambientLight",{intensity:1}),c.a.createElement(d,null),c.a.createElement(h,null),c.a.createElement(E,null),c.a.createElement(f,null),c.a.createElement(p,null)))}var w=document.getElementById("root");Object(l.render)(c.a.createElement(y,null),w)}},[[29,1,2]]]);