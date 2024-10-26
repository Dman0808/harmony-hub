import{d as o,p as n,B as S,L as v,r as x,u as C,j as t,H as $,c as T,a as B}from"./index-dcL2fmHu.js";import{B as h,T as g,L as E,a as U,b as F,F as H,c as k,S as z,d as P,e as L,f as W}from"./SignIn.styled-DgHKqno6.js";const q=o(h)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  padding: 1.2rem;
  overflow-x: hidden;

  background: radial-gradient(
    circle,
    rgba(196, 196, 196, 0) 2%,
    ${e=>e.theme.colors.mainBgColor} 98%
  );
`,D=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;o(h)`
  width: 100%;
`;const I=o(S)`
  width: 100%;
  height: 4.9rem;
`,w=o.span`
  color: ${e=>e.theme.colors.whiteColor};
  font-family: ${n};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: all var(--primary-transition);
`,J=o.div`
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${e=>e.theme.colors.buttonBgColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.buttonHoverBgColor};
    ${w} {
      color: ${e=>e.theme.colors.mainTextColor};
    }
  }
`,N=o(g)`
  color: ${e=>e.theme.colors.mainTextColor};
`,R=o(g)`
  color: ${e=>e.theme.colors.headerTextColor};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,M=o(E)`
  color: ${e=>e.theme.colors.mainTextColor};
`,Y=o(v)`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  transition: all var(--primary-transition);

  &:hover {
    color: ${e=>e.theme.colors.violetColor};
    cursor: pointer;
  }
`,d=o(U)`
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  input {
    border-radius: 0.4rem;
    color: ${e=>e.theme.colors.mainTextColor};
    font-family: ${n};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    outline: 1px solid
      ${e=>e.error?e.theme.colors.redColor:e.theme.colors.blueColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
    }

    &::placeholder {
      color: ${e=>e.theme.colors.mainTextColor};
      font-family: ${n};
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      font-size: 1.4rem;
    }
  }

  fieldset {
    border: 1px solid
      ${e=>e.error?e.theme.colors.redColor:e.theme.colors.blueColor};
  }

  &:hover fieldset {
    border: none;
  }

  &:focus-within fieldset {
    border: 1px solid
      ${e=>e.error?e.theme.colors.redColor:e.theme.colors.blueColor};
  }
`;o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`;const A=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,O=o.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.headerTextColor};

  &:hover {
    cursor: pointer;
  }
`,u=o.p`
  position: absolute;
  top: -2rem;
  right: 0;
  color: ${e=>e.theme.colors.redColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,V=o.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${e=>e.theme.colors.redColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,_=T({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function G(e){return t.jsxs(N,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Alex Smagin © ",t.jsx(M,{color:"inherit",href:"https://alexandrbig1.github.io/harmony-hub/",target:"_blank",children:"Harmony Hub"})," ",new Date().getFullYear(),"."]})}function X(){const[e,f]=x.useState(!1),[r,c]=x.useState({}),y=C(),b=()=>{f(!e)},j=p=>{p.preventDefault();const s=p.currentTarget,a=s.elements.name.value,l=s.elements.email.value,m=s.elements.password.value,i={};a.trim().length===0?i.name="Name is required":a.trim().length<3&&(i.name="Name must be at least 3 characters"),l.trim().length===0?i.email="Email address is required":W.test(l)||(i.email="Please enter a valid email address"),(m.length<6||m.length>20)&&(i.password="Password must be between 6 and 20 characters"),c(i),Object.keys(i).length===0&&(c({}),y(B({name:a,email:l,password:m})),s.reset())};return t.jsxs(t.Fragment,{children:[t.jsxs($,{children:[t.jsx("title",{children:"Harmony Hub - Sign Up"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.jsx("meta",{name:"description",content:"Join Harmony Hub website."}),t.jsx("meta",{property:"og:type",content:"website"}),t.jsx("meta",{property:"og:title",content:"Join Harmony Hub"}),t.jsx("meta",{property:"og:description",content:"Join Harmony Hub website."}),t.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/harmony-hub/"})]}),t.jsx(F,{theme:_,children:t.jsx(q,{children:t.jsxs(H,{children:[t.jsxs(k,{children:[t.jsxs(z,{children:[t.jsx(R,{variant:"h5",children:"Sign Up"}),t.jsx(Y,{to:"/signin",children:"Sign In"})]}),t.jsxs(h,{component:"form",noValidate:!0,onSubmit:j,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(D,{children:[t.jsx(d,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",placeholder:"Enter your name",autoFocus:!0,error:!!r.name}),r.name&&t.jsx(u,{children:r.name}),t.jsx(d,{required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",error:!!r.email}),r.email&&t.jsx(u,{children:r.email})]}),t.jsxs(A,{children:[t.jsx(d,{placeholder:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(V,{children:r.password}),t.jsx(O,{onClick:b,children:e?t.jsx(P,{}):t.jsx(L,{})})]}),t.jsx(J,{children:t.jsx(I,{type:"submit",color:"inherit",children:t.jsx(w,{children:"Register Now"})})})]})]}),t.jsx(G,{})]})})})]})}export{X as default};
