"use strict";(self.webpackChunktest_front=self.webpackChunktest_front||[]).push([[37],{37:(F,d,n)=>{n.r(d),n.d(d,{JobListModule:()=>y});var l=n(808),p=n(459),t=n(223),m=n(520);let f=(()=>{class i{constructor(e){this.http=e}getData(){return this.http.get("../assets/data.json")}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function u(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._uU(2),t.qZA(),t.TgZ(3,"div",12),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).removeFilter(s)}),t.O4$(),t.TgZ(4,"svg",13),t._UZ(5,"path",14),t.qZA()()()}if(2&i){const e=r.$implicit;t.xp6(2),t.Oqu(e)}}function x(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"header",6)(1,"div",7),t.YNc(2,u,6,1,"div",8),t.qZA(),t.TgZ(3,"h1",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().clear()}),t._uU(4,"clear"),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.listOfFilter)}}function g(i,r){1&i&&(t.TgZ(0,"span",30),t._uU(1," NEW! "),t.qZA())}function h(i,r){1&i&&(t.TgZ(0,"span",31),t._uU(1," FEATURED "),t.qZA())}function b(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",28),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).addFilter(s)}),t.TgZ(1,"p"),t._uU(2),t.qZA()()}if(2&i){const e=r.$implicit;t.xp6(2),t.Oqu(e)}}const _=function(i){return{borderActive:i}};function v(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"article",15),t._UZ(1,"img",16),t.TgZ(2,"div",17)(3,"div",18),t._UZ(4,"img",19),t.TgZ(5,"div",20)(6,"p",21),t._uU(7),t.YNc(8,g,2,0,"span",22),t.YNc(9,h,2,0,"span",23),t.qZA(),t.TgZ(10,"h2",24),t._uU(11),t.qZA(),t.TgZ(12,"ul",25)(13,"li")(14,"a",26),t._uU(15),t.qZA()(),t.TgZ(16,"li")(17,"a",26),t._uU(18),t.qZA()(),t.TgZ(19,"li")(20,"a",26),t._uU(21),t.qZA()()()()(),t.TgZ(22,"div",27)(23,"div",28),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().addFilter(s.role)}),t.TgZ(24,"p"),t._uU(25),t.qZA()(),t.TgZ(26,"div",28),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().addFilter(s.level)}),t.TgZ(27,"p"),t._uU(28),t.qZA()(),t.YNc(29,b,3,1,"div",29),t.qZA()()()}if(2&i){const e=r.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(13,_,o.active)),t.xp6(1),t.Q6J("src",e.logo,t.LSH),t.xp6(3),t.Q6J("src",e.logo,t.LSH),t.xp6(3),t.hij(" ",e.company," "),t.xp6(1),t.Q6J("ngIf",e.new),t.xp6(1),t.Q6J("ngIf",e.featured),t.xp6(2),t.hij(" ",e.position," "),t.xp6(4),t.Oqu(e.postedAt),t.xp6(3),t.Oqu(e.contract),t.xp6(3),t.Oqu(e.location),t.xp6(4),t.Oqu(e.role),t.xp6(3),t.Oqu(e.level),t.xp6(1),t.Q6J("ngForOf",null==e?null:e.languages)}}const w=[{path:"",component:(()=>{class i{constructor(e){this.listDataService=e,this.active=!0,this.listOfJobs=[],this.listOfFilter=[],this.listOfJobsFilter=[]}ngOnInit(){this.listDataService.getData().subscribe(e=>{this.listOfJobs=e,this.listOfJobsFilter=this.listOfJobs})}addFilter(e){this.listOfFilter.includes(e)||this.listOfFilter.push(e),this.filterList()}removeFilter(e){this.listOfFilter=this.listOfFilter.filter(o=>o!==e),this.filterList()}filterList(){this.listOfJobsFilter=0!==this.listOfFilter.length?this.listOfJobs.filter(e=>this.listOfFilter.some(o=>e.languages.includes(o))||this.listOfFilter.includes(e.role)||this.listOfFilter.includes(e.level)):this.listOfJobs}clear(){this.listOfFilter=[],this.listOfJobsFilter=this.listOfJobs}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-job-list"]],decls:6,vars:2,consts:[[1,"bg-secondary","h-screen"],[1,"w-full","h-[20%]","header","z-10","flex","justify-center"],[1,"w-full","h-[80%]","relative","bg-secondary","border-solid","border-2","border-cyan-400"],["class","w-[95%] bg-white min-h-[20px] flex justify-between items-center gap-3 p-2 m-auto -mt-[20px] z-10 shadow-lg shadow-primary/30",4,"ngIf"],[1,"w-full","h-[90%]","mt-3","overflow-y-auto"],["class","w-[95%] bg-white h-auto relative p-5 mt-14 md:mt-6 mb-1 m-auto rounded-md shadow-lg shadow-primary/30 md:h-[120px] md:p-1",3,"ngClass",4,"ngFor","ngForOf"],[1,"w-[95%]","bg-white","min-h-[20px]","flex","justify-between","items-center","gap-3","p-2","m-auto","-mt-[20px]","z-10","shadow-lg","shadow-primary/30"],[1,"flex","items-center","flex-wrap","gap-3"],["class","w-[100px] ml-3 flex flex-row bg-secondary justify-start items-center h-[26px] relative",4,"ngFor","ngForOf"],[1,"text-primary","underline","mr-3","font-semibold","hover:cursor-pointer","text-[18px]",3,"click"],[1,"w-[100px]","ml-3","flex","flex-row","bg-secondary","justify-start","items-center","h-[26px]","relative"],[1,"text-primary","font-Spartan","ml-2"],["role","button",1,"bg-primary","text-white","w-[25px]","h-[25px]","mr-0","absolute","top-0","right-0","hover:bg-black","hover:cursor-pointer",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","3"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],[1,"w-[95%]","bg-white","h-auto","relative","p-5","mt-14","md:mt-6","mb-1","m-auto","rounded-md","shadow-lg","shadow-primary/30","md:h-[120px]","md:p-1",3,"ngClass"],["alt","","srcset","",1,"w-16","h-16","rounded-full","absolute","-top-8","md:hidden","ease-in-out","duration-300",3,"src"],[1,"w-full","h-full","flex","flex-col","justify-center","md:items-center","md:flex-row","md:gap-2"],[1,"flex","flex-col","border-b-2","border-gray-400","mt-3","md:flex-row","md:w-[60%]","md:mt-0","md:border-none","md:gap-10"],["alt","","srcset","",1,"rounded-full","hidden","md:block","md:w-20","md:h-20","md:ml-6","md:mt-2","ease-in-out","duration-300",3,"src"],[1,"flex","flex-col","gap-1"],[1,"font-bold","text-lg","text-primary"],["class","bg-primary text-white text-x rounded-[10px] p-[5px] font-Spartan",4,"ngIf"],["class","bg-black text-center text-white text-sm rounded-[15px] p-2 ml-3 font-Spartan",4,"ngIf"],[1,"font-bold","text-lg","text-black"],[1,"flex","flex-wrap","items-center","justify-start","text-primary","list-disc","list-inside","ml-1"],["href","#",1,"mr-4","hover:underline","md:mr-6"],[1,"flex","items-center","justify-start","gap-2","flex-wrap","md:flex-row","md:w-[40%]","md:justify-end"],[1,"w-auto","h-[35px]","flex","items-center","justify-center","p-2","mt-3","mr-3","rounded-md","bg-secondary","md:justify-between","md:items-center","hover:cursor-pointer","hover:bg-primary","font-Spartan","text-primary","font-bold","text-lg","hover:text-white",3,"click"],["class","w-auto h-[35px] flex items-center justify-center p-2 mt-3 mr-3 rounded-md bg-secondary md:justify-between md:items-center hover:cursor-pointer hover:bg-primary font-Spartan text-primary font-bold text-lg hover:text-white",3,"click",4,"ngFor","ngForOf"],[1,"bg-primary","text-white","text-x","rounded-[10px]","p-[5px]","font-Spartan"],[1,"bg-black","text-center","text-white","text-sm","rounded-[15px]","p-2","ml-3","font-Spartan"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"div",1),t.TgZ(2,"main",2),t.YNc(3,x,5,1,"header",3),t.TgZ(4,"div",4),t.YNc(5,v,30,15,"article",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.listOfFilter.length>0),t.xp6(2),t.Q6J("ngForOf",o.listOfJobsFilter))},directives:[l.O5,l.sg,l.mk],styles:[".header[_ngcontent-%COMP%]{background-image:url(waves.635ac84cf238d7d5.svg);background-size:cover;object-fit:cover}.borderActive[_ngcontent-%COMP%]{border-left:solid 8px #5ba4a4}"]}),i})()}];let J=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.Bz.forChild(w)],p.Bz]}),i})(),y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,J]]}),i})()}}]);