const press = [
  ["未来网", "中央级", "在‘沼气第一村’，这群学子边看边问边思考", "https://news.k618.cn/finance/money/202608/t20260807_20054150.html"],
  ["环球网", "中央级", "踏寻凯歌热土 青春赋能振兴——西华师大学子深入海龙凯歌调研农文旅融合发展", "https://yrd.huanqiu.com/article/4ShO2lq7Oqa"],
  ["环球时报", "中央级", "踏寻凯歌热土 青春赋能振兴——西华师大学子深入海龙凯歌调研农文旅融合发展", "https://hqtime.huanqiu.com/share/article/4ShO2lq7Oqa"],
  ["中国日报网", "中央级", "躬身垄亩沾泥土，资助育人润心田——西华师大实践团队下乡绘就乡村振兴新画卷", "https://caijing.chinadaily.com.cn/a/202608/07/WS6a755257a310d709c2fc2093.html"],
  ["改革网", "中央级", "绘就江岸新画卷：西华师大实践队赴黄金江岸开展土壤与水质专项调研", "http://www.cfgw.net.cn/xb/content/2026-08/10/content_25218245.html"],
  ["中国发展网", "中央级", "解码‘宋井桃源’模式：高校学子探寻非遗与田园的共生之道", "http://www.chinadevelopment.com.cn/zxsd/2026/0810/2009466.shtml"],
  ["中国经济新闻网", "中央级", "深耕实业守初心：西华师大学子走进高金食品调研农产品发展", "https://www.cet.com.cn/xwsd/10493944.shtml"],
  ["社区文化", "国家级", "访新农人彭巧话振兴 西华师大实践团走进安居白马镇", "https://ms.ccedn.com.cn/news/item/20260807A9A5MRQ74.html"],
  ["中国农科新闻网", "国家级", "凯歌高奏 振兴有‘道’——实践队专访海龙村发展带头人", "http://www.nkb.com.cn/2026/0807/525028.html"],
  ["中国周刊", "国家级", "解码‘四件宝’产业链，探寻农旅融合助农增收新路径", "http://www.chinaweekly.cn/html/sxzonghe/93204.html"],
  ["中国报业", "国家级", "薪火贯岁月 山海续凯歌：一座丘陵村落的两代振兴路", "https://www.cnpiw.cn/a/fuwuzhongxin/hezuo/20260810/43891.html?1786328537"],
  ["多彩青年", "地方媒体", "西华师大实践团赴安居白马镇，访谈新农人与基层工作者", "http://dcqn.towngov.cn/news/4911.html"],
  ["先锋青年", "地方媒体", "探访沼气第一村，解码农文旅融合新路径", "http://xfqn.towngov.cn/index.php/shuqi/5439.html"],
  ["科普中国", "国家级", "青春丈量嘉陵碧水 科技赋能生态守护", "https://cloud.kepuchina.cn/newSearch/imgText?from=1&id=7486115854837440512&is_self=1"],
  ["中国基层网", "国家级", "青春聚力乡村振兴，脚踏泥土丈量青春", "https://www.jicengwangw.cn/zixun/2026-08-10/4879.html"],
  ["微信公众号", "公众号", "踏寻凯歌热土，青春赋能振兴", "https://mp.weixin.qq.com/s/yIMEEY49hJWqu-SmqGAfcQ"],
  ["微信公众号", "公众号", "躬身垄亩沾泥土，资助育人润心田", "https://mp.weixin.qq.com/s/JOCcYHrGyOHlBoiN4cFGDg"],
  ["微信公众号", "公众号", "青春脚步丈量乡土，实践答卷写满真情", "https://mp.weixin.qq.com/s/QtcryPGyxyDLbJqWBWW_ug"]
];
const members = [["冯渺淼","调研组组长 · 电信学院","member-2.jpeg","feng"],["杨舒惠","调研组组员 · 商学院","member-3.jpeg","yang"],["聂思齐","调研组组员 · 新闻传播学院","member-4.jpg","nie"],["唐琳斐","宣传组组长 · 计算机学院","member-5.jpeg","tang"],["陈任善鸣","宣传组组员 · 初等教育学院","member-6.jpeg","chen"],["吉伍么叁歪","外联组组长 · 商学院","member-7.jpeg","jiwu"],["童博涵","外联组组员 · 商学院","member-8.jpeg","tong"],["王宇轩","外联组组员 · 法学院","member-9.jpg","wang"]];
let activeFilter = "all";
let expanded = false;
const list = document.querySelector("#press-list");
function renderPress(){const items=press.filter(item=>activeFilter==="all"||item[1]===activeFilter);const shown=expanded?items:items.slice(0,6);list.innerHTML=shown.map(([media,level,title,url])=>`<a class="press-item" href="${url}" target="_blank" rel="noopener"><span class="media">${media}</span><span class="level">${level}</span><h3>${title}</h3><span class="arrow">↗</span></a>`).join("");const more=document.querySelector("#load-more");more.hidden=items.length<=6;more.innerHTML=expanded?"收起报道 <span>↑</span>":"展开更多报道 <span>↓</span>"}
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.filter;expanded=false;document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b===button));renderPress()}));
document.querySelector("#load-more").addEventListener("click",()=>{expanded=!expanded;renderPress()});renderPress();
document.querySelector("#team-grid").innerHTML=members.map(([name,role,image,id])=>`<a class="member" href="detail.html?member=${id}"><img src="assets/team/${image}" alt="${name}" /><h3>${name}</h3><p>${role}</p><b>查看简介 ↗</b></a>`).join("");
document.querySelector(".mentor").outerHTML=`<a class="mentor" href="detail.html?member=liu"><img src="assets/team/member-1.jpeg" alt="队长刘观博" /><div><p class="eyebrow">TEAM LEADER</p><h3>刘观博</h3><span>队长 · 商学院</span><p>统筹实践安排、团队协调与成果凝练，让每一次出发都有方向。</p><b>查看完整简介 ↗</b></div></a>`;
const dialog=document.querySelector("#lightbox");const lightboxImage=dialog.querySelector("img");document.querySelectorAll("[data-lightbox]").forEach(button=>button.addEventListener("click",()=>{lightboxImage.src=button.dataset.lightbox;dialog.showModal()}));document.querySelector(".lightbox-close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});document.querySelector("[data-open-gallery]").addEventListener("click",()=>document.querySelector("#gallery").scrollIntoView());
const menu=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
const slides=[...document.querySelectorAll('.hero-image')];let currentSlide=0;const counter=document.querySelector('[data-hero-count]');function showSlide(index){slides[currentSlide].classList.remove('active');currentSlide=(index+slides.length)%slides.length;slides[currentSlide].classList.add('active');counter.textContent=String(currentSlide+1).padStart(2,'0')}document.querySelector('[data-hero-prev]').addEventListener('click',()=>showSlide(currentSlide-1));document.querySelector('[data-hero-next]').addEventListener('click',()=>showSlide(currentSlide+1));setInterval(()=>showSlide(currentSlide+1),5500);
