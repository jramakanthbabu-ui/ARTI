import {useMemo,useState} from 'react';
import {Activity,Archive,ArrowUp,Atom,Bot,Box,ChevronDown,Compass,Cpu,FileCode2,FolderKanban,Gauge,Globe2,Image,Layers3,Menu,MessageSquare,Mic,MoreHorizontal,Network,Paperclip,PanelLeftClose,PanelLeftOpen,Plus,Search,Settings2,Sparkles,WandSparkles,X,Zap} from 'lucide-react';
import './styles/app.css';

const primary=[['Home',Compass],['Chats',MessageSquare],['Create',WandSparkles],['Projects',FolderKanban],['Research',Atom],['Code',FileCode2],['Workspace',Layers3],['Explore',Globe2]] as const;
const secondary=[['Agents',Bot],['Devices',Cpu],['Archive',Archive]] as const;
const actions=[['Create Project','Turn an idea into a workspace',FolderKanban,'violet'],['Research','Explore deeply with live context',Atom,'cyan'],['Generate','Images, media, docs & more',Image,'rose'],['Build with Code','Ship software from a thought',FileCode2,'blue'],['Explore Worlds','Navigate ideas beyond the ordinary',Globe2,'gold']] as const;
const labels=['REASON','CREATE','RESEARCH','BUILD','VISION','MEMORY','AGENTS','TOOLS'];

export default function App(){
 const [expanded,setExpanded]=useState(true),[mobile,setMobile]=useState(false),[magic,setMagic]=useState(true),[prompt,setPrompt]=useState(''),[query,setQuery]=useState(''),[toast,setToast]=useState('');
 const particles=useMemo(()=>Array.from({length:46},(_,i)=>({i,left:(i*37)%100,top:(i*61)%100,delay:-((i%12)*.55),duration:6+(i%7)})),[]);
 const notify=(s:string)=>{setToast(s);window.setTimeout(()=>setToast(''),3000)};
 const send=()=>{if(prompt.trim())notify('Prompt captured — the AI execution layer will plug into this workspace.');setPrompt('')};
 return <div className={'app '+(expanded?'expanded':'collapsed')}>
  <div className="backdrop" aria-hidden="true"><div className="stars"/><div className="aurora a1"/><div className="aurora a2"/><div className="floorGrid"/><div className="vignette"/>{particles.map(p=><i key={p.i} className="particle" style={{left:p.left+'%',top:p.top+'%',animationDelay:p.delay+'s',animationDuration:p.duration+'s'}}/>)}</div>
  <aside className={'sidebar '+(mobile?'open':'')}>
   <div className="sideHead"><button className="brand" onClick={()=>notify('ARTI — your private intelligence environment.')}><span className="brandMark"><i/></span><b>ARTI<em>AI</em></b></button><button className="iconBtn sideToggle" onClick={()=>setExpanded(!expanded)}>{expanded?<PanelLeftClose/>:<PanelLeftOpen/>}</button></div>
   <button className="newChat" onClick={()=>notify('New private session ready.')}><span><Plus/></span><b>New conversation</b><kbd>⌘ K</kbd></button>
   <nav><small>INTELLIGENCE</small>{primary.map(([name,Icon])=><button key={name} className={'nav '+(name==='Home'?'active':'')} onClick={()=>notify(name+' is part of the ARTI workspace.')}><Icon/><span>{name}</span>{name==='Home'&&<i/>}</button>)}</nav>
   <nav className="lower"><small>SYSTEMS</small>{secondary.map(([name,Icon])=><button key={name} className="nav" onClick={()=>notify(name+' is ready for the next ARTI phase.')}><Icon/><span>{name}</span></button>)}</nav>
   <div className="sideBottom"><div className="coreStatus"><i/><div><b>ARTI CORE</b><span>Private environment · Ready</span></div></div><button className="nav" onClick={()=>notify('Control center reserved for the next layer.')}><Settings2/><span>Settings</span></button><div className="profile"><div className="avatar">R</div><div><b>Ramakanth</b><span>Owner · Sovereign access</span></div><ChevronDown/></div></div>
  </aside>
  {mobile&&<button className="scrim" onClick={()=>setMobile(false)} aria-label="Close navigation"/>}
  <main>
   <header className="topbar"><button className="iconBtn mobileMenu" onClick={()=>setMobile(true)}><Menu/></button><div className="crumb"><i/> Home <b>/ Intelligence</b></div><div className="topActions">
    <label className="search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search ARTI"/><kbd>⌘ K</kbd></label>
    <button className="iconBtn desktop" onClick={()=>notify('System status: all visual layers nominal.')}><Activity/></button><button className="iconBtn desktop" onClick={()=>notify('Control center will open here.')}><Gauge/></button>
    <button className={'magic '+(magic?'on':'')} onClick={()=>setMagic(!magic)}><Sparkles/><span>Magic Mode</span><em>{magic?'ON':'OFF'}</em></button><button className="avatar topAvatar" onClick={()=>notify('Ramakanth · Owner access')}>R</button>
   </div></header>
   <section className="hero">
    <div className="heroCopy"><div className="eyebrow"><i/> PRIVATE INTELLIGENCE OS <b>V∞</b></div><h1>What would you like<br/><em>to create today?</em></h1><p>Think bigger. Build faster. Explore further.<small>One intelligence layer for ideas, code, research and creation.</small></p></div>
    <div className="coreStage"><div className="coreGlow"/><div className="orbit outer"><i/><i/><i/><i/></div><div className="orbit middle"><i/><i/><i/></div><div className="globe"><div className="halo"/><div className="sphere"><div className="map"/><div className="scan"/></div><div className="core"><Sparkles/></div></div>{labels.map((x,i)=><span className={'orbitLabel l'+i} key={x}>{x}</span>)}<div className="coreCaption"><b>ARTI</b><span>INTELLIGENCE CORE</span></div></div>
    <div className="composerWrap"><div className="composerGlow"/><div className="composer"><div className="composeTop"><span><i/> LIVE CONTEXT</span><small>Private by design · Your workspace, your control</small></div><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} onKeyDown={e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter')send()}} placeholder="Ask ARTI to imagine, research, build, create, code…" rows={2}/><div className="composeBottom"><div className="tools"><button onClick={()=>notify('Attach interface ready.')}><Paperclip/>Attach</button><button onClick={()=>notify('Voice interface ready.')}><Mic/>Voice</button><button onClick={()=>notify('Model selector ready.')}><Box/>Model</button></div><button className="send" disabled={!prompt.trim()} onClick={send}><ArrowUp/></button></div></div></div>
    <div className="quickTitle"><b>START FROM A DIRECTION</b><i/><span>or describe anything above</span></div><div className="quickGrid">{actions.map(([title,sub,Icon,color])=><button className={'quick '+color} key={title} onClick={()=>setPrompt(title+': ')}><span className="quickIcon"><Icon/></span><span><b>{title}</b><small>{sub}</small></span><ArrowUp/></button>)}</div>
    <footer><span><Network/> Multimodal</span><span><Zap/> Fast by default</span><span>◈ Sovereign workspace</span><MoreHorizontal/></footer>
   </section>
  </main>
  {toast&&<div className="toast"><i/><b>{toast}</b><button onClick={()=>setToast('')}><X/></button></div>}
 </div>
}