(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{294:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var o=s(3),n=s(39),c=s(1),r=(s(0),s(76)),a=s.n(r),i=function(e){var t=e.input,s=e.meta,r=s.touched,i=s.error,j=Object(n.a)(e,["input","meta"]),u=r&&i;return Object(c.jsxs)("div",{className:a.a.formControl+" "+(u?a.a.error:""),children:[Object(c.jsx)("div",{children:Object(c.jsx)("textarea",Object(o.a)(Object(o.a)({},t),j))}),u&&Object(c.jsx)("span",{children:i})]})}},296:function(e,t,s){e.exports={profile:"ProfileInfo_profile__37IVM",avatar:"ProfileInfo_avatar__1VI09"}},297:function(e,t,s){"use strict";s.r(t);var o=s(3),n=s(34),c=s(35),r=s(38),a=s(37),i=s(1),j=s(0),u=s.n(j),b=(s(96),s(98)),l=function(e){return Object(i.jsxs)("div",{children:[e.message,Object(i.jsxs)("div",{children:[e.count," "]})]})},d=s(132),p=s(133),h=s(73),O=s(294),f=Object(h.a)(10),x=Object(h.b)(3),v=Object(p.a)({form:"dialog"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsx)(d.a,{placeholder:"new post...",name:"newPostBody",component:O.a,validate:[h.c,f,x]}),Object(i.jsx)("button",{children:"Add post"})]})})),m=u.a.memo((function(e){var t=e.postData.map((function(e){return Object(i.jsx)(l,{message:e.message,count:e.count},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:" my posts"}),Object(i.jsx)(v,{onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(i.jsx)("div",{children:t})]})})),g=s(14),P=Object(g.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(b.a)(t))}}}))(m),k=s(99),S=s(296),A=s.n(S),w=s(63),D=function(e){var t=e.status,s=e.updateStatus,o=Object(j.useState)(t),n=Object(k.a)(o,2),c=n[0],r=n[1],a=Object(j.useState)(!1),u=Object(k.a)(a,2),b=u[0],l=u[1];Object(j.useEffect)((function(){r(t)}),[t]);return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Status:"}),!b&&Object(i.jsx)("span",{onDoubleClick:function(){l(!0)},children:c})]}),Object(i.jsx)("div",{children:b&&Object(i.jsx)("input",{onBlur:function(){l(!1),s(c)},onChange:function(e){r(e.currentTarget.value)},value:c})})]})},y=function(e){var t=e.contactTitle,s=e.contactValue;return Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:t}),":",s]})},F=function(e){var t=e.profile,s=e.isOwner,o=e.openEditMode;return Object(i.jsxs)("div",{className:A.a.avatar,children:[s&&Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:o,children:"EDIT"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Full Name"}),": ",t.fullName]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"About Me"}),": ",t.aboutMe]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking For A Job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob?Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking For A Job Description"}),": ",t.lookingForAJobDescription]}):"",Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(i.jsx)(y,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},J=s(68),N=Object(p.a)({form:"edit-mode-profile"})((function(e){var t=e.handleSubmit;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)("button",{children:"SAVE"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Full Name"}),": ",Object(i.jsx)(d.a,{placeholder:"Full Name",name:"fullName",component:J.a,validate:[h.c]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"About Me"}),": ",Object(i.jsx)(d.a,{placeholder:"About Me",name:"aboutMe",component:O.a,validate:[h.c]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking For A Job"}),": ",Object(i.jsx)(d.a,{type:"checkbox",value:"LookingForAJob",name:"LookingForAJob",component:J.a})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking For A Job Description"}),": ",Object(i.jsx)(d.a,{placeholder:"Looking For A Job Description",name:"lookingForAJobDescription",component:O.a,validate:[h.c]})]})]})})),I=s(110),M=function(e){var t=e.profile,s=e.status,o=e.updateStatus,n=e.isOwner,c=e.savePhoto,r=e.saveNewProfileData,a=Object(j.useState)(!1),u=Object(k.a)(a,2),b=u[0],l=u[1];return t?Object(i.jsxs)("div",{className:A.a.profile,children:[Object(i.jsx)("img",{src:null!=t.photos.large?t.photos.large:I.a,alt:"here avatar"}),n&&Object(i.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),b?Object(i.jsx)(N,{onSubmit:function(e){r(e)}}):Object(i.jsx)(F,{profile:t,isOwner:n,openEditMode:function(){return l(!0)}}),Object(i.jsx)(D,{status:s,updateStatus:o})]}):Object(i.jsx)(w.a,{})},C=function(e){var t=e.profile,s=e.status,o=e.updateStatus,n=e.isOwner,c=e.savePhoto,r=e.saveNewProfileData;return Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{savePhoto:c,isOwner:n,profile:t,status:s,updateStatus:o,saveNewProfileData:r}),Object(i.jsx)(P,{})]})},L=s(11),T=s(97),_=s(10),E=function(e){Object(r.a)(s,e);var t=Object(a.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"refreshProfile",value:function(){var e=Number(this.props.match.params.userId);e||(e=this.props.currentUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.profile?Object(i.jsx)(C,Object(o.a)(Object(o.a)({isOwner:!this.props.match.params.userId},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})):Object(i.jsx)(w.a,{})}}]),s}(u.a.Component);t.default=Object(_.d)(Object(g.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,currentUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.g,savePhoto:b.f,saveNewProfileData:b.e}),L.f,T.a)(E)}}]);
//# sourceMappingURL=4.3d95c499.chunk.js.map