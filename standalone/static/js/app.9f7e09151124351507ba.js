webpackJsonp([1],{"1+hz":function(t,e){},"7wJl":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPmxvZ28tc3F1YXJlPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00OTUuMTk5IDI4MC4yMjVMNDY3LjY0IDE5NS40MSA0MTMuMDIzIDI3LjMxM2MtMi44MS04LjY0OC0xNS4wNDYtOC42NDgtMTcuODU2IDBMMzQwLjU0OCAxOTUuNDFIMTU5LjE4MWwtNTQuNjItMTY4LjA5N2MtMi44MDktOC42NDgtMTUuMDQ1LTguNjQ4LTE3Ljg1NiAwTDMyLjA4OCAxOTUuNDEgNC41MzEgMjgwLjIyNWExOC43NzUgMTguNzc1IDAgMCAwIDYuODIgMjAuOTkybDIzOC41MTMgMTczLjI5IDIzOC41MTUtMTczLjI5YTE4Ljc3NyAxOC43NzcgMCAwIDAgNi44Mi0yMC45OTIiIGZpbGw9IiNGQzZEMjYiLz48cGF0aCBkPSJNMjQ5Ljg2NSA0NzQuNTA2bDkwLjY4NC0yNzkuMDk2SDE1OS4xOGw5MC42ODQgMjc5LjA5NnoiIGZpbGw9IiNFMjQzMjkiLz48cGF0aCBkPSJNMjQ5Ljg2NSA0NzQuNTA2TDE1OS4xOCAxOTUuNDFIMzIuMDg5bDIxNy43NzYgMjc5LjA5NXoiIGZpbGw9IiNGQzZEMjYiLz48cGF0aCBkPSJNMzIuMDg5IDE5NS40MWwtMjcuNTYgODQuODE1YTE4Ljc3MyAxOC43NzMgMCAwIDAgNi44MjIgMjAuOTkxbDIzOC41MTQgMTczLjI5TDMyLjA4OSAxOTUuNDF6IiBmaWxsPSIjRkNBMzI2Ii8+PHBhdGggZD0iTTMyLjA4OSAxOTUuNDExSDE1OS4xOEwxMDQuNTYgMjcuMzE0Yy0yLjgxLTguNjUtMTUuMDQ2LTguNjUtMTcuODU1IDBMMzIuMDg5IDE5NS40MXoiIGZpbGw9IiNFMjQzMjkiLz48cGF0aCBkPSJNMjQ5Ljg2NSA0NzQuNTA2bDkwLjY4NC0yNzkuMDk1SDQ2Ny42NEwyNDkuODY1IDQ3NC41MDZ6IiBmaWxsPSIjRkM2RDI2Ii8+PHBhdGggZD0iTTQ2Ny42NCAxOTUuNDFsMjcuNTU5IDg0LjgxNWExOC43NzMgMTguNzczIDAgMCAxLTYuODIxIDIwLjk5MWwtMjM4LjUxNCAxNzMuMjlMNDY3LjY0IDE5NS40MXoiIGZpbGw9IiNGQ0EzMjYiLz48cGF0aCBkPSJNNDY3LjY0IDE5NS40MTFIMzQwLjU0OGw1NC42MTktMTY4LjA5N2MyLjgxLTguNjUgMTUuMDQ3LTguNjUgMTcuODU2IDBMNDY3LjY0IDE5NS40MXoiIGZpbGw9IiNFMjQzMjkiLz48L2c+PC9zdmc+"},FpsY:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("FpsY")}function n(t){s("1+hz")}Object.defineProperty(e,"__esModule",{value:!0});var r=s("//Fk"),i=s.n(r),o=s("7+uW"),c=s("PJh5"),l=s.n(c),u=s("ddj6"),d=s.n(u),h=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"3";d.a.defaults={baseUrl:s+"://"+t+"/api/v"+a,token:e,protocol:s,apiVersion:a,config:{headers:{"PRIVATE-TOKEN":e}}},d.a.preparedGet=function(t){var e=""+d.a.defaults.baseUrl+t,s=d.a.defaults.config;return d.a.get(e,s)}},p=function(t){return null==t||""===t?i.a.reject(new Error("nameWithNamespace is empty")):d.a.preparedGet("/projects/"+t.replace(/\//g,"%2F"))},j=function(t,e){if(null==t||null==e)return i.a.reject(new Error("projectId or branchName are empty"));var s=""+e.replace(/\//g,"%2F");return d.a.preparedGet("/projects/"+t+"/repository/branches/"+s)},m=function(t,e){return null==t||null==e?i.a.reject(new Error("projectId or commitId are empty")):d.a.preparedGet("/projects/"+t+"/repository/commits/"+e+"/builds")},f=function(t,e){return null==t||null==e?i.a.reject(new Error("projectId or pipelineId are empty")):d.a.preparedGet("/projects/"+t+"/pipelines/"+e)},g=function(t){return null==t?i.a.reject(new Error("projectId is empty")):d.a.preparedGet("/projects/"+t+"/repository/tags")},v=function(t,e){return null==t||null==e||""===e?i.a.reject(new Error("projectId or branchName are empty")):d.a.preparedGet("/projects/"+t+"/repository/commits/"+(""+e).replace(/\//g,"%2F"))},b={setBaseData:h},_=function(t){return null==t||""===t?i.a.reject(new Error("Needs to pass a config file url")):d.a.get(t).then(function(t){return t.data&&t.data.dashboard?t.data.dashboard:i.a.reject(new Error("Invalid file"))})},N=s("d7EF"),M=s.n(N),C=function(t){return null==t||""===t?i.a.reject(new Error("Needs to pass a file url")):d.a.get(t).then(function(t){return t.data})},w=function(t){var e=[],s=t.split(",");for(var a in s)try{if(!s[a].includes("/"))throw Error("Project pattern isn't correct");var n=s[a].substring(0,s[a].lastIndexOf("/")),r=s[a].substring(s[a].lastIndexOf("/")+1),i="master";if(r.includes(":")){var o=r.split(":"),c=M()(o,2);r=c[0],i=c[1]}e.push({description:"",namespace:n,project:r,branch:i})}catch(t){console.log(t)}return e},E=function(t){return d.a.get(t+"/params").then(function(t){return t.data})},I=function(t,e){e||(e=window.location.href),t=t.replace(/[[]]/g,"\\$&");var s=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=s.exec(e);if(!a)return null;if(!a[2])return"";var n=decodeURIComponent(a[2].replace(/\+/g," "));return"true"===n||"false"!==n&&n},k=function(t){if(Array.isArray(t)&&0!==t.length)return t[0]},S={name:"error",props:["onError"],computed:{show:function(){return this.onError&&null!=this.onError.message&&""!==this.onError.message},message:function(){return this.onError&&this.onError.message?this.onError.message:""}}},z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"this.show"}],staticClass:"row",attrs:{id:"gcim-error"}},[s("div",{staticClass:"eight wide column centered "},[s("div",{staticClass:"ui red message"},[t._v("\n      "+t._s(this.message)+"\n    ")])])])},D=[],y={render:z,staticRenderFns:D},x=y,L=s("VU/8"),T=L(S,x,!1,null,null,null),P=T.exports,B={name:"painel",components:{Error:P},props:["status","interval","onError"],computed:{localStatus:function(){var t=this;return this.painelStatus.map(function(e){if(null==t.status)return e;var s=t.status.filter(function(t){return t.text===e.text});if(s.length>0){var a=s[0];e.total=a.total}return e})},filterAnimation:function(){return"opa "+this.interval+"s steps(1, end) infinite reverse"},maskAnimation:function(){return"opa "+this.interval+"s steps(1, end) infinite"},spinnerAnimation:function(){return"rota "+this.interval+"s linear infinite"}},data:function(){return{painelStatus:[{text:"success",color:"#00ad68",total:0},{text:"failed",color:"#e7484d",total:0},{text:"running",color:"#2d9fd8",total:0},{text:"pending",color:"#ffb541",total:0},{text:"canceled",color:"#aaaaaa",total:0}]}}},O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui grid card",staticStyle:{"background-color":"white"},attrs:{id:"gcim-painel"}},[t._m(0),t._v(" "),s("div",{staticClass:"ui row centered",staticStyle:{padding:"1em"}},[s("error",{attrs:{onError:t.onError}})],1),t._v(" "),t._l(t.localStatus,function(e){return s("div",{key:e.color,staticClass:"ui row"},[s("div",{staticStyle:{margin:"1em"}},[s("span",{staticStyle:{"font-size":"5em"}},[t._v(t._s(e.total))]),t._v(" "),s("span",{staticStyle:{"font-size":"1.1em"},style:{color:e.color}},[t._v(t._s(e.text.toUpperCase()))])])])}),t._v(" "),s("div",{staticClass:"ui row centered"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"pie spinner",style:{animation:t.spinnerAnimation}}),t._v(" "),s("div",{staticClass:"pie filler",style:{animation:t.filterAnimation}}),t._v(" "),s("div",{staticClass:"mask",style:{animation:t.maskAnimation}})])]),t._v(" "),t._m(1)],2)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui row centered",staticStyle:{"padding-bottom":"2em"}},[a("img",{staticClass:"logo",attrs:{src:s("7wJl")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui row centered"},[s("h5",[s("a",{attrs:{target:"_blank",href:"https://github.com/emilianoeloi/gitlab-ci-dashboard"}},[t._v("\n        GitLab CI Dashboard\n      ")])])])}],F={render:O,staticRenderFns:A},V=F,U=s("VU/8"),G=a,Q=U(B,V,!1,G,null,null),R=Q.exports,Y={name:"invalid-config",props:["onInvalid"],data:function(){return{headerText:"Invalid Configuration"}}},W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.onInvalid,expression:"onInvalid"}],staticClass:"row",attrs:{id:"gcim-invalid-config"}},[s("div",{staticClass:"eight wide column centered "},[s("div",{staticClass:"ui attached message"},[s("div",{staticClass:"header"},[t._v(t._s(t.headerText))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui attached fluid segment"},[s("p",[t._v("\n        Make sure all configs are set.\n        The following properties must be defined in the URL.\n      ")]),t._v(" "),s("p",[t._v("\n        Check "),s("a",{attrs:{href:"https://github.com/emilianoeloi/gitlab-ci-dashboard/blob/master/README.md",target:"_blank"}},[t._v("README")]),t._v(" for more config options.\n      ")]),t._v(" "),s("ul",[s("li",[t._v("gitlab")]),t._v(" "),s("li",[t._v("token")]),t._v(" "),s("li",[t._v("projects")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui bottom attached warning message"},[s("p",[t._v("Ex: https://emilianoeloi.github.io/gitlab-ci-dashboard/?gitlab=gitlab.example.com&token=12345&projects=namespace/project1,namespace/project1/branch,namespace/project2")])])}],X={render:W,staticRenderFns:Z},H=X,J=s("VU/8"),q=J(Y,H,!1,null,null,null),K=q.exports,$={name:"loading",props:["onLoading"],data:function(){return{loadingText:"",loading:!1}}},tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"row",attrs:{id:"gcim-loading"}},[s("div",{staticClass:"ui large active centered inline loader"})])},et=[],st={render:tt,staticRenderFns:et},at=st,nt=s("VU/8"),rt=nt($,at,!1,null,null,null),it=rt.exports,ot={name:"builds",props:["onBuilds","sortedBuilds","hideSuccessCards","hideVersion"],data:function(){return{gitlab:""}},methods:{isSuccessCard:function(t){return"success"===t.status},showVersion:function(t){return!this.hideVersion&&null!=t.tag_name},statusClass:function(t){return"card "+t.status+" "+this.positionClass(t)},positionClass:function(t){var e=(t.lastStatus,t.status);return this.hideSuccessCards?"success"===e?"bounce-out-top":"bounce-in-top":""}}},ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row",staticStyle:{margin:"1em 0 1em 1em"},attrs:{id:"gcim-builds"}},[s("div",{staticClass:"sixteen wide column"},[s("div",{staticClass:"ui stackable cards"},t._l(t.sortedBuilds,function(e){return s("div",{key:e.id,class:t.statusClass(e)},[s("div",{staticClass:"content"},[s("div",{staticClass:"header project-name"},[s("a",{attrs:{target:"_blank",href:e.link_to_branch}},[t._v(t._s(e.project)+" ("+t._s(e.branch)+")")])]),t._v(" "),s("div",{staticClass:"meta"},[t._v(t._s(e.namespace_name))]),t._v(" "),t.isSuccessCard(e)?t._e():s("div",{staticClass:"description"},[t._v("\n            "+t._s(e.commit_message)+"\n          ")]),t._v(" "),t.isSuccessCard(e)?t._e():s("div",{staticClass:"meta"},[t._v(t._s(e.author))]),t._v(" "),!t.isSuccessCard(e)&&t.showVersion(e)?s("div",{staticClass:"ui center floated basic button"},[s("h1",{staticStyle:{"font-size":"1.5em"}},[t._v(t._s(e.tag_name))])]):t._e(),t._v(" "),t.isSuccessCard(e)&&t.showVersion(e)?s("div",{staticClass:"ui center floated basic button"},[s("h1",{staticStyle:{"font-size":"2.5em"}},[t._v("\n              "+t._s(e.tag_name)+"\n            ")])]):t._e()]),t._v(" "),s("div",{staticClass:"extra content"},[s("span",{staticClass:"left floated hashtag build-id"},[s("a",{attrs:{target:"_blank",href:e.link_to_branch}},[s("i",{staticClass:"hashtag icon"}),t._v("\n              "+t._s(e.id)+"\n            ")])]),t._v(" "),s("span",{staticClass:"right floated calendar"},[s("i",{staticClass:"calendar icon"}),t._v("\n            "+t._s(e.started_at)+"\n          ")])])])}))])])},lt=[],ut={render:ct,staticRenderFns:lt},dt=ut,ht=s("VU/8"),pt=ht(ot,dt,!1,null,null,null),jt=pt.exports,mt={name:"app",components:{Painel:R,InvalidConfig:K,Loading:it,Builds:jt},props:["onLoading","onInvalid","onError","onBuilds","sortedBuilds","status","hideSuccessCards","interval","hideVersion"],data:function(){return{projects:[]}}},ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui grid",attrs:{id:"app"}},[s("div",{staticClass:"two column row",attrs:{id:"gcim-app"}},[s("div",{staticClass:"thirteen wide column"},[s("invalid-config",{attrs:{onInvalid:t.onInvalid}}),t._v(" "),s("loading",{attrs:{onLoading:t.onLoading}}),t._v(" "),s("builds",{attrs:{onBuilds:t.onBuilds,sortedBuilds:t.sortedBuilds,status:t.status,hideSuccessCards:t.hideSuccessCards,hideVersion:t.hideVersion}})],1),t._v(" "),s("div",{staticClass:"three wide column"},[s("painel",{attrs:{status:t.status,interval:t.interval,onError:t.onError}})],1)])])},gt=[],vt={render:ft,staticRenderFns:gt},bt=vt,_t=s("VU/8"),Nt=n,Mt=_t(mt,bt,!1,Nt,null,null),Ct=Mt.exports;o.a.config.productionTip=!1;var wt=new o.a({el:"#app",data:function(){return{configFile:null,projects:null,onBuilds:[],lastTags:[],lastPipelines:[],onPipelines:[],nonSuccessBuilds:[],statusQueue:[],status:[],token:null,gitlab:null,projectsParam:null,projectsFile:null,gitlabciProtocol:"https",hideSuccessCards:!1,apiVersion:"3",hideVersion:!1,repositoriesParams:[],repositories:null,onLoading:!1,onInvalid:!1,onError:null,debug:"",interval:60,wrongProjects:[]}},computed:{sortedBuilds:function(){if(null==this.onBuilds)return[];var t=this.onBuilds.sort(function(t,e){return t.id<e.id?1:t.id>e.id?-1:0});return this.hideSuccessCards?t.filter(function(t){return"success"!==t.status}):t}},created:function(){var t=this;this.loadConfig().then(function(){t.standalone?E(window.location.origin).then(function(e){t.gitlab=e.gitlab,t.token=e.token,t.ref=e.ref,t.projectsFile="standalone",t.projects=e.projects,t.gitlabciProtocol=e.gitlabciProtocol,t.hideSuccessCards=e.hideSuccessCards,t.apiVersion=e.apiVersion,t.hideVersion=e.hideVersion,t.interval=e.interval,t.startup()}):t.startup()})},methods:{loadConfig:function(){var t=this;return this.configFile=I("config"),_(this.configFile).then(function(e){var s=e.config,a=e.projects;t.standalone=s.standalone,t.gitlab=s.gitlab,t.token=s.token,t.ref=s.ref,t.projects=a,t.projectsFile=s.projectsFile,t.gitlabciProtocol=s.gitlabciProtocol||"https",t.hideSuccessCards=s.hideSuccessCards,t.apiVersion=s.apiVersion||"3",null==t.hideSuccessCards&&(t.hideSuccessCards=!1),t.hideVersion=s.hideVersion,null==t.hideVersion&&(t.hideVersion=!1),t.interval=s.interval||60}).catch(function(e){return t.standalone=I("standalone"),t.gitlab=I("gitlab"),t.token=I("token"),t.ref=I("ref"),t.projectsParam=I("projects"),t.projectsFile=I("projectsFile"),t.gitlabciProtocol=I("gitlabciProtocol")||"https",t.hideSuccessCards=I("hideSuccessCards"),t.apiVersion=I("apiVersion")||"3",null==t.hideSuccessCards&&(t.hideSuccessCards=!1),t.hideVersion=I("hideVersion"),null==t.hideVersion&&(t.hideVersion=!1),t.interval=I("interval")||60,i.a.resolve()})},loadRepositories:function(t){if(null!=t){var e=[];for(var s in t)try{var a=t[s];this.debug+=a;var n=a.namespace,r=a.project,i=a.branch,o=n+"/"+r,c=r;e.push({nameWithNamespace:o,projectName:c,branch:i||"master"})}catch(t){this.handlerError.bind(this)({message:"Wrong format",response:{status:500}})}this.repositories=e}},loadProjects:function(t){var e=this;this.loadRepositories(t),this.setupDefaults(b),this.fetchProjects(),setInterval(function(){e.handlerError(),e.fetchProjects()},1e3*this.interval),this.handlerStatus()},startup:function(){var t=this;if(!this.configValid())return void(this.onInvalid=!0);console.info("init"),this.standalone||Array.isArray(this.projects)?(console.info("standalone or this.projes is array"),this.loadProjects(this.projects)):this.projectsParam?(console.info("projectsParam"),this.projects=w(this.projectsParam),this.loadProjects(this.projects)):(console.info("projects from file"),C(this.projectsFile).then(function(e){return t.loadProjects(e)}))},handlerError:function(t){if(null==t)return this.onError={code:0,message:""},void(this.wrongProjects=[]);this.onError={code:1,message:"\n          Something went wrong.\n          Make sure the configuration is ok and your Gitlab is up and running.\n          Details: "+t.message+"\n        "},"Wrong format"===t.message&&(this.onError={code:2,message:"Wrong projects format! Try: 'namespace/project' or 'namespace/project/branch'"}),"Network Error"===t.message&&(this.onError={code:3,message:"Network Error. Please check the Gitlab domain."}),t.response&&401===t.response.status&&(this.onError={code:4,message:"Unauthorized Access. Please check your token."}),"404 - Not Found."===t.message&&(this.wrongProjects.push(t.project),this.onError={code:5,message:"Project(s) not found: "+this.wrongProjects.map(function(t){return" "+t})})},configValid:function(){var t=this.projectsFile,e=this.token,s=this.gitlab,a=this.projects;return!!this.configFile||(null!=a||null!=t)&&null!=e&&null!=s},setupDefaults:function(t){var e=this.gitlab,s=this.token,a=this.gitlabciProtocol,n=this.apiVersion;t.setBaseData(e,s,a,n)},fetchProjects:function(t){var e=this,s=this.repositories;s&&s.forEach(function(t){e.onLoading=!0,p(t.nameWithNamespace).then(function(s){e.onLoading=!1,"3"===e.apiVersion?e.fetchBuilds({repo:t,project:s.data}).then(e.loadBuilds.bind(e)):e.fetchPipelines({repo:t,project:s.data})}).catch(function(s){s.project=t.nameWithNamespace,e.handlerError(s)})})},addStatusQueue:function(t,e){this.statusQueue.push({status:t,action:e})},handlerStatus:function(t){var e=this;t&&this.updateStatus(t),setTimeout(function(){e.handlerStatus(e.statusQueue.shift())},500)},updateStatus:function(t){var e=this.status.filter(function(e){return t.status===e.text});if(0===e.length)return void this.status.push({text:t.status,total:1});var s=e[0];"increase"===t.action?s.total++:"decrease"===t.action&&s.total--},getLinkToBranch:function(t,e){return this.gitlabciProtocol+"://"+this.gitlab+"/"+t.namespace.name+"/"+t.name+"/tree/"+e.branch},loadBuilds:function(t,e,s,a,n){var r=!1,i=k(e);if(i){var o=l()(i.started_at).fromNow();for(var c in t){var u=t[c];u.project===s.projectName&&u.branch===s.branch&&(r=!0,u.status!==i.status&&(this.addStatusQueue(u.status,"decrease"),this.addStatusQueue(i.status,"increase")),u.lastStatus=u.status,u.status=i.status,u.id=i.id,u.started_at=o,u.author=i.commit.author_name,u.commit_message=i.commit.message,u.project_path=a.path_with_namespace,u.branch=s.branch,u.tag_name=n&&n.name,u.namespace_name=a.namespace.name,u.link_to_branch=this.getLinkToBranch(a,s))}if(!r){this.addStatusQueue(i.status,"increase");var d={project:s.projectName,id:i.id,status:i.status,lastStatus:"",started_at:o,author:i.commit.author_name,commit_message:i.commit.message,project_path:a.path_with_namespace,branch:s.branch,tag_name:n&&n.name,namespace_name:a.namespace.name,link_to_branch:this.getLinkToBranch(a,s)};t.push(d)}}},fetchPipelines:function(t){var e=this,s=!1;if(t){var a=t.repo,n=t.project;v(n.id,a.branch).then(function(t){var r=t.data,i=r.message,o=r.author_name,c=r.last_pipeline.id;g(n.id).then(function(t){var r=k(t.data);f(n.id,c).then(function(t){var c=t.data;if(e.onBuilds.forEach(function(t){t.project===a.projectName&&t.branch===a.branch&&(s=!0,c.status!==t.status&&(e.addStatusQueue(t.status,"decrease"),e.addStatusQueue(c.status,"increase")),t.project=a.projectName,t.status=c.status,t.lastStatus=t.status,t.id=c.id,t.started_at=l()(c.started_at).fromNow(),t.author=o,t.commit_message=i,t.project_path="b.project_path",t.branch=a.branch,t.tag_name=r&&r.name,t.namespace_name=n.namespace.name,t.link_to_branch=e.getLinkToBranch(n,a))}),!s){e.addStatusQueue(c.status,"increase");var u={};u.project=a.projectName,u.status=c.status,u.lastStatus=u.status,u.id=c.id,u.started_at=l()(c.started_at).fromNow(),u.author=o,u.commit_message=i,u.project_path="buildToAdd.project_path",u.branch=a.branch,u.tag_name=r&&r.name,u.namespace_name=n.namespace.name,u.link_to_branch=e.getLinkToBranch(n,a),e.onBuilds.push(u)}}).catch(e.handlerError.bind(e))}).catch(e.handlerError.bind(e))}).catch(this.handlerError.bind(this))}},handlerBranch:function(t,e,s,a){var n=this;return m(s.id,a).then(function(a){var r=a.data;n.handlerBuilds(t,r,e,s).then(function(a){n.loadBuilds(t,r,e,s,a)})}).catch(this.handlerError.bind(this))},handlerBuilds:function(t,e,s,a){return g(a.id).then(function(t){var e=k(t.data);return i.a.resolve(e)}).catch(this.handlerError.bind(this))},fetchBuilds:function(t){var e=this,s=this.onBuilds;if(t){var a=t.repo,n=t.project;return j(n.id,a.branch).then(function(t){var r=t.data.commit.id;e.handlerBranch(s,a,n,r)}).catch(this.handlerError.bind(this))}}},template:'<App v-bind:onLoading="onLoading" v-bind:onInvalid="onInvalid" v-bind:onError="onError" v-bind:onBuilds="onBuilds" v-bind:sortedBuilds="sortedBuilds" v-bind:status="status" v-bind:hideSuccessCards="hideSuccessCards"v-bind:interval="interval"v-bind:hideVersion="hideVersion"/>',components:{App:Ct}});e.default=wt},uslO:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.9f7e09151124351507ba.js.map