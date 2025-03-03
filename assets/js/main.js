import{l as e,p as a,f as t}from"./main2.js";const o=e.getModuleLogger("background"),n={autoPlay:!0,background:{color:{value:"#000000"},image:"",position:"",repeat:"",size:"",opacity:1},backgroundMask:{composite:"destination-out",cover:{opacity:1,color:{value:""}},enable:!1},clear:!0,defaultThemes:{},delay:0,fullScreen:{enable:!0,zIndex:0},detectRetina:!0,duration:0,fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onDiv:{selectors:[],enable:!1,mode:[],type:"circle"},onHover:{enable:!0,mode:"repulse",parallax:{enable:!1,force:2,smooth:10}},resize:{delay:.5,enable:!0}},modes:{trail:{delay:1,pauseOnStop:!1,quantity:1},attract:{distance:200,duration:.4,easing:"ease-out-quad",factor:1,maxSpeed:20,speed:1},bounce:{distance:200},bubble:{distance:200,duration:.4,mix:!1,divs:{distance:200,duration:.4,mix:!1,selectors:[]}},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:100,links:{blink:!1,consent:!1,opacity:1}},push:{default:!0,groups:[],quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:4,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:4,easing:"ease-out-quad",selectors:[]}},slow:{factor:3,radius:200},particle:{replaceCursor:!1,pauseOnStop:!1,stopDelay:0},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},manualParticles:[],particles:{bounce:{horizontal:{value:1},vertical:{value:1}},collisions:{absorb:{speed:1},bounce:{horizontal:{value:1},vertical:{value:1}},enable:!1,maxSpeed:5,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:["#8323a8"],animation:{h:{count:0,enable:!0,speed:.5,decay:0,delay:0,sync:!1,offset:0},s:{count:0,enable:!0,speed:.3,decay:0,delay:0,sync:!1,offset:0},l:{count:0,enable:!0,speed:.3,decay:0,delay:0,sync:!1,offset:0}}},effect:{close:!0,fill:!0,options:{},type:[]},groups:{},move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:3e3,y:3e3}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:{},direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:5},path:{clamp:!0,delay:{value:0},enable:!1,options:{}},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!0,size:!1,speed:.3,spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fill:{}},vibrate:!1,warp:!0},number:{density:{enable:!0,width:1920,height:1080},limit:{mode:"delete",value:0},value:80},opacity:{value:.5,animation:{count:0,enable:!1,speed:.3,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{close:!0,fill:!0,options:{},type:"circle"},size:{value:{min:1,max:3},animation:{count:0,enable:!0,speed:.3,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},stroke:{width:3},zIndex:{value:-2,opacityRate:1,sizeRate:1,velocityRate:1},destroy:{bounds:{},mode:"none",split:{count:1,factor:{value:3},rate:{value:{min:4,max:9}},sizeOffset:!0,particles:{}}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:5},tilt:{value:0,animation:{enable:!1,speed:.1,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},life:{count:0,delay:{value:0,sync:!1},duration:{value:0,sync:!1}},rotate:{value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",path:!1},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!1},enable:!1,opacity:1,rotation:{value:45},width:5},links:{blink:!1,color:{value:["#fc2e9b","#8323a8"]},consent:!1,distance:150,enable:!0,frequency:1,opacity:.25,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:5,warp:!0},repulse:{value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],smooth:!0,style:{},themes:[],zLayers:100,key:"basic",name:"Basic",motion:{disable:!1,reduce:{factor:4,value:!0}}};o.info("Background animation module loaded"),document.addEventListener("DOMContentLoaded",(()=>{!async function(){o.debug("Initializing tsParticles background");try{if("undefined"==typeof tsParticles)return o.error("tsParticles not found - perhaps blocked by CSP."),void a.resourcesComplete();const i=setTimeout((()=>{o.warn("tsParticles loading timeout reached, continuing without particles"),a.resourcesComplete()}),2e3);try{await tsParticles.load({id:"tsparticles",options:n}),clearTimeout(i),o.info("tsParticles background loaded successfully")}catch(e){o.warn("Error loading tsParticles with full config, trying simple fallback",e);try{await tsParticles.load({id:"tsparticles",options:defaultConfig}),clearTimeout(i),o.info("tsParticles loaded with fallback configuration")}catch(t){o.error("Fallback configuration also failed",t),clearTimeout(i)}}a.resourcesComplete()}catch(i){o.error("Critical error initializing tsParticles:",i),a.resourcesComplete()}}()})),window.location.search.includes("test-firebase=true")&&async function(){try{console.log("Testing Firebase connection...");const e=t.db;return console.log("Firestore instance created successfully:",!!e),console.log("Firebase connection test completed successfully"),!0}catch(e){return console.error("Firebase connection test failed:",e),!1}}().then((e=>{e?console.log("%c Firebase connection successful ✅","background: #4CAF50; color: white; padding: 4px 8px; border-radius: 4px;"):console.log("%c Firebase connection failed ❌","background: #F44336; color: white; padding: 4px 8px; border-radius: 4px;")}));
