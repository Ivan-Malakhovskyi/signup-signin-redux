"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[62],{3062:function(n,e,r){r.r(e);var t=r(4875),o=r(3855),a=r(5218),i=r(3150),s=r(8724),c=r(9869),l=r(9589),u=r(184);e.default=function(){var n=(0,o.I0)(),e=(0,i.du)(),r=(0,o.v9)(c.u.getUserName);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.X,{as:"h2",size:"xl",children:"Registration"}),(0,u.jsx)(t.or,{initialValues:{name:"",email:"",password:""},validationSchema:e,onSubmit:function(e,t){var o=t.resetForm,i=e.name,c=e.email,l=e.password;if(r===i)return a.ZP.error("Email with name ".concat(i," already exists.")),void o();n((0,s.y1)({name:i,email:c,password:l})),a.ZP.success("Your account with name ".concat(i,", succesfully created")),o()},children:(0,u.jsxs)(t.t,{children:[(0,u.jsxs)(t.L3,{htmlFor:"name",children:["Name",(0,u.jsx)(t.QU,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,u.jsx)(t.CV,{name:"name",component:"p",required:!0})]}),(0,u.jsxs)(t.L3,{htmlFor:"email",children:["Email",(0,u.jsx)(t.QU,{name:"email",required:!0}),(0,u.jsx)(t.CV,{name:"email",component:"p"})]}),(0,u.jsxs)(t.L3,{htmlFor:"password",children:["Password",(0,u.jsx)(t.QU,{name:"password",required:!0}),(0,u.jsx)(t.CV,{name:"password",component:"p"})]}),(0,u.jsx)(t.EK,{type:"submit",children:"Sign up"}),(0,u.jsx)(a.x7,{})]})})]})}},4875:function(n,e,r){r.d(e,{CV:function(){return x},EK:function(){return w},L3:function(){return f},QU:function(){return g},jj:function(){return b},or:function(){return p},t:function(){return h}});var t,o,a,i,s,c,l,u=r(168),m=r(6487),d=r(5705),p=(0,m.ZP)(d.J9)(t||(t=(0,u.Z)(["\n  height: 40px;\n  margin-bottom: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.red})),h=(0,m.ZP)(d.l0)(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-flow: column;\n  gap: 16px;\n  padding: 20px;\n\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.addBoxShadow})),f=m.ZP.label(a||(a=(0,u.Z)(["\n  color: ",";\n  margin: 0;\n  margin-bottom: 16px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.33;\n  letter-spacing: -0.18px;\n"])),(function(n){return n.theme.colors.black})),x=(0,m.ZP)(d.Bc)(i||(i=(0,u.Z)(["\n  margin-top: 10px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: -0.72px;\n  color: red;\n"]))),b=(0,m.ZP)(d.Bc)(s||(s=(0,u.Z)(["\n  margin-top: 10px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: -0.72px;\n  color: red;\n"]))),g=(0,m.ZP)(d.gN)(c||(c=(0,u.Z)(["\n  display: flex;\n  padding: 10px;\n  border: none;\n  border: 1px solid ",";\n  font-size: 16px;\n  border-radius: 4px;\n  background-color: transparent;\n  color: ",";\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:active {\n    border-color: #1db954;\n    outline: none;\n  }\n"])),(function(n){return n.theme.colors.inputGrey}),(function(n){return n.theme.colors.black})),w=m.ZP.button(l||(l=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  padding: 20px 60px;\n  margin: 0 auto;\n  cursor: pointer;\n  color: ",";\n  border: 1px solid teal;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: 0.04em;\n  border-radius: 40px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: teal;\n  }\n"])),(function(n){return n.theme.colors.black}))},3150:function(n,e,r){r.d(e,{IT:function(){return i},Tp:function(){return a},du:function(){return o}});var t=r(8007),o=function(){return t.Ry().shape({name:t.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s'-]*$/,"Name should not contain numbers").required(),email:t.Z_().email("Invalid email format").required(),password:t.Z_().min(6,"Password must be at least 6 characters").required()})},a=function(){return t.Ry().shape({email:t.Z_().email("Invalid email format").required(),password:t.Z_().min(6,"Password must be at least 6 characters").required()})},i=function(){return t.Ry().shape({name:t.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s'-]*$/,"Name should not contain numbers").required(),number:t.Z_().min(5,"Too short  phone number").max(12,"Too long phone number").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Invalid phone number format").required()})}}}]);
//# sourceMappingURL=62.86118e38.chunk.js.map