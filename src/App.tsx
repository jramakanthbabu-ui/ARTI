import {useEffect,useMemo,useState} from 'react';
import {
  Activity,Archive,ArrowUp,Atom,Bot,Code2,Command,Compass,FileImage,FolderKanban,
  History,Image,Layers3,Link2,Menu,MessageCircle,Mic,MoreHorizontal,Paperclip,
  Pin,Plus,Search,Settings2,Sparkles,SquareTerminal,Star,Users,Video,Volume2,X,Zap
} from 'lucide-react';
import './styles/app.css';

type Section =
  | 'Home'|'Chats'|'History'|'Pins'|'Research'|'Labs'|'Projects'|'Software'
  | 'Create'|'Workspace'|'Agents'|'Archive';

type ToolAction = 'voice'|'image'|'link'|'attach';

const navGroups:[string,[Section,any][]][] = [
  ['COMMAND',[['Home',Compass],['Chats',MessageCircle],['History',History],['Pins',Pin]]],
  ['CREATE & DISCOVER',[['Research',Atom],['Labs',Sparkles],['Projects',FolderKanban],['Software',Code2]]],
  ['SYSTEM',[['Create',Image],['Workspace',Layers3],['Agents',Bot],['Archive',Archive]]]
];

const recent = [
  ['The next generation of private AI','Today · 18:42','Research'],
  ['ARTI operating architecture','Today · 15:08','Project'],
  ['Premium interface direction','Yesterday · 22:14','Design'],
];

const starterCards = [
  ['Research anything','Deep research, sources, synthesis',Atom],
  ['Build software','Apps, systems, code & architecture',SquareTerminal],
  ['Create visuals','Images, video, presentations',FileImage],
  ['Plan a project','Turn an idea into an execution space',FolderKanban],
];

function App(){
  const [section,setSection]=useState<Section>('Home');
  const [mobileNav,setMobileNav]=useState(false);
  const [search,setSearch]=useState('');
  const [prompt,setPrompt]=useState('');
  const [toast,setToast]=useState('');
  const [focus,setFocus]=useState(false);
  const particles=useMemo(()=>Array.from({length:34},(_,i)=>({i,x:(i*29)%100,y:(i*47)%100,d:(i%9)*.7})),[]);

  const notify=(message:string)=>{setToast(message);window.setTimeout(()=>setToast(''),2800)};
  const choose=(next:Section)=>{setSection(next);setMobileNav(false);if(next!=='Home')notify(next+' surface selected — foundation ready.')};
  const submit=()=>{if(!prompt.trim())return;notify('Your instruction is staged for the ARTI execution layer.');setPrompt('')};

  useEffect(()=>{
    const key=(e:KeyboardEvent)=>{
      if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setFocus(true)}
      if(e.key==='Escape'){setFocus(false);setMobileNav(false)}
    };
    window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);
  },[]);

  return <div className="appShell">
    <div className="ambient" aria-hidden="true">
      <div className="nebula nebulaOne"/><div className="nebula nebulaTwo"/><div className="starfield"/>
      <div className="horizon"/>{particles.map(p=><i key={p.i} style={{left:p.x+'%',top:p.y+'%',animationDelay:-p.d+'s'}}/>)}
    </div>

    <aside className={'navRail '+(mobileNav?'mobileOpen':'')}>
      <div className="railBrand" onClick={()=>choose('Home')}>
        <div className="artiGlyph"><span/><i/><b/></div>
        <div><strong>ARTI</strong><small>INTELLIGENCE SYSTEM</small></div>
      </div>
      <button className="newThread" onClick={()=>choose('Chats')}><span><Plus/></span><b>New thread</b><kbd>⌘ N</kbd></button>
      <div className="railScroll">
        {navGroups.map(([label,items])=><div className="navGroup" key={label}><label>{label}</label>{items.map(([name,Icon])=>
          <button key={name} className={'railItem '+(section===name?'selected':'')} onClick={()=>choose(name)}>
            <Icon/><span>{name}</span>{section===name&&<em/>}
          </button>
        )}</div>)}
      </div>
      <div className="railFooter">
        <div className="coreCard"><span className="statusDot"/><div><b>CORE ONLINE</b><small>Private · Local context</small></div><Activity/></div>
        <button className="railItem" onClick={()=>notify('Settings control center opened.')}><Settings2/><span>Settings</span></button>
        <div className="owner"><div className="ownerAvatar">R</div><div><b>Ramakanth</b><small>Owner access</small></div><MoreHorizontal/></div>
      </div>
    </aside>
    {mobileNav&&<button className="navBackdrop" onClick={()=>setMobileNav(false)} aria-label="Close menu"/>}

    <main className="mainShell">
      <header className="topNav">
        <button className="mobileMenu" onClick={()=>setMobileNav(true)}><Menu/></button>
        <div className="topIdentity"><span className="liveDot"/>{section}<b> / ARTI OS</b></div>
        <div className="topRight">
          <button className="globalSearch" onClick={()=>setFocus(true)}><Search/><span>{search||'Search everything'}</span><kbd>⌘ K</kbd></button>
          <button className="topIcon" onClick={()=>notify('Activity stream is ready.')}><Activity/></button>
          <button className="topIcon" onClick={()=>notify('ARTI is operating in private mode.')}><Users/></button>
          <button className="ownerAvatar mini" onClick={()=>notify('Owner control center.')}>R</button>
        </div>
      </header>

      {section==='Home' ? <Home prompt={prompt} setPrompt={setPrompt} submit={submit} notify={notify} choose={choose}/> :
        <Surface section={section} choose={choose} notify={notify}/>}
    </main>

    {focus&&<SearchOverlay value={search} setValue={setSearch} close={()=>setFocus(false)} choose={choose}/>}
    {toast&&<div className="toast"><span/><b>{toast}</b><button onClick={()=>setToast('')}><X/></button></div>}
  </div>
}

function Home({prompt,setPrompt,submit,notify,choose}:{prompt:string;setPrompt:(v:string)=>void;submit:()=>void;notify:(v:string)=>void;choose:(s:Section)=>void}){
  return <section className="home">
    <div className="homeHeader">
      <div className="statusPill"><span/> PRIVATE INTELLIGENCE · V∞ <b>ONLINE</b></div>
      <h1>Build what the<br/><em>future feels like.</em></h1>
      <p>ARTI is your private intelligence environment for thinking, researching,<br className="desktopOnly"/> creating, coding and turning ideas into real systems.</p>
    </div>

    <div className="commandCore">
      <div className="coreHalo"/>
      <div className="coreRings"><i/><i/><i/></div>
      <div className="coreSphere"><div className="coreLines"/><Sparkles/></div>
      <div className="coreWord"><strong>ARTI</strong><span>PRIVATE INTELLIGENCE</span></div>
      <div className="signal s1"><span>REASON</span><b/></div>
      <div className="signal s2"><span>CREATE</span><b/></div>
      <div className="signal s3"><span>RESEARCH</span><b/></div>
      <div className="signal s4"><span>BUILD</span><b/></div>
    </div>

    <div className="promptShell">
      <div className="promptTop"><span><i/> READY FOR INSTRUCTION</span><small>Multimodal · Private · Context-aware</small></div>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} onKeyDown={e=>{if((e.metaKey||e.ctrlKey)&&e.key==='Enter')submit()}} placeholder="Tell ARTI what you want to make, understand, research or build…" rows={2}/>
      <div className="promptBottom">
        <div className="promptTools">
          <ToolButton icon={Paperclip} label="Attach" onClick={()=>notify('Attachment control ready.')}/>
          <ToolButton icon={Mic} label="Voice" onClick={()=>notify('Voice input control ready.')}/>
          <ToolButton icon={Image} label="Images" onClick={()=>notify('Image creation control ready.')}/>
          <ToolButton icon={Link2} label="Links" onClick={()=>notify('Link/context control ready.')}/>
          <ToolButton icon={Volume2} label="Voice out" onClick={()=>notify('Voice output control ready.')}/>
        </div>
        <div className="promptRight"><span>⌘ ↵</span><button className="execute" disabled={!prompt.trim()} onClick={submit}><ArrowUp/></button></div>
      </div>
    </div>

    <div className="starterRow">
      {starterCards.map(([title,sub,Icon])=><button key={title} onClick={()=>{setPrompt(title+' — ');notify(title+' mode prepared.')}}><span className="starterIcon"><Icon/></span><span><b>{title}</b><small>{sub}</small></span><ArrowUp/></button>)}
    </div>

    <div className="homeGrid">
      <div className="sectionBlock">
        <div className="blockTitle"><span>RECENT INTELLIGENCE</span><button onClick={()=>choose('History')}>View history <ArrowUp/></button></div>
        {recent.map(([title,time,type])=><button className="recentItem" key={title} onClick={()=>notify(title+' selected.')}>
          <span className="recentGlyph">{type==='Research'?<Atom/>:type==='Project'?<FolderKanban/>:<Star/>}</span><span><b>{title}</b><small>{time}</small></span><em>{type}</em><MoreHorizontal/>
        </button>)}
      </div>
      <div className="sectionBlock visionPanel">
        <div className="blockTitle"><span>THE ARTI ENVIRONMENT</span><button onClick={()=>notify('Workspace overview opened.')}>Explore <ArrowUp/></button></div>
        <div className="vision"><div className="visionGrid"/><div className="visionOrb"><Sparkles/></div><div><b>One intelligence layer.</b><small>Chats · Research · Labs · Projects · Software · Creation</small></div></div>
      </div>
    </div>
  </section>
}

function ToolButton({icon:Icon,label,onClick}:{icon:any;label:string;onClick:()=>void}){
 return <button onClick={onClick}><Icon/><span>{label}</span></button>
}

function Surface({section,choose,notify}:{section:Section;choose:(s:Section)=>void;notify:(v:string)=>void}){
 const data:Record<Section,[string,string,string]> = {
  Chats:['Chats','Conversations become organized intelligence, not a pile of messages.','CONVERSATION SPACE'],
  History:['History','Your work, ideas and decisions remain easy to navigate.','TIMELINE'],
  Pins:['Pins','Keep exact moments, answers and decisions one tap away.','PRECISION MEMORY'],
  Research:['Research','Deep research with evidence, synthesis and follow-up workflows.','RESEARCH ENGINE'],
  Labs:['Labs','Experimental capabilities, new interfaces and future tools live here.','EXPERIMENTAL'],
  Projects:['Projects','Persistent execution spaces for ambitious work.','PROJECT OS'],
  Software:['Software','Build products, codebases and technical systems with ARTI.','ENGINEERING'],
  Create:['Create','A premium studio for images, media, documents and ideas.','CREATION STUDIO'],
  Workspace:['Workspace','Artifacts, versions, context and outputs in one place.','ARTIFACT OS'],
  Agents:['Agents','Specialized workers with explicit scope, tools and permissions.','AGENT CONTROL'],
  Archive:['Archive','Completed work stays discoverable without cluttering the active workspace.','ARCHIVE'],
  Home:['Home','','']
 };
 const [title,desc,kicker]=data[section];
 const cards = section==='Research'?['New research','Source map','Synthesis','Follow-up']:
   section==='Software'?['New software task','Code workspace','Repository','Quality gate']:
   section==='Projects'?['New project','Project context','Milestones','Versions']:
   section==='Chats'?['New conversation','Pinned moments','Long context','Search chats']:
   ['Open workspace','New item','Recent activity','Controls'];
 return <section className="surface">
   <div className="surfaceHero"><div><span className="surfaceKicker"><i/>{kicker}</span><h2>{title}<em>.</em></h2><p>{desc}</p></div><button className="primaryAction" onClick={()=>notify('New '+title+' workspace prepared.')}><Plus/> New</button></div>
   <div className="surfaceCards">{cards.map((x,i)=><button key={x} onClick={()=>notify(x+' selected.')}><div className="surfaceNumber">0{i+1}</div><Sparkles/><b>{x}</b><small>Open the ARTI experience</small><ArrowUp/></button>)}</div>
   <div className="surfaceWide"><div className="wideIcon"><Command/></div><div><span>CONNECTED WORKSPACE</span><b>Every surface shares one context and permission model.</b><small>UI foundation only — no fake backend execution. Real intelligence, persistence and integrations are added in their dedicated implementation layers.</small></div><button onClick={()=>choose('Home')}>Back home <ArrowUp/></button></div>
 </section>
}

function SearchOverlay({value,setValue,close,choose}:{value:string;setValue:(v:string)=>void;close:()=>void;choose:(s:Section)=>void}){
 const options=['Home','Chats','History','Pins','Research','Labs','Projects','Software','Create','Workspace','Agents','Archive'] as Section[];
 const filtered=options.filter(x=>x.toLowerCase().includes(value.toLowerCase()));
 return <div className="searchOverlay" onMouseDown={close}><div className="searchModal" onMouseDown={e=>e.stopPropagation()}>
   <div className="modalInput"><Search/><input autoFocus value={value} onChange={e=>setValue(e.target.value)} placeholder="Search ARTI surfaces, chats, projects…"/><kbd>ESC</kbd></div>
   <div className="searchResults">{filtered.map((x,i)=><button key={x} onClick={()=>{choose(x);close()}}><span><Command/>{x}</span><small>{i<4?'Core surface':'Workspace surface'}</small></button>)}</div>
 </div></div>
}

export default App;
