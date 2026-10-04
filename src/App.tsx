import {useEffect,useMemo,useState} from 'react';
import {
  Activity,Archive,ArrowUp,Atom,Bot,Box,ChevronDown,Compass,Cpu,FileCode2,
  FolderKanban,Gauge,Globe2,Image,Layers3,Menu,MessageSquare,Mic,
  MoreHorizontal,Network,Paperclip,PanelLeftClose,PanelLeftOpen,Plus,Search,
  Settings2,Sparkles,WandSparkles,X,Zap,Command,Clock3,Pin,SlidersHorizontal
} from 'lucide-react';
import './styles/app.css';

type Section = 'Home'|'Chats'|'Create'|'Projects'|'Research'|'Code'|'Workspace'|'Explore'|'Agents'|'Devices'|'Archive';

const primary:[Section,any][]=[
  ['Home',Compass],['Chats',MessageSquare],['Create',WandSparkles],['Projects',FolderKanban],
  ['Research',Atom],['Code',FileCode2],['Workspace',Layers3],['Explore',Globe2]
];
const secondary:[Section,any][]=[['Agents',Bot],['Devices',Cpu],['Archive',Archive]];
const actions=[['Create Project','Turn an idea into a workspace',FolderKanban,'violet'],['Research','Explore deeply with live context',Atom,'cyan'],['Generate','Images, media, docs & more',Image,'rose'],['Build with Code','Ship software from a thought',FileCode2,'blue'],['Explore Worlds','Navigate ideas beyond the ordinary',Globe2,'gold']] as const;
const labels=['REASON','CREATE','RESEARCH','BUILD','VISION','MEMORY','AGENTS','TOOLS'];

function App(){
 const [expanded,setExpanded]=useState(true),[mobile,setMobile]=useState(false),[magic,setMagic]=useState(true);
 const [prompt,setPrompt]=useState(''),[query,setQuery]=useState(''),[toast,setToast]=useState(''),[section,setSection]=useState<Section>('Home'),[palette,setPalette]=useState(false);
 const particles=useMemo(()=>Array.from({length:46},(_,i)=>({i,left:(i*37)%100,top:(i*61)%100,delay:-((i%12)*.55),duration:6+(i%7)})),[]);
 const notify=(s:string)=>{setToast(s);window.setTimeout(()=>setToast(''),3200)};
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setPalette(v=>!v)}if(e.key==='Escape')setPalette(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
 const selectSection=(s:Section)=>{setSection(s);setMobile(false);if(s!=='Home')notify(s+' workspace surface selected — capability layer is being staged.')};
 const send=()=>{if(prompt.trim())notify('Prompt captured — ready for the ARTI execution layer.');setPrompt('')};

 return <div className={'app '+(expanded?'expanded':'collapsed')}>
  <div className="backdrop" aria-hidden="true"><div className="stars"/><div className="aurora a1"/><div className="aurora a2"/><div className="floorGrid"/><div className="vignette"/>{particles.map(p=><i key={p.i} className="particle" style={{left:p.left+'%',top:p.top+'%',animationDelay:p.delay+'s',animationDuration:p.duration+'s'}}/>)}</div>
  <aside className={'sidebar '+(mobile?'open':'')}>
   <div className="sideHead"><button className="brand" onClick={()=>selectSection('Home')}><span className="brandMark"><i/></span><b>ARTI<em>AI</em></b></button><button className="iconBtn sideToggle" onClick={()=>setExpanded(!expanded)}>{expanded?<PanelLeftClose/>:<PanelLeftOpen/>}</button></div>
   <button className="newChat" onClick={()=>{setSection('Chats');notify('New private conversation ready.')}}><span><Plus/></span><b>New conversation</b><kbd>⌘ K</kbd></button>
   <nav><small>INTELLIGENCE</small>{primary.map(([name,Icon])=><button key={name} className={'nav '+(section===name?'active':'')} onClick={()=>selectSection(name)}><Icon/><span>{name}</span>{section===name&&<i/>}</button>)}</nav>
   <nav className="lower"><small>SYSTEMS</small>{secondary.map(([name,Icon])=><button key={name} className={'nav '+(section===name?'active':'')} onClick={()=>selectSection(name)}><Icon/><span>{name}</span></button>)}</nav>
   <div className="sideBottom"><div className="coreStatus"><i/><div><b>ARTI CORE</b><span>Private environment · Ready</span></div></div><button className="nav" onClick={()=>notify('Control center surface selected.')}><Settings2/><span>Settings</span></button><div className="profile"><div className="avatar">R</div><div><b>Ramakanth</b><span>Owner · Sovereign access</span></div><ChevronDown/></div></div>
  </aside>
  {mobile&&<button className="scrim" onClick={()=>setMobile(false)} aria-label="Close navigation"/>}
  <main>
   <header className="topbar"><button className="iconBtn mobileMenu" onClick={()=>setMobile(true)}><Menu/></button><div className="crumb"><i/> {section} <b>/ Intelligence</b></div><div className="topActions">
    <label className="search"><Search/><input aria-label="Search ARTI" value={query} onChange={e=>setQuery(e.target.value)} onFocus={()=>setPalette(true)} placeholder="Search ARTI"/><kbd>⌘ K</kbd></label>
    <button className="iconBtn desktop" aria-label="System activity" onClick={()=>notify('System status: all visual layers nominal.')}><Activity/></button><button className="iconBtn desktop" aria-label="Performance" onClick={()=>notify('Performance monitor surface selected.')}><Gauge/></button>
    <button className={'magic '+(magic?'on':'')} onClick={()=>setMagic(!magic)}><Sparkles/><span>Magic Mode</span><em>{magic?'ON':'OFF'}</em></button><button className="avatar topAvatar" onClick={()=>notify('Ramakanth · Owner access')}>R</button>
   </div></header>

   {section==='Home' ? <section className="hero">
    <div className="heroCopy"><div className="eyebrow"><i/> PRIVATE INTELLIGENCE OS <b>V∞</b></div><h1>What would you like<br/><em>to create today?</em></h1><p>Think bigger. Build faster. Explore further.<small>One intelligence layer for ideas, code, research and creation.</small></p></div>
    <div className="coreStage"><div className="coreGlow"/><div className="orbit outer"><i/><i/><i/><i/></div><div className="orbit middle"><i/><i/><i/></div><div className="globe"><div className="halo"/><div className="sphere"><div className="map"/><div className="scan"/></div><div className="core"><Sparkles/></div></div>{labels.map((x,i)=><span className={'orbitLabel l'+i} key={x}>{x}</span>)}<div className="coreCaption"><b>ARTI</b><span>INTELLIGENCE CORE</span></div></div>
    <div className="composerWrap"><div className="composerGlow"/><div className="composer"><div className="composeTop"><span><i/> LIVE CONTEXT</span><small>Private by design · Your workspace, your control</small></div><textarea aria-label="Ask ARTI" value={prompt} onChange={e=>setPrompt(e.target.value)} onKeyDown={e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter')send()}} placeholder="Ask ARTI to imagine, research, build, create, code…" rows={2}/><div className="composeBottom"><div className="tools"><button onClick={()=>notify('Attach interface ready.')}><Paperclip/>Attach</button><button onClick={()=>notify('Voice interface ready.')}><Mic/>Voice</button><button onClick={()=>notify('Model selector ready.')}><Box/>Model</button></div><button className="send" disabled={!prompt.trim()} onClick={send}><ArrowUp/></button></div></div></div>
    <div className="quickTitle"><b>START FROM A DIRECTION</b><i/><span>or describe anything above</span></div><div className="quickGrid">{actions.map(([title,sub,Icon,color])=><button className={'quick '+color} key={title} onClick={()=>setPrompt(title+': ')}><span className="quickIcon"><Icon/></span><span><b>{title}</b><small>{sub}</small></span><ArrowUp/></button>)}</div>
    <footer><span><Network/> Multimodal</span><span><Zap/> Fast by default</span><span>◈ Sovereign workspace</span><MoreHorizontal/></footer>
   </section> : <WorkspaceSurface section={section} onAction={notify}/>}
  </main>
  {palette&&<CommandPalette query={query} onClose={()=>setPalette(false)} onSelect={s=>{setPalette(false);selectSection(s)}}/>}
  {toast&&<div className="toast"><i/><b>{toast}</b><button onClick={()=>setToast('')}><X/></button></div>}
 </div>
}

function WorkspaceSurface({section,onAction}:{section:Section,onAction:(s:string)=>void}){
 const meta:Record<string,[string,string,string[]]>={
  Chats:['Conversation intelligence','Private sessions, pinned moments and long-context navigation',['New conversation','Pinned moments','Recent sessions']],
  Create:['Creation studio','Turn concepts into structured creative workspaces.',['Image','Video','Document']],
  Projects:['Project command center','Projects become persistent spaces with context, files and versions.',['New project','Open workspace','Version history']],
  Research:['Deep research','A focused surface for sources, synthesis, evidence and follow-up.',['Start research','Source map','Research memory']],
  Code:['Engineering workspace','Build, inspect, test and iterate without leaving ARTI.',['New code task','Repository context','Quality gate']],
  Workspace:['Artifact workspace','A persistent canvas for generated work, versions and exports.',['New artifact','Versions','Export']],
  Explore:['Explore worlds','Navigate ideas, knowledge and multimodal experiences beyond chat.',['Discover','Visual worlds','Knowledge map']],
  Agents:['Agent control','Orchestrate specialized work with explicit scope and permissions.',['Create agent','Task queue','Permissions']],
  Devices:['Device continuity','A future control surface for trusted devices and sessions.',['Pair device','Sessions','Security']],
  Archive:['Archive intelligence','Preserve, retrieve and organize completed work.',['Search archive','Pinned','Restore']]
 };
 const [title,sub,items]=meta[section];
 return <section className="workspaceSurface">
   <div className="surfaceHead"><div><div className="eyebrow"><i/> ARTI WORKSPACE LAYER</div><h2>{title}</h2><p>{sub}</p></div><button className="surfaceControl" onClick={()=>onAction('Control surface ready for the next implementation layer.')}><SlidersHorizontal/> Control</button></div>
   <div className="surfaceGrid">{items.map((x,i)=><button className="surfaceCard" key={x} onClick={()=>onAction(x+' surface selected.')}>{i===0?<Sparkles/>:i===1?<Clock3/>:<Pin/>}<b>{x}</b><span>Open the structured ARTI experience</span><ArrowUp/></button>)}</div>
   <div className="surfacePanel"><div className="panelIcon"><Command/></div><div><b>One workspace, one intelligence layer.</b><p>This surface is intentionally connected to the same navigation, context and permission model. Backend execution is not faked.</p></div><span className="panelStatus">FOUNDATION READY</span></div>
 </section>
}

function CommandPalette({query,onClose,onSelect}:{query:string,onClose:()=>void,onSelect:(s:Section)=>void}){
 const all:Section[]=['Home','Chats','Create','Projects','Research','Code','Workspace','Explore','Agents','Devices','Archive'];
 const filtered=all.filter(x=>x.toLowerCase().includes(query.toLowerCase()));
 return <div className="paletteScrim" onMouseDown={onClose}><div className="palette" onMouseDown={e=>e.stopPropagation()}><div className="paletteSearch"><Search/><input autoFocus value={query} readOnly placeholder="Search ARTI surfaces…"/><kbd>ESC</kbd></div><div className="paletteList">{filtered.map(x=><button key={x} onClick={()=>onSelect(x)}><span><Command/>{x}</span><small>Open surface</small></button>)}{!filtered.length&&<div className="paletteEmpty">No matching ARTI surface.</div>}</div></div></div>
}

export default App;