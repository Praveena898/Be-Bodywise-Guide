import React,{useState,useEffect} from "react";
import htm from "htm";
const html=htm.bind(React.createElement);
const P={home:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",clip:"M9 2h6v4H9zM16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4",help:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01",info:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",menu:"M4 6h16M4 12h16M4 18h16",x:"M18 6 6 18M6 6l12 12",check:"M20 6 9 17l-5-5",plus:"M5 12h14M12 5v14",trash:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",down:"m6 9 6 6 6-6",back:"m12 19-7-7 7-7M19 12H5",leaf:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.4 5.1-6",spark:"M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z",alert:"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01",clock:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",copy:"M8 8h12v12H8zM4 16V4h12",arrow:"M5 12h14m-6-6 6 6-6 6"};
const Icon=({n,s=20,c=""})=>html`<svg width=${s} height=${s} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=${c} aria-hidden="true"><path d=${P[n]}/></svg>`;

/* Product details compiled 25 Nov 2026 from Be Bodywise’s own product page (lip balm) and public retailer listings. Always check the pack. */
const PR=[
{id:"hair-growth-serum",name:"Hair Growth Serum",sub:"Advanced Hair Growth Serum (roll-on and bottle versions)",type:"Leave-on scalp serum",pack:"25 ml roll-on · 50 ml bottle",tint:"bg-sage-100",
 line:"A leave-on serum for the scalp, positioned for hair thinning.",
 ing:[["Rosemary","A plant extract the brand lists as a key active."],["Redensyl","A hair-care active used in scalp serums; listed as a key active."],["Aminexil","A hair-care active used in scalp products."],["Anagain","A plant-derived hair-care active (pea sprout extract)."]],
 full:"Strengths differ by version. The roll-on listing shows 3% rosemary, 3% redensyl and 2% aminexil; other listings also show 2% anagain. The complete ingredient list is printed on your pack.",
 how:["Apply to the scalp where hair is thinning.","Massage gently until it is absorbed.","How often differs by listing: some say daily (one suggests leaving it on 4–6 hours), an older 50 ml listing says 2–3 times a week. Follow the directions on your pack."],
 today:"Apply to scalp, massage in",win:null,
 tl:"No review window found in the sources checked. Hair grows slowly, so plan on months, not weeks.",
 exp:["The brand positions it for hair thinning and new growth. No result is guaranteed.","Day-to-day changes are hard to see. Compare using the same parting, light and distance.","Shedding and thinning have many causes, and a serum addresses only the scalp."],
 ask:["Sudden, patchy or fast hair loss","Scalp pain, redness or itching that doesn’t settle","Hair changes together with irregular periods, tiredness or other body changes"],
 habits:["Eat regular, balanced meals with enough protein","Handle wet hair gently; avoid very tight styles","Note shedding in the same way each week"],
 watch:[["shed","Hair fall (brush or shower)"],["scalp","Scalp comfort"]],
 src:[["Tira listing","https://www.tirabeauty.com/product/be-bodywise-hair-growth-serum-50-ml-7607663"],["Nykaa listing","https://www.nykaa.com/be-bodywise-hair-growth-serum-roll-on/p/16891929"]]},
{id:"biotin-gummies",name:"Biotin Gummies",sub:"Biotin Hair Gummies (vegetarian)",type:"Daily supplement",pack:"30 or 60 gummies, depending on version",tint:"bg-blush-100",
 line:"A vegetarian daily gummy with biotin and other nutrients, aimed at hair health.",
 ing:[["Biotin (vitamin B7)","A B-vitamin the brand features for hair."],["Zinc","A mineral included in the blend."],["Vitamins A, C and E","Vitamins listed as part of the formula."],["Others","Some listings also name vitamins B6, B12 and D2."]],
 full:"Exact amounts per gummy are on the supplement facts panel of your pack. Check it for allergens too.",
 how:["Take 1 gummy a day, after a meal.","Keep it consistent. One listing recommends about 3 months of regular use.","Store in a cool, dry place. It is a supplement, not a medicine."],
 today:"1 gummy after a meal",win:90,
 tl:"A retailer listing recommends about 3 months of consistent use.",
 exp:["Supplements sit alongside your diet; they don’t replace meals.","Hair changes are slow. Judge over months, not weeks.","Results vary and are not guaranteed."],
 ask:["You already take other biotin or vitamin A supplements (totals add up)","You are pregnant, breastfeeding or planning pregnancy","You have blood tests coming up. Biotin can interfere with some lab results","You take regular medication"],
 habits:["Notice how much protein and iron-rich food you eat in a normal week","Sleep and stress also affect shedding","Take it at the same time daily so it becomes a habit"],
 watch:[["shed","Hair fall"],["gut","Stomach comfort"]],
 src:[["Purplle listing","https://www.purplle.com/product/be-bodywise-biotin-hair-30mcg-gummies-111-gm-30n"],["1mg listing","https://www.1mg.com/otc/1131394"]]},
{id:"pcos-balance-capsules",name:"PCOS Balance Capsules",sub:"PCOS Balance Capsules (Ayurvedic, vegetarian)",type:"Ayurvedic daily capsule",pack:"60 capsules",tint:"bg-sage-50",
 line:"An Ayurvedic herbal capsule, marketed for women managing PCOS symptoms. Not a diagnosis or treatment.",
 ing:[["Shatavari","An Ayurvedic herb traditionally used in women’s wellness."],["Gokshura","An Ayurvedic herb (Tribulus terrestris)."],["Ashoka","An Ayurvedic tree bark used traditionally for women’s health."],["Lodhra","An Ayurvedic tree bark."],["Red Chandan","Red sandalwood; the brand describes it as calming."]],
 full:"Retailers and the brand describe a blend of 18 Ayurvedic herbs. The five above are the ones named most often. The full list and the dose are on your pack (the dose was not stated in the sources I checked).",
 how:["Take the dose printed on your pack.","If capsules are hard to swallow, ask a pharmacist for tips instead of opening them.","Keep a simple note of cycle dates alongside it."],
 today:"Capsule(s) as per pack",win:null,
 tl:"No review window found in the sources checked. Menstrual cycles vary naturally, so patterns need several months of notes.",
 exp:["PCOS is diagnosed and managed by a doctor. A supplement is not a substitute.","Cycles vary month to month, so your own dated log is the most useful evidence.","Results vary and are not guaranteed."],
 ask:["You have irregular periods, acne or hair changes but no diagnosis yet","You are pregnant, trying to conceive or breastfeeding","You take medication, including for thyroid, diabetes or hormones","Cycles stop, bleeding is very heavy, or you have strong pain"],
 habits:["Regular movement you enjoy and regular sleep","Balanced meals, noting how you feel after them","Log cycle start dates to share with your doctor"],
 watch:[["cycle","Cycle regularity (from your log)"],["side","Side effects / how you feel"]],
 src:[["Be Bodywise PCOS page","https://bebodywise.com/pcos"],["Flipkart listing","https://www.flipkart.com/bodywise-pcos-balance-capsules-pcod-ayurvedic-medicine-shatavari-gokshura-ashoka/p/itm1d05a3cb8812f"]]},
{id:"salicylic-acid-body-wash",name:"Salicylic Acid Body Wash",sub:"1% Salicylic Acid Body Wash",type:"Rinse-off body cleanser",pack:"250 ml · 375 ml · 700 ml pump",tint:"bg-blush-50",
 line:"A body wash with 1% salicylic acid, aimed at body acne and rough, bumpy skin.",
 ing:[["Salicylic acid (1%)","A BHA that exfoliates the skin surface and inside pores. The brand uses encapsulated beads."],["Chamomile extract","A plant extract added to soothe skin."],["Pentavitin","A hydration ingredient mentioned in newer listings."]],
 full:"One retailer lists: Purified Water, Acrylate Copolymer, Sodium Lauroyl Sarcosinate, Coco-Glucoside, Cocamidopropyl Betaine, Triethanolamine, Salicylic Acid, Erythritol, Phenoxyethanol, Ethylhexylglycerin and fragrance (the list was cut off). Check your pack for the complete, current list.",
 how:["On wet skin, take 1–2 pumps on your palm or a loofah.","Massage gently in circles, focusing on breakout-prone areas.","Rinse off."],
 today:"1–2 pumps in the shower",win:90,
 tl:"Listings suggest regular use for up to about 3 months.",
 exp:["Salicylic acid exfoliates, so dryness or stinging can happen, especially early on.","A wash only touches skin briefly. Sweat, friction and hormones also affect body acne.","Results vary and are not guaranteed."],
 ask:["Acne that is painful, deep or leaving scars","Acne together with irregular periods or hair changes","You are pregnant or breastfeeding (ask about salicylic acid products)","Burning, rash or peeling that persists"],
 habits:["Shower soon after sweating or workouts","Wash towels and loose clothing often","Avoid scrubbing hard; let the product do the exfoliating"],
 watch:[["acne","Breakouts / bumps"],["comfort","Skin comfort (dryness, stinging)"]],
 src:[["Tira listing","https://fp-cdn.tirabeauty.com/product/be-bodywise-1-salicylic-acid-body-wash-for-body-acne-375ml-7592046"],["1mg listing","https://www.1mg.com/otc/be-bodywise-1-salicylic-acid-body-wash-otc1110052"]]},
{id:"lip-balm",name:"Lip Balm",sub:"Pigmentation Repair Lip Balm with SPF 30 (watermelon, 8 g)",type:"Lip treatment balm with sun protection",pack:"8 g stick (a 15 g Lip Treatment Balm also exists)",tint:"bg-blush-100",
 line:"A moisturising lip balm with SPF 30 PA+++, positioned for dry lips and lip pigmentation.",
 ing:[["Niacinamide","A form of vitamin B3. The brand page shows 0.1% and lists it for lip pigmentation."],["Vitamin C","An antioxidant vitamin listed with niacinamide."],["Shea and cocoa butter","Plant butters for moisture."],["SPF 30 PA+++","A sun-protection rating against UVA and UVB."]],
 full:"Listings say it is free from mineral oil, parabens, sulfates and petroleum. The 15 g Lip Treatment Balm lists shea butter, squalane and niacinamide, so check which one you hold. The full list is on the pack.",
 how:["Apply to clean, dry lips.","Reapply through the day, especially after eating or drinking.","Use daily. The brand’s page says not to expect results in one month and suggests about 3 months."],
 today:"Apply, and reapply after eating",win:90,
 tl:"The brand page itself says results won’t show in 1 month and suggests daily use for about 3 months.",
 exp:["The brand is candid that this takes about 3 months of daily use.","Sun exposure can darken lips again, so reapplying SPF matters.","Dark lips have several causes, so results vary and are not guaranteed."],
 ask:["Lip swelling, sores or cracks at the corners that don’t heal","A new patch of colour change that keeps growing","Signs of allergy such as itching, rash or swelling"],
 habits:["Avoid licking or picking at lips","Drink water through the day","Wear a hat or reapply in strong sun"],
 watch:[["dry","Dryness / chapping"],["tone","Lip colour (your view, same light)"]],
 src:[["Be Bodywise product page","https://bebodywise.com/product/pigmentation-repair-lip-balm"],["Amazon.in listing","https://www.amazon.in/Be-Bodywise-Pigmentation-Watermelon-Hydrates/dp/B0CJ8YC76Z"]]}];
const pOf=id=>PR.find(p=>p.id===id);

const CQ={
 hair:{label:"Hair thinning or hair fall",q:"Which sounds closest?",o:[["Gradual thinning or more shedding than usual",0],["Sudden or patchy hair loss",1],["I’m not sure",0]],prods:["hair-growth-serum","biotin-gummies"],flag:"Sudden or patchy loss can have medical causes. Please see a doctor or dermatologist, before or alongside trying products."},
 skin:{label:"Body acne or rough, bumpy skin",q:"Which sounds closest?",o:[["Small bumps or mild breakouts",0],["Rough, bumpy skin (for example on thighs)",0],["Painful, deep or scarring acne",1]],prods:["salicylic-acid-body-wash"],flag:"Painful, deep or scarring acne is best assessed by a dermatologist."},
 cycle:{label:"Irregular periods or PCOS",q:"Where are you right now?",o:[["A doctor has diagnosed me with PCOS",0],["I suspect PCOS but have no diagnosis",1],["My periods are irregular and I’m not sure why",1]],prods:["pcos-balance-capsules"],flag:"Irregular periods have many causes. A doctor can confirm whether it is PCOS. A supplement can’t replace a diagnosis."},
 lips:{label:"Dry lips or darker lip colour",q:"Which sounds closest?",o:[["Dry or chapped lips",0],["Darker lip colour",0],["Sores, swelling or cracks that won’t heal",1]],prods:["lip-balm"],flag:"Sores, swelling or cracks that don’t heal should be checked by a doctor."},
 unsure:{label:"I’m just exploring",q:"What matters most?",o:[["Hair",0],["Skin and body",0],["Hormonal wellness",0],["Lips",0]],prods:["hair-growth-serum","biotin-gummies","pcos-balance-capsules","salicylic-acid-body-wash","lip-balm"],flag:""}};
const SAFE=[["preg","I’m pregnant, breastfeeding or planning pregnancy","Ask your doctor before starting any supplement or active skincare product."],["meds","I take regular medication or have a diagnosed condition","Ask a doctor or pharmacist first, especially before capsules or gummies."],["sens","I have sensitive, eczema-prone skin or allergies","Patch test first and read the full ingredient list on the pack."]];
const FAQ=[["Is this the official Be Bodywise website?","No. Bodywise Guide is an independent guide and isn’t affiliated with or endorsed by Be Bodywise. For orders and official product information, please use the brand’s own channels."],["Where does the product information come from?","From Be Bodywise’s own lip balm page and public retailer listings (Nykaa, Tira, 1mg, Purplle, Flipkart), checked on 25 Nov 2026. Versions, sizes and formulas change, so your pack is always the final word."],["Does it diagnose or recommend treatment?","No. The fit finder only narrows down which sample product pages to read, and flags when a professional should come first."],["Why is there a 3-month review window?","Listings for the gummies, body wash and lip balm mention about 3 months of regular use, and the lip balm page says not to expect results in one month. For products with no stated window, the plan uses the same pacing only as a checkpoint, not a promise."],["Where is my data stored?","Only in this browser’s local storage. Nothing is sent anywhere. Avoid adding names or sensitive details in notes."],["When should I stop and ask someone?","If you notice itching, redness, swelling, pain, a rash or anything that worries you, stop and speak to a pharmacist or doctor."]];

const W="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10 2xl:px-14";
const useLS=(k,init)=>{const [v,setV]=useState(()=>{try{const r=localStorage.getItem(k);return r?JSON.parse(r):init}catch(e){return init}});useEffect(()=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},[k,v]);return [v,setV]};
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const daysBetween=(a,b)=>Math.round((new Date(b)-new Date(a))/864e5);
const Btn=({onClick,kind="main",children,cls="",dis})=>html`<button disabled=${dis} onClick=${onClick} class=${"inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sage-500 disabled:opacity-40 "+(kind==="main"?"bg-sage-700 text-white hover:bg-sage-900":kind==="soft"?"bg-blush-100 text-blush-600 hover:bg-blush-200":"border border-sage-200 text-sage-700 hover:bg-sage-50")+" "+cls}>${children}</button>`;
const Note=({tone="sage",children})=>html`<div class=${"flex gap-3 rounded-2xl p-4 text-sm "+(tone==="warn"?"bg-blush-50 text-blush-600 border border-blush-200":"bg-sage-50 text-sage-700")}><span class="mt-0.5 shrink-0"><${Icon} n=${tone==="warn"?"alert":"info"} s=${18}/></span><div>${children}</div></div>`;
const H=({children})=>html`<h2 class="font-serif text-xl text-sage-900">${children}</h2>`;

function Nav({route,go}){
 const [open,setOpen]=useState(false);
 const items=[["home","Home","home"],["fit","Find my fit","spark"],["products","Products","search"],["plan","My plan","clip"],["help","Help","help"]];
 const active=i=>route===i||(i==="products"&&route.startsWith("product-"));
 return html`<header class="sticky z-20 border-b border-blush-100 bg-cream/90 backdrop-blur" style=${{top:"env(safe-area-inset-top,0px)"}}>
  <div class=${W+" flex items-center justify-between py-3"}>
   <button onClick=${()=>go("home")} class="flex items-center gap-2 font-serif text-xl text-sage-900"><span class="grid h-8 w-8 place-items-center rounded-full bg-sage-100 text-sage-700"><${Icon} n="leaf" s=${18}/></span>Bodywise Guide</button>
   <nav class="hidden gap-1 lg:flex">${items.map(([id,l,ic])=>html`<button key=${id} onClick=${()=>go(id)} class=${"flex items-center gap-2 rounded-full px-4 py-2 text-sm "+(active(id)?"bg-sage-100 font-medium text-sage-900":"text-sage-700 hover:bg-sage-50")}><${Icon} n=${ic} s=${16}/>${l}</button>`)}</nav>
   <button class="rounded-full p-2 text-sage-700 lg:hidden" aria-label="Menu" onClick=${()=>setOpen(!open)}><${Icon} n=${open?"x":"menu"}/></button>
  </div>
  ${open&&html`<div class="border-t border-blush-100 px-4 pb-3 lg:hidden">${items.map(([id,l,ic])=>html`<button key=${id} onClick=${()=>{setOpen(false);go(id)}} class=${"flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm "+(active(id)?"bg-sage-100 font-medium":"")}><${Icon} n=${ic} s=${18}/>${l}</button>`)}</div>`}
 </header>`}

const Pic=({p,cls="",tint=true})=>{
 const exts=["jpg","png","webp"];const [i,setI]=useState(0);const [bad,setBad]=useState(false);
 const base=(tint?p.tint+" ":"")+"flex items-center justify-center overflow-hidden "+cls;
 if(bad)return html`<div class=${base+" px-4 text-center font-serif text-lg text-sage-700"}>${p.name}</div>`;
 return html`<div class=${base}><img src=${"/products/"+p.id+"."+exts[i]} alt=${p.name} loading="lazy" onError=${()=>i<exts.length-1?setI(i+1):setBad(true)} class="h-full w-full object-contain p-3"/></div>`};

function Card({p,go,S}){
 const has=S.plan.some(x=>x.pid===p.id);
 return html`<article class="flex flex-col overflow-hidden rounded-3xl border border-blush-100 bg-white shadow-sm">
  <${Pic} p=${p} cls="h-56 lg:h-64"/>
  <div class="flex flex-1 flex-col gap-2 p-5"><p class="text-xs text-sage-500">${p.type} · ${p.pack}</p><p class="flex-1 text-sm text-sage-700">${p.line}</p>
  <div class="mt-2 flex flex-wrap gap-2"><${Btn} kind="ghost" onClick=${()=>go("product-"+p.id)}>Details<//><${Btn} kind=${has?"soft":"main"} onClick=${()=>S.add(p.id)} dis=${has}>${has?"In my plan":"Add to plan"}<//></div></div></article>`}

function Home({go}){
 return html`<div>
  <section class=${W+" grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-14 lg:py-20"}>
   <div><span class="rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700">Your personal product guide</span>
    <h1 class="mt-5 font-serif text-3xl leading-tight text-sage-900 sm:text-4xl lg:text-5xl">Choose the right product. Know what’s realistic.</h1>
    <p class="mt-4 max-w-md text-sage-700 lg:max-w-xl lg:text-lg">Answer three quick questions, read the real ingredients and directions in plain language, then follow a simple plan that shows when it’s too early to judge and when to ask a professional.</p>
    <div class="mt-7 flex flex-wrap gap-3"><${Btn} onClick=${()=>go("fit")}><${Icon} n="spark" s=${16}/>Find my fit<//><${Btn} kind="soft" onClick=${()=>go("products")}>Browse products<//></div></div>
   <div class="rounded-[2rem] bg-gradient-to-br from-blush-100 via-cream to-sage-100 p-7">
    <p class="font-serif text-xl text-sage-900">Why this exists</p>
    <p class="mt-2 text-sm text-sage-700">Conversations with five Be Bodywise customers showed two recurring gaps: choosing among many products, and not knowing how long results should realistically take.</p>
    <div class="mt-4 grid gap-3 text-sm">${[["1","Find my fit","Three questions narrow it down and flag when a doctor should come first."],["2","Read it plainly","Ingredients, directions and honest expectations for each product."],["3","Follow a plan","A daily checklist, a review window and a summary you can show a professional."]].map(([n,t,d])=>html`<div key=${n} class="flex gap-3 rounded-2xl bg-white/80 p-3"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage-700 text-xs text-white">${n}</span><div><p class="font-medium text-sage-900">${t}</p><p class="text-sage-700">${d}</p></div></div>`)}</div></div>
  </section>
  <section class=${W+" pb-16"}><H>Realistic timelines at a glance</H>
   <p class="mt-1 text-sm text-sage-700">What the brand and retailer listings say about how long to use each product. Not a promise of results.</p>
   <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">${PR.map(p=>html`<button key=${p.id} onClick=${()=>go("product-"+p.id)} class="rounded-2xl border border-blush-100 bg-white p-4 text-left hover:border-sage-500"><p class="font-medium text-sage-900">${p.name}</p><p class="mt-1 flex gap-2 text-sm text-sage-700"><span class="mt-0.5 shrink-0 text-sage-500"><${Icon} n="clock" s=${16}/></span>${p.tl}</p></button>`)}</div>
  </section></div>`}

function Fit({go,S}){
 const [step,setStep]=useState(0);const [c,setC]=useState(null);const [a,setA]=useState(null);const [sf,setSf]=useState([]);
 const reset=()=>{setStep(0);setC(null);setA(null);setSf([])};
 const prog=html`<div class="mb-6 flex gap-2">${[0,1,2,3].map(i=>html`<span key=${i} class=${"h-1.5 flex-1 rounded-full "+(i<=step?"bg-sage-500":"bg-sage-100")}></span>`)}</div>`;
 const Opt=({on,sel,children})=>html`<button onClick=${on} class=${"w-full rounded-2xl border p-4 text-left text-sm transition "+(sel?"border-sage-700 bg-sage-50 font-medium":"border-blush-100 bg-white hover:border-sage-500")}>${children}</button>`;
 let body;
 if(step===0)body=html`<div><H>What would you like help with?</H><p class="mt-1 text-sm text-sage-700">Pick one. You can redo this any time.</p><div class="mt-4 space-y-2">${Object.entries(CQ).map(([k,v])=>html`<${Opt} key=${k} sel=${c===k} on=${()=>{setC(k);setA(null);setStep(1)}}>${v.label}<//>`)}</div></div>`;
 else if(step===1){const q=CQ[c];body=html`<div><H>${q.q}</H><div class="mt-4 space-y-2">${q.o.map(([t,f],i)=>html`<${Opt} key=${i} sel=${a&&a[0]===i} on=${()=>{setA([i,f]);setStep(2)}}>${t}<//>`)}</div></div>`}
 else if(step===2)body=html`<div><H>Anything that applies to you?</H><p class="mt-1 text-sm text-sage-700">Optional. This stays on your device and only changes the cautions you see.</p><div class="mt-4 space-y-2">${SAFE.map(([k,t])=>html`<${Opt} key=${k} sel=${sf.includes(k)} on=${()=>setSf(sf.includes(k)?sf.filter(x=>x!==k):[...sf,k])}>${sf.includes(k)?"✓ ":""}${t}<//>`)}</div><div class="mt-5"><${Btn} onClick=${()=>setStep(3)}>See my matches<//></div></div>`;
 else{const q=CQ[c];body=html`<div class="space-y-5"><H>Your matches</H>
  ${a[1]===1&&html`<${Note} tone="warn"><b>Talk to a professional first.</b> ${q.flag}<//>`}
  ${sf.map(k=>html`<${Note} key=${k} tone="warn">${SAFE.find(s=>s[0]===k)[2]}<//>`)}
  ${q.prods.length>1&&html`<${Note}>If you add more than one product, start with one and wait about two weeks before adding the next. That way you can tell what is helping and what is irritating.<//>`}
  <div class="grid gap-4 sm:grid-cols-2">${q.prods.map(id=>html`<${Card} key=${id} p=${pOf(id)} go=${go} S=${S}/>`)}</div>
  <${Btn} kind="ghost" onClick=${reset}>Start over<//></div>`}
 return html`<section class=${W+" py-10"}><div class="grid gap-10 lg:grid-cols-5"><div class="lg:col-span-3"><h1 class="font-serif text-3xl text-sage-900 sm:text-4xl">Find my fit</h1><p class="mb-6 mt-2 text-sm text-sage-700">A guided way to narrow down products. It isn’t a diagnosis or a prescription.</p>${prog}${body}${step>0&&step<3&&html`<button class="mt-6 flex items-center gap-2 text-sm text-sage-700" onClick=${()=>setStep(step-1)}><${Icon} n="back" s=${16}/>Back</button>`}</div><aside class="hidden lg:col-span-2 lg:block"><div class="sticky top-28 rounded-3xl bg-gradient-to-br from-blush-100 via-cream to-sage-100 p-8"><p class="font-serif text-2xl text-sage-900">How this works</p><ul class="mt-4 space-y-3 text-sm text-sage-700"><li>Answer a few quick questions. There are no wrong answers.</li><li>We match your concern to the products and point out when a doctor should come first.</li><li>Your answers stay on this device and nothing is sent anywhere.</li><li>It narrows down what to read. It never diagnoses or prescribes.</li></ul></div></aside></div></section>`}

function Products({go,S}){return html`<section class=${W+" py-10"}><h1 class="font-serif text-3xl text-sage-900 sm:text-4xl">Products</h1><p class="mt-2 max-w-xl text-sm text-sage-700">Real ingredients and directions compiled from public listings. Not sure which to read first? Try <button class="underline" onClick=${()=>go("fit")}>Find my fit</button>.</p><div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">${PR.map(p=>html`<${Card} key=${p.id} p=${p} go=${go} S=${S}/>`)}</div></section>`}

function Product({id,go,S}){
 const p=pOf(id);if(!p)return html`<section class="px-4 py-16 text-center"><${Btn} onClick=${()=>go("products")}>Back to products<//></section>`;
 const has=S.plan.some(x=>x.pid===p.id);
 const L=(items,ic)=>html`<ul class="mt-3 space-y-2 text-sm text-sage-700">${items.map((x,i)=>html`<li key=${i} class="flex gap-2"><span class="mt-0.5 shrink-0 text-sage-500"><${Icon} n=${ic||"check"} s=${16}/></span>${x}</li>`)}</ul>`;
 return html`<section class=${W+" py-10"}>
  <button onClick=${()=>go("products")} class="mb-5 flex items-center gap-2 text-sm text-sage-700"><${Icon} n="back" s=${16}/>All products</button>
  <div class=${"grid items-center gap-6 rounded-[2rem] p-5 sm:p-8 md:grid-cols-5 "+p.tint}><div class="md:col-span-3"><p class="text-sm text-sage-700">${p.type} · ${p.pack}</p><h1 class="mt-2 font-serif text-3xl text-sage-900 sm:text-4xl lg:text-5xl">${p.name}</h1><p class="mt-1 text-sm text-sage-700">${p.sub}</p><p class="mt-3 max-w-lg text-sage-900">${p.line}</p>
   <div class="mt-5 flex flex-wrap gap-3"><${Btn} onClick=${()=>S.add(p.id)} dis=${has}><${Icon} n=${has?"check":"plus"} s=${16}/>${has?"In my plan":"Add to my plan"}<//>${has&&html`<${Btn} kind="ghost" cls="bg-white/70" onClick=${()=>go("plan")}>Open plan<//>`}</div></div><div class="md:col-span-2"><${Pic} p=${p} tint=${false} cls="h-56 rounded-3xl bg-white/70 md:h-72 lg:h-96"/></div></div>
  <div class="mt-5 flex gap-3 rounded-2xl bg-sage-900 p-5 text-sm text-sage-100"><span class="shrink-0"><${Icon} n="clock" s=${20}/></span><div><b class="text-white">Realistic timeline.</b> ${p.tl}</div></div>
  <div class="mt-5 grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
   <div class="rounded-3xl border border-blush-100 bg-white p-6"><${H}>What’s in it<//><ul class="mt-3 space-y-3 text-sm">${p.ing.map(([n,d])=>html`<li key=${n}><b class="text-sage-900">${n}.</b> <span class="text-sage-700">${d}</span></li>`)}</ul><p class="mt-4 rounded-xl bg-sage-50 p-3 text-xs text-sage-700">${p.full}</p></div>
   <div class="rounded-3xl border border-blush-100 bg-white p-6"><${H}>How to use<//>${L(p.how)}</div>
   <div class="rounded-3xl bg-sage-50 p-6"><${H}>Realistic expectations<//>${L(p.exp)}</div>
   <div class="rounded-3xl bg-blush-50 p-6"><${H}>Pause and ask a professional if…<//>${L(p.ask,"alert")}</div>
  </div>
  <div class="mt-5 rounded-3xl border border-blush-100 bg-white p-6"><${H}>Habits that go with it<//><p class="text-xs text-sage-500">General wellbeing habits, not medical advice.</p>${L(p.habits,"leaf")}</div>
  <p class="mt-5 text-xs text-sage-700">Compiled 25 Nov 2026 from public pages. Versions and formulas change, so check your pack. Sources: ${p.src.map(([n,u],i)=>html`<span key=${n}>${i?", ":""}<a class="underline" href=${u} target="_blank" rel="noopener noreferrer">${n}</a></span>`)}.</p>
 </section>`}

function Spark({vals}){
 if(vals.length<2)return html`<span class="text-xs text-sage-500">Add 2+ check-ins to see a trend</span>`;
 const w=120,h=34,pts=vals.map((v,i)=>[i*(w/(vals.length-1)),h-((v-1)/4)*h].map(n=>n.toFixed(1)).join(",")).join(" ");
 return html`<svg width=${w} height=${h+4} viewBox=${"0 -2 "+w+" "+(h+4)} aria-label="Trend of your self-ratings"><polyline points=${pts} fill="none" stroke="#7A9B76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}

function Plan({go,S}){
 const {plan,done,checks}=S;
 const [f,setF]=useState({pid:"",s:{},react:false,note:""});
 const [conf,setConf]=useState(false);const [copied,setCopied]=useState("");
 const t=today();
 const pid=plan.some(x=>x.pid===f.pid)?f.pid:(plan[0]&&plan[0].pid)||"";
 const p=pid?pOf(pid):null;
 const phase=d=>d<=14?"Settling in (first 2 weeks): watch for irritation. It is too early to judge results.":d<=56?"Building the habit (weeks 3–8): still early. Keep the routine steady.":d<=90?"Approaching review (weeks 9–13): get ready to compare with your baseline.":"Review point reached: compare with your baseline, and ask a professional if you’re unsure.";
 const avg=c=>{const v=Object.values(c.s);return v.reduce((a,b)=>a+b,0)/v.length};
 const mine=id=>checks.filter(c=>c.pid===id).sort((a,b)=>a.date.localeCompare(b.date)||a.id-b.id);
 const save=()=>{if(!p)return;const s={};p.watch.forEach(([k])=>s[k]=Number(f.s[k]||3));S.setChecks([...checks,{id:Date.now(),pid,date:t,s,react:f.react,note:f.note.trim().slice(0,200)}]);setF({...f,react:false,note:"",s:{}})};
 const summary=()=>{
  const L=["Product routine summary (self-reported, prepared "+t+")","Prototype note: product details are from public listings; this is not medical advice.",""];
  plan.forEach(x=>{const pp=pOf(x.pid),cs=mine(x.pid),d=daysBetween(x.start,t)+1;L.push("• "+pp.name+" ("+pp.sub+")","  Started "+x.start+" · day "+d+" · "+Object.keys(done).filter(k=>k.endsWith("|"+x.pid)).length+" days ticked");
   if(cs.length){const l=cs[cs.length-1];L.push("  Latest check-in "+l.date+": "+pp.watch.map(([k,n])=>n+" "+l.s[k]+"/5").join(", ")+" (5 = best)");if(cs.some(c=>c.react))L.push("  Reaction reported: yes");cs.filter(c=>c.note).slice(-2).forEach(c=>L.push("  Note "+c.date+": "+c.note))}});
  L.push("","Questions I want to ask:","- Is it safe to continue alongside my medication or conditions?","- Is a different approach or a test needed?");return L.join("\n")};
 const copy=()=>{const txt=summary();const ok=()=>setCopied("Copied");const fail=()=>setCopied("Select the text above and copy it");try{navigator.clipboard.writeText(txt).then(ok,fail)}catch(e){fail()}};
 const inp="w-full rounded-xl border border-sage-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500";
 if(!plan.length)return html`<section class="mx-auto max-w-3xl px-4 py-12"><h1 class="font-serif text-3xl text-sage-900 sm:text-4xl">My plan</h1><div class="mt-6 rounded-3xl bg-blush-50 p-8 text-center"><p class="font-serif text-xl text-sage-900">Nothing here yet</p><p class="mt-2 text-sm text-sage-700">Add a product to get a daily checklist, a realistic review window and a summary you can show a professional.</p><div class="mt-4 flex justify-center gap-3"><${Btn} onClick=${()=>go("fit")}>Find my fit<//><${Btn} kind="ghost" onClick=${()=>go("products")}>Browse products<//></div></div></section>`;
 return html`<section class=${W+" py-10"}>
  <h1 class="font-serif text-3xl text-sage-900 sm:text-4xl">My plan</h1><p class="mt-2 max-w-xl text-sm text-sage-700">Stored only in this browser. Avoid names or sensitive details in notes.</p>
  <div class="mt-6"><${H}>Today</H><div class="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">${plan.map(x=>{const pp=pOf(x.pid),k=t+"|"+x.pid,on=!!done[k];return html`<button key=${x.pid} onClick=${()=>S.setDone({...done,[k]:!on})} class=${"flex w-full items-center gap-3 rounded-2xl border p-4 text-left "+(on?"border-sage-500 bg-sage-50":"border-blush-100 bg-white")}><span class=${"grid h-7 w-7 shrink-0 place-items-center rounded-full border "+(on?"border-sage-700 bg-sage-700 text-white":"border-sage-200")}>${on&&html`<${Icon} n="check" s=${16}/>`}</span><span><b class="text-sm text-sage-900">${pp.name}</b><span class="block text-xs text-sage-700">${pp.today}</span></span></button>`})}</div></div>
  <div class="mt-8"><${H}>Reality check</H><div class="mt-3 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">${plan.map(x=>{const pp=pOf(x.pid),d=daysBetween(x.start,t)+1,cs=mine(x.pid),vs=cs.map(avg),ch=vs.length>1?vs[vs.length-1]-vs[0]:null;return html`<div key=${x.pid} class="rounded-3xl border border-blush-100 bg-white p-5">
   <div class="flex items-start justify-between gap-2"><div><p class="font-medium text-sage-900">${pp.name}</p><p class="text-xs text-sage-500">Day ${d} of a 90-day review window</p></div><button aria-label=${"Remove "+pp.name} class="rounded-full p-2 text-blush-600 hover:bg-blush-50" onClick=${()=>S.remove(x.pid)}><${Icon} n="x" s=${16}/></button></div>
   <div class="mt-3 h-2 overflow-hidden rounded-full bg-sage-100"><div class="h-full rounded-full bg-sage-500" style=${{width:Math.min(100,d/90*100)+"%"}}></div></div>
   <p class="mt-3 text-sm text-sage-700">${phase(d)}</p><p class="mt-2 text-xs text-sage-500">${pp.win?pp.tl:"No brand timeline found. The 90-day window is only a checkpoint."}</p>
   <div class="mt-3 flex items-center justify-between"><${Spark} vals=${vs}/>${ch!==null&&html`<span class="text-xs text-sage-700">${ch>=0.5?"Your ratings are higher than at baseline":ch<=-0.5?"Your ratings are lower than at baseline":"Your ratings are about the same as baseline"}</span>`}</div>
   ${cs.some(c=>c.react)&&html`<div class="mt-3"><${Note} tone="warn"><b>You logged a reaction.</b> Stop using it and speak to a pharmacist or doctor.<//></div>`}</div>`})}</div></div>
  <div class="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start"><div class="rounded-3xl border border-blush-100 bg-white p-5"><${H}>Weekly check-in<//><p class="text-xs text-sage-500">1 = worst, 5 = best. Your first check-in becomes your baseline. Self-ratings are subjective, so compare in the same light and conditions.</p>
   <label class="mt-3 block text-xs text-sage-700">Product<select class=${inp+" mt-1"} value=${pid} onChange=${e=>setF({...f,pid:e.target.value,s:{}})}>${plan.map(x=>html`<option key=${x.pid} value=${x.pid}>${pOf(x.pid).name}</option>`)}</select></label>
   ${p&&p.watch.map(([k,n])=>html`<label key=${k} class="mt-3 block text-xs text-sage-700">${n}: <b class="text-sage-900">${f.s[k]||3}</b><input type="range" min="1" max="5" value=${f.s[k]||3} onChange=${e=>setF({...f,s:{...f.s,[k]:e.target.value}})} class="mt-1 w-full accent-[#7A9B76]"/></label>`)}
   <label class="mt-3 flex items-center gap-2 text-sm text-sage-700"><input type="checkbox" checked=${f.react} onChange=${e=>setF({...f,react:e.target.checked})}/>I had a reaction (itching, redness, swelling, pain)</label>
   <label class="mt-3 block text-xs text-sage-700">Note (optional, max 200 characters)<textarea rows="2" maxlength="200" class=${inp+" mt-1"} value=${f.note} onChange=${e=>setF({...f,note:e.target.value})}></textarea></label>
   <div class="mt-3"><${Btn} onClick=${save}><${Icon} n="plus" s=${16}/>Save check-in<//></div></div>
  <div class="rounded-3xl bg-sage-50 p-5"><${H}>Summary for a doctor or pharmacist<//><p class="text-xs text-sage-700">Built from your plan and check-ins. Copy it to show or send.</p>
   <textarea readonly rows="9" class=${inp+" mt-3 font-mono text-xs"} value=${summary()}></textarea>
   <div class="mt-3 flex flex-wrap items-center gap-3"><${Btn} onClick=${copy}><${Icon} n="copy" s=${16}/>Copy summary<//>${copied&&html`<span class="text-xs text-sage-700">${copied}</span>`}<span class="flex-1"></span><${Btn} kind="soft" onClick=${()=>{if(!conf){setConf(true);return}S.reset();setConf(false)}}><${Icon} n="trash" s=${14}/>${conf?"Tap again to erase everything":"Reset my plan"}<//></div></div></div>
 </section>`}

function Help({go}){
 const [open,setOpen]=useState(0);
 return html`<section class=${W+" py-10"}><h1 class="font-serif text-3xl text-sage-900 sm:text-4xl">Help & good to know</h1>
  <div class="mt-6 grid gap-8 lg:grid-cols-5 lg:items-start"><div class="space-y-3 lg:col-span-3">${FAQ.map(([q,a],i)=>html`<div key=${i} class="rounded-2xl border border-blush-100 bg-white"><button class="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-medium text-sage-900" onClick=${()=>setOpen(open===i?-1:i)} aria-expanded=${open===i}>${q}<span class=${"shrink-0 transition "+(open===i?"rotate-180":"")}><${Icon} n="down" s=${18}/></span></button>${open===i&&html`<p class="px-4 pb-4 text-sm text-sage-700">${a}</p>`}</div>`)}</div>
  <div class="rounded-3xl bg-blush-50 p-6 lg:sticky lg:top-28 lg:col-span-2"><${H}>Need real product or health support?<//><p class="mt-2 text-sm text-sage-700">This guide doesn’t handle orders or customer support. For orders and product questions, use Be Bodywise’s official channels. For health concerns, speak to a doctor or pharmacist.</p><div class="mt-4 flex gap-3"><${Btn} onClick=${()=>go("fit")}>Find my fit<//><${Btn} kind="ghost" onClick=${()=>go("plan")}>My plan<//></div></div></div></section>`}

function App(){
 const read=()=>{try{return location.hash.slice(1)||"home"}catch(e){return"home"}};
 const [route,setRoute]=useState(read);
 const [plan,setPlan]=useLS("bwg2-plan",[]);const [done,setDone]=useLS("bwg2-done",{});const [checks,setChecks]=useLS("bwg2-checks",[]);
 useEffect(()=>{const h=()=>setRoute(read());window.addEventListener("hashchange",h);return()=>window.removeEventListener("hashchange",h)},[]);
 const go=r=>{setRoute(r);try{location.hash=r}catch(e){}window.scrollTo(0,0)};
 const S={plan,done,checks,setDone,setChecks,add:id=>{if(!plan.some(x=>x.pid===id))setPlan([...plan,{pid:id,start:today()}])},remove:id=>setPlan(plan.filter(x=>x.pid!==id)),reset:()=>{setPlan([]);setDone({});setChecks([])}};
 let page;
 if(route.startsWith("product-"))page=html`<${Product} id=${route.slice(8)} go=${go} S=${S}/>`;
 else if(route==="fit")page=html`<${Fit} go=${go} S=${S}/>`;
 else if(route==="products")page=html`<${Products} go=${go} S=${S}/>`;
 else if(route==="plan")page=html`<${Plan} go=${go} S=${S}/>`;
 else if(route==="help")page=html`<${Help} go=${go}/>`;
 else page=html`<${Home} go=${go}/>`;
 return html`<div class="flex min-h-screen flex-col">
  <${Nav} route=${route} go=${go}/><main class="flex-1">${page}</main>
  <footer class="border-t border-blush-100 bg-blush-50/50 py-8 text-xs text-sage-700"><div class=${W+" grid gap-3 lg:grid-cols-3 lg:gap-10"}><p><b>Bodywise Guide</b> is an independent product guide and is not the official Be Bodywise website. Brand and product names belong to their respective owners.</p><p>The information here is for general guidance and isn’t medical advice. Results vary from person to person, and product details can change, so please check your pack and speak to a qualified professional about any health concern.</p><p>Your plan and check-ins are saved only on this device.</p></div></footer></div>`}

export default App;