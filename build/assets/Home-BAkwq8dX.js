import{G as r,m as n,d as e,p as a,L as l,j as o,H as m}from"./index-dcL2fmHu.js";function p(t){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M183.83 480a55.2 55.2 0 0 1-32.36-10.55A56.64 56.64 0 0 1 128 423.58a50.26 50.26 0 0 1 34.14-47.73L213 358.73a16.25 16.25 0 0 0 11-15.49V92a32.1 32.1 0 0 1 24.09-31.15l108.39-28.14A22 22 0 0 1 384 54v57.75a32.09 32.09 0 0 1-24.2 31.19l-91.65 23.13A16.24 16.24 0 0 0 256 181.91V424a48.22 48.22 0 0 1-32.78 45.81l-21.47 7.23a56 56 0 0 1-17.92 2.96z"},child:[]}]})(t)}function d(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m12 3 .01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},child:[]}]})(t)}function f(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 3V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13C16.7286 13 17.4117 13.1948 18 13.5351V5H9V17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C5.72857 13 6.41165 13.1948 7 13.5351V3H20ZM5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z"},child:[]}]})(t)}const x=n`
  0% {
    opacity: 1;
    transform: scale(1) rotate(-25deg);

  }
  50% {
    opacity: 0;
    transform: scale(1.25) rotate(-35deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(-25deg);
  }
`,g=n`
  0% {
    opacity: 1;
    transform: scale(1);

  }
  50% {
    opacity: 0;
    transform: scale(1.25) ;
  }
  100% {
    opacity: 1;
    transform: scale(1) ;
  }
`,u=n`
  0% {
    opacity: 1;
    transform: scale(1 rotate(15deg));

  }
  50% {
    opacity: 0;
    transform: scale(1.25) rotate(25deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(15deg);
  }
`,h=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4.8rem;
  margin: 0 auto;
  margin-top: 14.8rem;
  margin-left: 12.4rem;
`,y=e.h1`
  font-family: ${a};
  font-weight: 600;
  font-size: 5.2rem;
  line-height: 0.88;
  text-transform: uppercase;
  /* color: ${({theme:t})=>t.colors.buttonHoverBgColor}; */
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    90deg,
    #f72585 0,
    #7209b7 20%,
    #ff073a 40%,
    #fb8500 60%,
    #ff006e 80%,
    #4cc9f0 100%
  );
  background-size: 100%;
  -webkit-box-decoration-break: clone;
  white-space: nowrap;
  /* text-shadow: 0 0 1px ${({theme:t})=>t.colors.blueColor},
    0 0 2px ${({theme:t})=>t.colors.blueColor},
    0 0 3px ${({theme:t})=>t.colors.blueColor},
    0 0 4px ${({theme:t})=>t.colors.pinkColor},
    0 0 5px ${({theme:t})=>t.colors.pinkColor},
    0 0 6px ${({theme:t})=>t.colors.pinkColor},
    0 0 7px ${({theme:t})=>t.colors.pinkColor},
    0 0 8px ${({theme:t})=>t.colors.pinkColor}; */
`,C=e.p`
  font-family: ${a};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({theme:t})=>t.colors.mainTextColor};
  width: 100%;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
    max-width: 54rem;
  }
`,i=e(p)`
  font-size: 2.4rem;
  color: ${({theme:t})=>t.colors.pinkColor};
  transform: rotate(-25deg);
  /* opacity: 0; */

  transition: opacity var(--primary-transition);
`,s=e(f)`
  font-size: 2.4rem;
  color: ${({theme:t})=>t.colors.violetColor};
  /* opacity: 0; */

  transition: opacity var(--primary-transition);
`,c=e(d)`
  font-size: 2.4rem;
  color: ${({theme:t})=>t.colors.redColor};
  /* opacity: 0; */
  transform: rotate(15deg);

  transition: all var(--primary-transition);
`,b=e(l)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 4.8rem;
  padding-right: 2.4rem;
  border-radius: 1.6rem;
  font-family: ${a};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.whiteColor};
  background-color: ${({theme:t})=>t.colors.buttonBgColor};
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${({theme:t})=>t.colors.buttonHoverBgColor};
    color: ${({theme:t})=>t.colors.mainTextColor};

    ${i} {
      animation: ${x} 3s infinite;
    }
    ${s} {
      animation: ${g} 3s 0.4s infinite;
    }
    ${c} {
      animation: ${u} 3s 0.2s infinite;
    }
  }
`;function j(){return o.jsxs(h,{children:[o.jsx(y,{children:"Find Your Perfect Harmony"}),o.jsx(C,{children:"Harmony Hub curates personalized music playlists based on your mood and preferences. Let the power of AI help you find the perfect tunes for any moment."}),o.jsxs(b,{to:"/music-hub",children:[o.jsx("span",{children:"Get Started"}),o.jsxs("div",{children:[o.jsx(i,{}),o.jsx(s,{}),o.jsx(c,{})]})]})]})}function w(){return o.jsxs(o.Fragment,{children:[o.jsxs(m,{children:[o.jsx("title",{children:"Harmony Hub"}),o.jsx("meta",{name:"description",content:""}),o.jsx("meta",{name:"keywords",content:""}),o.jsx("meta",{name:"robots",content:"index, follow"}),o.jsx("meta",{property:"og:title",content:"Harmony Hub"}),o.jsx("meta",{property:"og:description",content:""}),o.jsx("meta",{property:"og:type",content:"website"}),o.jsx("meta",{property:"og:url",content:""}),o.jsx("meta",{property:"og:site_name",content:"Harmony Hub"}),o.jsx("meta",{name:"twitter:creator",content:"@alexsmagin29"}),o.jsx("meta",{name:"twitter:site",content:"@alexsmagin29"}),o.jsx("meta",{name:"twitter:title",content:"Harmony Hub"}),o.jsx("meta",{name:"twitter:description",content:""})]}),o.jsx(j,{})]})}export{w as default};
