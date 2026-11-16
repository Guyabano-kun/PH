/* PH shared site mechanisms. Page-specific translation and content logic stays in each HTML file. */
(function(){
  'use strict';
  const root=document.documentElement;
  const pricePattern=/(?:₱|PHP\s*|US\$\s*|USD\s*|\$\s*)\d[\d,]*(?:\.\d{1,2})?(?:\s*[–—-]\s*(?:₱|PHP\s*|US\$\s*|USD\s*|\$\s*)?\d[\d,]*(?:\.\d{1,2})?)?/g;
  const skipTags=new Set(['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','INPUT','OPTION','SELECT','STRONG','B','EM']);
  function excluded(element){
    const selector=root.dataset.priceExclude;
    try{return Boolean(selector&&element.closest(selector));}catch(error){return false;}
  }
  function emphasizeTextNode(node){
    const parent=node.parentElement;
    if(!parent||skipTags.has(parent.tagName)||parent.closest('strong,b,.price-emphasis')||excluded(parent))return;
    const value=node.nodeValue;
    pricePattern.lastIndex=0;
    if(!pricePattern.test(value))return;
    pricePattern.lastIndex=0;
    const fragment=document.createDocumentFragment();
    let last=0,match;
    while((match=pricePattern.exec(value))){
      if(match.index>last)fragment.append(document.createTextNode(value.slice(last,match.index)));
      const strong=document.createElement('strong');
      strong.className='price-emphasis';
      strong.textContent=match[0];
      fragment.append(strong);
      last=match.index+match[0].length;
    }
    if(last<value.length)fragment.append(document.createTextNode(value.slice(last)));
    node.replaceWith(fragment);
  }
  function scan(node){
    if(node.nodeType===Node.TEXT_NODE){emphasizeTextNode(node);return;}
    if(node.nodeType!==Node.ELEMENT_NODE&&node.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)return;
    if(node.nodeType===Node.ELEMENT_NODE&&(skipTags.has(node.tagName)||excluded(node)))return;
    const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);
    const texts=[];
    while(walker.nextNode())texts.push(walker.currentNode);
    texts.forEach(emphasizeTextNode);
  }
  function renderTheme({theme='auto',language='en',button,icon}={}){
    root.dataset.theme=theme;
    if(icon)icon.textContent=theme==='dark'?'☾':theme==='light'?'☀':'◐';
    if(button){
      const labels={ru:{auto:'Автоматическая тема',light:'Светлая тема',dark:'Тёмная тема'},en:{auto:'Theme: auto',light:'Theme: light',dark:'Theme: dark'}};
      button.setAttribute('aria-label',(labels[language]||labels.en)[theme]||(labels[language]||labels.en).auto);
    }
  }
  window.PHSite=window.PHSite||{};
  window.PHSite.renderTheme=renderTheme;
  window.PHSite.notifyLanguageChange=function(language){
    document.dispatchEvent(new CustomEvent('ph:languagechange',{detail:{language}}));
  };
  function start(){
    scan(document.body);
    const observer=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(scan)));
    observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();