const {app,BrowserWindow}=require('electron');
const fs=require('fs'),path=require('path');
app.disableHardwareAcceleration();app.on('window-all-closed',()=>{});
const project=path.resolve(__dirname,'../..');
const baseline=process.env.KOUBROWSER_BASELINE||path.resolve(project,'../koubrowser-baseline');
const output=process.env.KOUBROWSER_QA_OUTPUT||path.join(project,'out/localization-qa');fs.mkdirSync(output,{recursive:true});
app.whenReady().then(async()=>{
const results=[];
for(const variant of ['baseline','ja','ko']){
 const language=variant==='ko'?'ko':'ja';
 const win=new BrowserWindow({width:1040,height:800,show:false,webPreferences:{offscreen:true,sandbox:false,contextIsolation:true,preload:path.join(__dirname,'preload.cjs'),additionalArguments:['--qa-language='+language]}});
 const errors=[];win.webContents.on('console-message',e=>{if(e.level==='error')errors.push(e.message)});win.webContents.on('render-process-gone',(_,d)=>errors.push(d.reason));
 const repo=variant==='baseline'?baseline:project;
 await win.loadFile(path.join(repo,'out/renderer/option.html'));
 for(let n=0;n<50;n++){if(await win.webContents.executeJavaScript("!!document.querySelector('.option-title')"))break;await new Promise(r=>setTimeout(r,100))}
 for(let category=0;category<4;category++){
  await win.webContents.executeJavaScript(`[...document.querySelectorAll('.option-category')][${category}].click()`);
  await win.webContents.executeJavaScript("(()=>{const s=document.createElement('style');s.textContent='*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}';document.head.append(s)})()");await new Promise(r=>setTimeout(r,200));
  const name=['general','quest','network','extension'][category];
  win.webContents.invalidate();await new Promise(r=>setTimeout(r,100));const img=await win.webContents.capturePage();fs.writeFileSync(`${output}/${variant}-${name}.png`,img.toPNG());
  const geometry=await win.webContents.executeJavaScript(`(()=>{const s=getComputedStyle(document.body);return {lang:document.documentElement.lang,text:document.body.innerText,font:s.fontFamily,bodyOverflow:document.documentElement.scrollWidth>innerWidth,controls:[...document.querySelectorAll('button,input,select,.option-sidebar,.option-content-header')].map(e=>{const r=e.getBoundingClientRect();const s=getComputedStyle(e);return {tag:e.tagName,text:e.innerText||e.getAttribute('aria-label'),x:r.x,y:r.y,w:r.width,h:r.height,font:s.fontFamily,size:s.fontSize,visible:!!(r.width&&r.height),clipped:e.scrollWidth>e.clientWidth+1}})}})()`);
  results.push({variant,category:name,errors,...geometry});
 }
 if(variant!=='baseline'){
  await win.webContents.executeJavaScript("document.querySelectorAll('.option-category')[0].click()");await new Promise(r=>setTimeout(r,70));
  await win.webContents.executeJavaScript("document.querySelector('#interface-language').scrollIntoView({block:'center'})");
  win.webContents.invalidate();await new Promise(r=>setTimeout(r,100));const img=await win.webContents.capturePage();fs.writeFileSync(`${output}/${variant}-language.png`,img.toPNG());
 }
 win.destroy();
}
fs.writeFileSync(output+'/results.json',JSON.stringify(results,null,2));console.log('Captured 14 interface screenshots.');app.quit();
}).catch(e=>{console.error(e);app.quit();process.exitCode=1});
