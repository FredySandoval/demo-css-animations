let constrain=(n,t,a)=>Math.max(Math.min(n,a),t),map=(n,t,a,o,r,e)=>{const s=(n-t)/(a-t)*(r-o)+o;return e?o<r?constrain(s,o,r):constrain(s,r,o):s},normal=()=>{let n=window.scrollY,t=Math.abs(n%200-100)-100,a=Math.abs(Math.floor(map(t,0,100,0,8)));document.querySelector("#sprite-container").style.backgroundPosition=`-${400*a}px`};window.addEventListener("scroll",normal);
//# sourceMappingURL=index.e244bc38.js.map