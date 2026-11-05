var ge=Object.defineProperty;var fe=(c,e,t)=>e in c?ge(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var f=(c,e,t)=>fe(c,typeof e!="symbol"?e+"":e,t);import{n as me,j as I,r as ne,c as ke,m as be}from"./SiteHeader-XAegYFUM.js";function B(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let E=B();function ie(c){E=c}const se=/[&<>"']/,ye=new RegExp(se.source,"g"),re=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,we=new RegExp(re.source,"g"),xe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},K=c=>xe[c];function b(c,e){if(e){if(se.test(c))return c.replace(ye,K)}else if(re.test(c))return c.replace(we,K);return c}const Te=/(^|[^\[])\^/g;function d(c,e){let t=typeof c=="string"?c:c.source;e=e||"";const n={replace:(i,s)=>{let r=typeof s=="string"?s:s.source;return r=r.replace(Te,"$1"),t=t.replace(i,r),n},getRegex:()=>new RegExp(t,e)};return n}function X(c){try{c=encodeURI(c).replace(/%25/g,"%")}catch{return null}return c}const $={exec:()=>null};function J(c,e){const t=c.replace(/\|/g,(s,r,o)=>{let a=!1,h=r;for(;--h>=0&&o[h]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function v(c,e,t){const n=c.length;if(n===0)return"";let i=0;for(;i<n&&c.charAt(n-i-1)===e;)i++;return c.slice(0,n-i)}function Ie(c,e){if(c.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<c.length;n++)if(c[n]==="\\")n++;else if(c[n]===e[0])t++;else if(c[n]===e[1]&&(t--,t<0))return n;return-1}function ee(c,e,t,n){const i=e.href,s=e.title?b(e.title):null,r=c[1].replace(/\\([\[\]])/g,"$1");if(c[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:s,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:s,text:b(r)}}function Ae(c,e){const t=c.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=n.length?i.slice(n.length):i}).join(`
`)}class M{constructor(e){f(this,"options");f(this,"rules");f(this,"lexer");this.options=e||E}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:v(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Ae(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=v(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:v(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=v(t[0],`
`).split(`
`),i="",s="";const r=[];for(;n.length>0;){let o=!1;const a=[];let h;for(h=0;h<n.length;h++)if(/^ {0,3}>/.test(n[h]))a.push(n[h]),o=!0;else if(!o)a.push(n[h]);else break;n=n.slice(h);const l=a.join(`
`),u=l.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${l}`:l,s=s?`${s}
${u}`:u;const g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,r,!0),this.lexer.state.top=g,n.length===0)break;const k=r[r.length-1];if((k==null?void 0:k.type)==="code")break;if((k==null?void 0:k.type)==="blockquote"){const m=k,y=m.raw+`
`+n.join(`
`),T=this.blockquote(y);r[r.length-1]=T,i=i.substring(0,i.length-m.raw.length)+T.raw,s=s.substring(0,s.length-m.text.length)+T.text;break}else if((k==null?void 0:k.type)==="list"){const m=k,y=m.raw+`
`+n.join(`
`),T=this.list(y);r[r.length-1]=T,i=i.substring(0,i.length-k.raw.length)+T.raw,s=s.substring(0,s.length-m.raw.length)+T.raw,n=y.substring(r[r.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o=!1;for(;e;){let a=!1,h="",l="";if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;h=t[0],e=e.substring(h.length);let u=t[2].split(`
`,1)[0].replace(/^\t+/,D=>" ".repeat(3*D.length)),g=e.split(`
`,1)[0],k=!u.trim(),m=0;if(this.options.pedantic?(m=2,l=u.trimStart()):k?m=t[1].length+1:(m=t[2].search(/[^ ]/),m=m>4?1:m,l=u.slice(m),m+=t[1].length),k&&/^[ \t]*$/.test(g)&&(h+=g+`
`,e=e.substring(g.length+1),a=!0),!a){const D=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Z=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),V=new RegExp(`^ {0,${Math.min(3,m-1)}}#`),de=new RegExp(`^ {0,${Math.min(3,m-1)}}<(?:[a-z].*>|!--)`,"i");for(;e;){const U=e.split(`
`,1)[0];let R;if(g=U,this.options.pedantic?(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),R=g):R=g.replace(/\t/g,"    "),Q.test(g)||V.test(g)||de.test(g)||D.test(g)||Z.test(g))break;if(R.search(/[^ ]/)>=m||!g.trim())l+=`
`+R.slice(m);else{if(k||u.replace(/\t/g,"    ").search(/[^ ]/)>=4||Q.test(u)||V.test(u)||Z.test(u))break;l+=`
`+g}!k&&!g.trim()&&(k=!0),h+=U+`
`,e=e.substring(U.length+1),u=R.slice(m)}}s.loose||(o?s.loose=!0:/\n[ \t]*\n[ \t]*$/.test(h)&&(o=!0));let y=null,T;this.options.gfm&&(y=/^\[[ xX]\] /.exec(l),y&&(T=y[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:h,task:!!y,checked:T,loose:!1,text:l,tokens:[]}),s.raw+=h}s.items[s.items.length-1].raw=s.items[s.items.length-1].raw.trimEnd(),s.items[s.items.length-1].text=s.items[s.items.length-1].text.trimEnd(),s.raw=s.raw.trimEnd();for(let a=0;a<s.items.length;a++)if(this.lexer.state.top=!1,s.items[a].tokens=this.lexer.blockTokens(s.items[a].text,[]),!s.loose){const h=s.items[a].tokens.filter(u=>u.type==="space"),l=h.length>0&&h.some(u=>/\n.*\n/.test(u.raw));s.loose=l}if(s.loose)for(let a=0;a<s.items.length;a++)s.items[a].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=J(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const o of i)/^ *-+: *$/.test(o)?r.align.push("right"):/^ *:-+: *$/.test(o)?r.align.push("center"):/^ *:-+ *$/.test(o)?r.align.push("left"):r.align.push(null);for(let o=0;o<n.length;o++)r.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:r.align[o]});for(const o of s)r.rows.push(J(o,r.header.length).map((a,h)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:r.align[h]})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:b(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=v(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=Ie(t[2],"()");if(r>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),ee(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return ee(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...i[0]].length-1;let o,a,h=r,l=0;const u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+r);(i=u.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(a=[...o].length,i[3]||i[4]){h+=a;continue}else if((i[5]||i[6])&&r%3&&!((r+a)%3)){l+=a;continue}if(h-=a,h>0)continue;a=Math.min(a,a+h+l);const g=[...i[0]][0].length,k=e.slice(0,r+i.index+g+a);if(Math.min(r,a)%2){const y=k.slice(1,-1);return{type:"em",raw:k,text:y,tokens:this.lexer.inlineTokens(y)}}const m=k.slice(2,-2);return{type:"strong",raw:k,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=b(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=b(t[1]),i="mailto:"+n):(n=b(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=b(t[0]),s="mailto:"+i;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);i=b(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=b(t[0]),{type:"text",raw:t[0],text:n}}}}const Ee=/^(?:[ \t]*(?:\n|$))+/,Re=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ve=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,z=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Se=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,oe=/(?:[*+-]|\d{1,9}[.)])/,ae=d(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,oe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),G=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$e=/^[^\n]+/,q=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Pe=d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",q).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ze=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,oe).getRegex(),_="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",F=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ce=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",F).replace("tag",_).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),le=d(G).replace("hr",z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_).getRegex(),Le=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",le).getRegex(),j={blockquote:Le,code:Re,def:Pe,fences:ve,heading:Se,hr:z,html:Ce,lheading:ae,list:ze,newline:Ee,paragraph:le,table:$,text:$e},te=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_).getRegex(),Me={...j,table:te,paragraph:d(G).replace("hr",z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",te).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_).getRegex()},Oe={...j,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(G).replace("hr",z).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ae).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ce=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ne=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,he=/^( {2,}|\\)\n(?!\s*$)/,_e=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,C="\\p{P}\\p{S}",De=d(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,C).getRegex(),Ue=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Ye=d(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,C).getRegex(),Be=d("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,C).getRegex(),Ge=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,C).getRegex(),qe=d(/\\([punct])/,"gu").replace(/punct/g,C).getRegex(),Fe=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),je=d(F).replace("(?:-->|$)","-->").getRegex(),He=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",je).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),O=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,We=d(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",O).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ue=d(/^!?\[(label)\]\[(ref)\]/).replace("label",O).replace("ref",q).getRegex(),pe=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",q).getRegex(),Ze=d("reflink|nolink(?!\\()","g").replace("reflink",ue).replace("nolink",pe).getRegex(),H={_backpedal:$,anyPunctuation:qe,autolink:Fe,blockSkip:Ue,br:he,code:Ne,del:$,emStrongLDelim:Ye,emStrongRDelimAst:Be,emStrongRDelimUnd:Ge,escape:ce,link:We,nolink:pe,punctuation:De,reflink:ue,reflinkSearch:Ze,tag:He,text:_e,url:$},Qe={...H,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",O).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O).getRegex()},Y={...H,escape:d(ce).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ve={...Y,br:d(he).replace("{2,}","*").getRegex(),text:d(Y.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},L={normal:j,gfm:Me,pedantic:Oe},S={normal:H,gfm:Y,breaks:Ve,pedantic:Qe};class w{constructor(e){f(this,"tokens");f(this,"options");f(this,"state");f(this,"tokenizer");f(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||E,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:L.normal,inline:S.normal};this.options.pedantic?(t.block=L.pedantic,t.inline=S.pedantic):this.options.gfm&&(t.block=L.gfm,this.options.breaks?t.inline=S.breaks:t.inline=S.gfm),this.tokenizer.rules=t}static get rules(){return{block:L,inline:S}}static lex(e,t){return new w(t).lex(e)}static lexInline(e,t){return new w(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,s,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const a=e.slice(1);let h;this.options.extensions.startBlock.forEach(l=>{h=l.call({lexer:this},a),typeof h=="number"&&h>=0&&(o=Math.min(o,h))}),o<1/0&&o>=0&&(r=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){s=t[t.length-1],n&&(s==null?void 0:s.type)==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i),n=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,r=e,o,a,h;if(this.tokens.links){const l=Object.keys(this.tokens.links);if(l.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)l.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(a||(h=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let l=1/0;const u=e.slice(1);let g;this.options.extensions.startInline.forEach(k=>{g=k.call({lexer:this},u),typeof g=="number"&&g>=0&&(l=Math.min(l,g))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),a=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return t}}class N{constructor(e){f(this,"options");f(this,"parser");this.options=e||E}space(e){return""}code({text:e,lang:t,escaped:n}){var r;const i=(r=(t||"").match(/^\S*/))==null?void 0:r[0],s=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+b(i)+'">'+(n?s:b(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:b(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let i="";for(let o=0;o<e.items.length;o++){const a=e.items[o];i+=this.listitem(a)}const s=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+s+r+`>
`+i+"</"+s+`>
`}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" "}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let i="";for(let s=0;s<e.rows.length;s++){const r=e.rows[s];n="";for(let o=0;o<r.length;o++)n+=this.tablecell(r[o]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const i=this.parser.parseInline(n),s=X(e);if(s===null)return i;e=s;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+i+"</a>",r}image({href:e,title:t,text:n}){const i=X(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class W{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class x{constructor(e){f(this,"options");f(this,"renderer");f(this,"textRenderer");this.options=e||E,this.options.renderer=this.options.renderer||new N,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new W}static parse(e,t){return new x(t).parse(e)}static parseInline(e,t){return new x(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=a||"";continue}}const r=s;switch(r.type){case"space":{n+=this.renderer.space(r);continue}case"hr":{n+=this.renderer.hr(r);continue}case"heading":{n+=this.renderer.heading(r);continue}case"code":{n+=this.renderer.code(r);continue}case"table":{n+=this.renderer.table(r);continue}case"blockquote":{n+=this.renderer.blockquote(r);continue}case"list":{n+=this.renderer.list(r);continue}case"html":{n+=this.renderer.html(r);continue}case"paragraph":{n+=this.renderer.paragraph(r);continue}case"text":{let o=r,a=this.renderer.text(o);for(;i+1<e.length&&e[i+1].type==="text";)o=e[++i],a+=`
`+this.renderer.text(o);t?n+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a}]}):n+=a;continue}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=o||"";continue}}const r=s;switch(r.type){case"escape":{n+=t.text(r);break}case"html":{n+=t.html(r);break}case"link":{n+=t.link(r);break}case"image":{n+=t.image(r);break}case"strong":{n+=t.strong(r);break}case"em":{n+=t.em(r);break}case"codespan":{n+=t.codespan(r);break}case"br":{n+=t.br(r);break}case"del":{n+=t.del(r);break}case"text":{n+=t.text(r);break}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class P{constructor(e){f(this,"options");f(this,"block");this.options=e||E}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?w.lex:w.lexInline}provideParser(){return this.block?x.parse:x.parseInline}}f(P,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Ke{constructor(...e){f(this,"defaults",B());f(this,"options",this.setOptions);f(this,"parse",this.parseMarkdown(!0));f(this,"parseInline",this.parseMarkdown(!1));f(this,"Parser",x);f(this,"Renderer",N);f(this,"TextRenderer",W);f(this,"Lexer",w);f(this,"Tokenizer",M);f(this,"Hooks",P);this.use(...e)}walkTokens(e,t){var i,s;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const o=r;for(const a of o.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of o.rows)for(const h of a)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const o=r;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=r;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{const h=o[a].flat(1/0);n=n.concat(this.walkTokens(h,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=t.renderers[s.name];r?t.renderers[s.name]=function(...o){let a=s.renderer.apply(this,o);return a===!1&&(a=r.apply(this,o)),a}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[s.level];r?r.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new N(this.defaults);for(const r in n.renderer){if(!(r in s))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const o=r,a=n.renderer[o],h=s[o];s[o]=(...l)=>{let u=a.apply(s,l);return u===!1&&(u=h.apply(s,l)),u||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new M(this.defaults);for(const r in n.tokenizer){if(!(r in s))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const o=r,a=n.tokenizer[o],h=s[o];s[o]=(...l)=>{let u=a.apply(s,l);return u===!1&&(u=h.apply(s,l)),u}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new P;for(const r in n.hooks){if(!(r in s))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const o=r,a=n.hooks[o],h=s[o];P.passThroughHooks.has(r)?s[o]=l=>{if(this.defaults.async)return Promise.resolve(a.call(s,l)).then(g=>h.call(s,g));const u=a.call(s,l);return h.call(s,u)}:s[o]=(...l)=>{let u=a.apply(s,l);return u===!1&&(u=h.apply(s,l)),u}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,r=n.walkTokens;i.walkTokens=function(o){let a=[];return a.push(r.call(this,o)),s&&(a=a.concat(s.call(this,o))),a}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return w.lex(e,t??this.defaults)}parser(e,t){return x.parse(e,t??this.defaults)}parseMarkdown(e){return(n,i)=>{const s={...i},r={...this.defaults,...s},o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const a=r.hooks?r.hooks.provideLexer():e?w.lex:w.lexInline,h=r.hooks?r.hooks.provideParser():e?x.parse:x.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>a(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>h(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let l=a(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let u=h(l,r);return r.hooks&&(u=r.hooks.postprocess(u)),u}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+b(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}}}const A=new Ke;function p(c,e){return A.parse(c,e)}p.options=p.setOptions=function(c){return A.setOptions(c),p.defaults=A.defaults,ie(p.defaults),p};p.getDefaults=B;p.defaults=E;p.use=function(...c){return A.use(...c),p.defaults=A.defaults,ie(p.defaults),p};p.walkTokens=function(c,e){return A.walkTokens(c,e)};p.parseInline=A.parseInline;p.Parser=x;p.parser=x.parse;p.Renderer=N;p.TextRenderer=W;p.Lexer=w;p.lexer=w.lex;p.Tokenizer=M;p.Hooks=P;p.parse=p;p.options;p.setOptions;p.use;p.walkTokens;p.parseInline;x.parse;w.lex;const Xe=`# Terms of Service
**MateAI**

**Last Updated:** November 5, 2026  
**Effective Date:** November 5, 2026  

---


## Table of Contents
1. [Agreement to Terms](#1-agreement-to-terms)
2. [Description of Service](#2-description-of-service)
3. [User Accounts and Credential Custody](#3-user-accounts-and-credential-custody)
4. [Acceptable Use Policy](#4-acceptable-use-policy)
5. [User-Generated Content and Channel Media](#5-user-generated-content-and-channel-media)
6. [Intellectual Property and Licensing](#6-intellectual-property-and-licensing)
7. [Payment Terms and Pricing](#7-payment-terms-and-pricing)
8. [Free Trials and Subscriptions](#8-free-trials-and-subscriptions)
9. [Privacy and YouTube 30-Day Data Cache](#9-privacy-and-youtube-30-day-data-cache)
10. [Third-Party Services and Google API Compliance](#10-third-party-services-and-google-api-compliance)
11. [Disclaimers and Warranties](#11-disclaimers-and-warranties)
12. [Limitation of Liability](#12-limitation-of-liability)
13. [Indemnification](#13-indemnification)
14. [Termination and Access Revocation](#14-termination-and-access-revocation)
15. [Governing Law and Dispute Resolution](#15-governing-law-and-dispute-resolution)
16. [General Provisions and Contact](#16-general-provisions-and-contact)

---

## 1. Agreement to Terms

These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and MateAI ("we", "us", or "our") governing your access to and use of the MateAI desktop companion application, the Model Context Protocol (MCP) server, and associated software tools (collectively, the "Software").

By downloading, installing, compiling, or executing the Software, you confirm that you have read, understood, and agreed to be bound by these Terms, as well as our [Privacy Policy](https://mateai-io.github.io/privacy).

**YouTube API Services Integration:**  
MateAI connects to and uses the official YouTube Data API and YouTube Analytics API. By using MateAI to interact with YouTube, you acknowledge and agree that you are also bound by the [YouTube Terms of Service](https://www.youtube.com/t/terms) and the [Google Privacy Policy](https://policies.google.com/privacy).

> **In Plain English:** By downloading or using MateAI, you agree to these ground rules and to YouTube's official Terms of Service. If you do not agree, do not install or use the app.

---

## 2. Description of Service

MateAI provides an open, local-first desktop application and MCP server designed to connect your YouTube channel and analytics data to local artificial intelligence assistants (such as Claude Desktop and Claude Code).

The Software operates locally on your device. MateAI does not operate remote intermediate proxy servers, cloud message relays, or centralized databases that store your credentials or private channel content. All API requests originate directly from your computer to Google/YouTube endpoints.

> **In Plain English:** MateAI is software that runs on your personal computer. There is no cloud middleman reading or storing your channel data.

---

## 3. User Accounts and Credential Custody

You do not create an account with MateAI. Access to YouTube data is authenticated using Google's official OAuth 2.0 protocol with loopback redirect and Proof Key for Code Exchange (PKCE).

OAuth access and refresh tokens are stored securely in your operating system's native credential store (macOS Keychain). You are solely responsible for maintaining physical and digital security of your device. MateAI never collects, transmits, or possesses copies of your authentication tokens.

You must be at least 13 years old (or 16 years old within the European Union) to use this Software, or have the consent of a parent or legal guardian.

> **In Plain English:** You authenticate directly with Google. Your login tokens stay locked in your macOS Keychain on your computer.

---

## 4. Acceptable Use Policy

You agree to use MateAI only for lawful channel management in accordance with applicable laws and YouTube policies. You agree not to:

1. Upload, publish, or distribute content that violates the [YouTube Community Guidelines](https://www.youtube.com/howyoutubeworks/policies/community-guidelines/), including copyright-infringing material, spam, hate speech, or harassment.
2. Automate repetitive or spam-like interactions, including mass comment posting or artificial engagement manipulation.
3. Attempt to bypass, disrupt, or circumvent YouTube API quota limitations or rate limits.
4. Modify or tamper with the Software to intercept tokens of other users or distribute malicious binaries.

> **In Plain English:** Do not use MateAI to spam, infringe copyrights, or break YouTube's rules.

---

## 5. User-Generated Content and Channel Media

You retain 100% ownership, title, and intellectual property rights in and to any videos, titles, descriptions, tags, thumbnails, and comments you manage, upload, or publish using MateAI.

MateAI claims zero ownership, license, or rights in your content. You represent that you possess all necessary rights and clearances for media published via the Software.

> **In Plain English:** Your channel and your videos belong completely to you. MateAI has no rights to your content.

---

## 6. Intellectual Property and Licensing

The Software source code is made available under the licensing terms set forth in the repository at [github.com/mateai-io/mateai-desktop](https://github.com/mateai-io/mateai-desktop).

All trademarks, logos, and brand elements of MateAI belong to their respective owners. YouTube is a registered trademark of Google LLC. Claude is a registered trademark of Anthropic PBC. MateAI is an independent open-source project and is not affiliated with, sponsored by, or endorsed by Google LLC or Anthropic PBC.

> **In Plain English:** MateAI is an independent open-source project. Google, YouTube, and Claude are trademarks of their respective companies.

---

## 7. Payment Terms and Pricing

MateAI Desktop and the companion MCP server are currently distributed free of charge. No payment details are requested or processed by the Software. We reserve the right to offer optional paid add-ons or commercial licenses in the future, subject to clear advance disclosure.

> **In Plain English:** The software is currently free. We do not collect credit cards or charge subscription fees.

---

## 8. Free Trials and Subscriptions

Because the Software is provided free of charge, there are no recurring subscription fees, automatic renewals, or trial cancellation requirements.

Third-party costs associated with running AI models (such as an Anthropic Claude subscription or API usage fees) or Google Cloud compute/quotas are your sole responsibility and are governed by your separate agreements with those providers.

> **In Plain English:** There are no trial periods or subscription lock-ins. Any third-party costs (like Claude or Google API) are paid directly to those providers.

---

## 9. Privacy and YouTube 30-Day Data Cache

Our data handling practices are described in detail in the [MateAI Privacy Policy](https://mateai-io.github.io/privacy).

**Compliance with YouTube Data Retention Rules:**  
In strict compliance with YouTube Developer Policies, any cached YouTube API data, channel snapshots, or analytical metrics stored locally on your device are automatically refreshed or deleted within **30 calendar days**.

> **In Plain English:** We adhere to YouTube's strict 30-day cache limit. Stored local data is automatically refreshed or wiped within 30 days.

---

## 10. Third-Party Services and Google API Compliance

MateAI interfaces with third-party APIs. Your use is subject to the terms and service levels of those third parties.

**Google API Limited Use Disclosure:**  
MateAI's use and transfer of information received from Google APIs adheres strictly to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements:
- Google user data is accessed only to provide user-directed channel management.
- Data is never transferred to third parties or sold.
- Data is never used for serving advertisements.
- Data is never used to train generalized artificial intelligence or machine learning models.

> **In Plain English:** We strictly obey Google's Limited Use policy: your data is never sold, never used for ads, and never used to train AI models.

---

## 11. Disclaimers and Warranties

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE, UNINTERRUPTED, OR COMPATIBLE WITH ALL FUTURE VERSIONS OF YOUTUBE APIS OR OPERATING SYSTEM RELEASES. USERS ARE ENCOURAGED TO USE THE BUILT-IN DRY-RUN FEATURE BEFORE PUBLISHING REAL CHANGES.

> **In Plain English:** The software is provided as-is without guarantees. Use the dry-run feature to inspect uploads before publishing.

---

## 12. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MATEAI, ITS AUTHORS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF REVENUE, LOSS OF VIEWS, CHANNEL SUSPENSION, OR DATA LOSS) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE.

> **In Plain English:** We cannot be held legally or financially liable for channel issues, view drops, or software glitches.

---

## 13. Indemnification

You agree to defend, indemnify, and hold harmless MateAI, its maintainers, and contributors from and against any claims, damages, liabilities, losses, or legal costs arising from:
1. Your violation of these Terms;
2. Your violation of YouTube Terms of Service or Community Guidelines; or
3. Any copyright, trademark, or privacy infringement resulting from media published via your use of the Software.

> **In Plain English:** If you use MateAI to infringe copyrights or break YouTube policies, you are legally responsible for any claims that arise.

---

## 14. Termination and Access Revocation

You may terminate this agreement at any time by uninstalling the Software and revoking Google OAuth access.

**How to Revoke Access:**
1. Click **Disconnect** in the MateAI Desktop application to remove tokens from your local Keychain; or
2. Visit [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions) to remove MateAI's permissions directly from your Google account.

We reserve the right to discontinue the Software or cease providing updates at any time.

> **In Plain English:** You can walk away and revoke access whenever you want, either inside the app or in your Google security settings.

---

## 15. Governing Law and Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of **Austria**, excluding its conflict of laws principles. Any legal action or proceeding arising under these Terms shall be instituted exclusively in the competent courts of **Graz, Austria**.

Nothing in these Terms shall deprive consumers residing within the European Union of the mandatory consumer protection rights granted by their local law.

> **In Plain English:** These terms are governed under Austrian / EU law.

---

## 16. General Provisions and Contact

If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall remain in full force and effect.

These Terms and the Privacy Policy constitute the entire agreement between you and MateAI regarding the Software.

**Contact Information:**  
- **Support Email:** [gog.mate@gmail.com](mailto:gog.mate@gmail.com)  
- **Project Repository:** [https://github.com/mateai-io/mateai-desktop](https://github.com/mateai-io/mateai-desktop)  
- **Website:** [https://mateai-io.github.io](https://mateai-io.github.io)
`,Je=c=>c.replace(/<[^>]+>/g,"").toLowerCase().replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-"),et=p.parse(Xe).replace(/<(h[1-3])>(.*?)<\/\1>/g,(c,e,t)=>`<${e} id="${Je(t)}">${t}</${e}>`);function tt(){return ne.useEffect(()=>{var c;location.hash&&((c=document.getElementById(decodeURIComponent(location.hash.slice(1))))==null||c.scrollIntoView())},[]),I.jsxs("div",{className:"site",children:[I.jsx("a",{className:"skip btn btn-secondary",href:"#main",children:"Skip to content"}),I.jsx(ke,{home:"/",links:[{label:"How it works",href:"/#how"},{label:"Features",href:"/#features"},{label:"Privacy",href:"/#privacy"},{label:"FAQ",href:"/#faq"}]}),I.jsx("main",{id:"main",className:"wrap legal",dangerouslySetInnerHTML:{__html:et}}),I.jsx(be,{home:"/",legal:"© 2026 MateAI. Not affiliated with YouTube, TikTok or Anthropic.",links:[{label:"Privacy policy",href:"/#privacy"},{label:"Terms",href:"/terms/"},{label:"Contact",href:"mailto:[CONTACT EMAIL]"}]})]})}me(document.getElementById("root")).render(I.jsx(ne.StrictMode,{children:I.jsx(tt,{})}));
