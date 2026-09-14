const aartis = [
  [1,1,"A_E","सुखकर्ता दुःखहर्ता","Sukhakarta Dukhaharta"],
  [2,2,"A_E","शेंदूर लाल चढायो","Shendur Lal Chadhayo"],
  [3,3,"A_E","नानापरिमळ दुर्वा शेंदूर","Nanaparimal Durga"],
  [4,4,"A_E","उंदरावर बैसोनी","Undrawar Baisoni"],
  [5,56,"A_E","लवथवती विक्राळा","Lawathawathi Vikrala"],
  [6,118,"A_E","दुर्गे दुर्घट भारी","Durghe Gurghat Bhari"],
  [7,289,"A_E","सत्राणे उड्डाणे हुंकार वदनी","Satrane Uddane Hunkar Vadani"],
  [8,301,"A_E","निर्गुणात्मक त्रिमूर्ती दत्त हा जाणा","Nigunatmak Trimurty Datta Ha Jana"],
  [9,96,"A_E","युगे अठ्ठावीस विटेवरी उभा","Yuege Athavis Vitevari"],
  [10,97,"A_E","येई हो विठ्ठले माझे माउली ये","Yeyee Ovi Tale Maze Maulile"],
  [11,32,"A_E","वक्रतुंड एकदंत गौरीनंदना","Vakratunda Eak Danta"],
  [12,36,"A_E","आरती मी करितो तुला श्रीगजानना","Aarati Mee Karito Tula Shrigajana"],
  [13,234,"E","आरती सप्रेम जय जय विठ्ठल परब्रह्म","Aarti Saprem Jai Jai Vithal Parabharma"],
  [14,329,"E","जय जय दीनदयाळा सत्यनारायण देवा","Jai Jai Din Dayala Satyanarayen Deva"],
  [15,392,"A_E","आरती ज्ञानराजा","Aarati Dyaanaraja"],
  [16,100,"E","आरती अनंतभुजा विठो पंढरीराजा","Aarati Ananatabhuja Vitho Pandhari Raja"],
  [17,65,"E","जय जय त्र्यंबकराज गिरिजानाथा गंगाधरा हो","Jai Jai Trembak Raj Giraja Natha Ganga Dhara Ho"],
  [18,122,"E","आश्विन शुद्धपक्षीं अंबा बैसली सिंहासनी हो","Ashwin Shudha Pakshi Aamba Baisali"],
  [19,27,"A_E","जय सितबादेवी आई जय सितबादेवी","Jai Sitabadevi Aai"],
  [20,429,"A_E","जाहले भजन आम्ही नमितो तव चरणा","Jahale Bhajana Aamhi Namito Tava Charna"],
  [21,432,"A_E","रामा रामा रामा रामा रघुनंदना","Rama Rama Rama Rama Raghunandana"],
  [22,434,"A_E","घालीन लोटांगण वंदीन चरण","Ghaleen Lotangan Vandin Charan"],
  [23,435,"A_E","ॐ यज्ञेन यज्ञमयजन्त देवाः","Om Yednena Yadnyamayajanta"],
  [24,236,"E","ॐ जय जगदीश हरे","Om Jai Jagadish Hare"]
].map(([sequence, number, timing, title, roman]) => ({
  sequence, number, timing, title, roman,
  scan: `assets/scans/${String(sequence).padStart(2,"0")}.jpg`,
  verified: Boolean(transcriptions[sequence])
}));

const aarti234 = [
  ["ध्रुवपद", "आरती सप्रेम जय जय विठ्ठल परब्रह्म ॥\nभक्तसंकटीं नाना स्वरूपीं स्थापिसि स्वधर्म ॥ धृ० ॥"],
  ["१", "अंबऋषींकारणें गर्भवास सोशीसी ॥\nवेद नेले चोरूनि ब्रह्मा आणुनिया देसी ॥\nमत्स्यरूपीं नारायण सप्तहि सागर धुंडिसी ॥\nहस्त लागतां शंखासुरा तुझा वर देसी ॥ १ ॥"],
  ["२", "रसातळासी जातां पृथ्वी पाठीवर घेसी ॥\nपरोपकारासाठीं देवा कांसव झालासी ॥\nदाढें धरुनी पृथ्वी नेता वराहरूप होसी ॥\nप्रल्हादाकारणें स्तंभीं नरहरि गुरगुरसी ॥ २ ॥"],
  ["३", "पांचवे अवतारीं बळिच्या द्वाराला जासी ॥\nभिक्षे स्थळ मागुनी बळिला पाताळीं नेसी ॥\nसर्व समर्पण केलें म्हणउनि प्रसन्न त्या होसी ॥\nवामनरूप धरुनी बळिच्या द्वारीं तिष्ठसी ॥ ३ ॥"],
  ["४", "सहस्रार्जुन मातला जमदग्नीचा वध केला ॥\nकष्टी ते रेणुका म्हणुनी सहस्रार्जुन वधिला ॥\nनिःक्षत्री पृथ्वी दान दिधली विप्राला ॥\nसहावा अवतार परशुराम प्रगटला ॥ ४ ॥"],
  ["५", "मातला रावण सर्वां उपद्रव केला ॥\nतेहतिस कोटी देव बंदीं हरले सीतेला ॥\nपितृवचनालागीं रामें वनवास केला ॥\nमिळोनी वानर सहित राजाराम प्रगटला ॥ ५ ॥"],
  ["६", "देवकीवसुदेव बंदीमोचन त्वां केलें ॥\nनंदाघरि जाऊन निजसुख गोकुळा दिधलें ॥\nगोरसचोरी करितां नवलक्ष गोपाळ मिळविले ॥\nगोपिकांचें प्रेम देखुनि श्रीकृष्ण भुलले ॥ ६ ॥"],
  ["७", "बौद्ध कलंकी कलियुगि झाला अधर्म हा अवघा ॥\nसांडुनि नित्यधर्म सोडुनि नंदाची सेवा ॥\nम्लेंच्छमर्दन करिसी म्हणुनि कलंकी केशवा ॥\nबहिरवि जान्हवि घावि निजसुखानंदसेवा ॥ ७ ॥"]
];

const aarti234Roman = [
  ["Refrain", "Aarati saprem jai jai Vitthal parabrahma ॥\nBhaktasankatin nana svarupin sthapisi svadharma ॥ Dhru. ॥"],
  ["1", "Ambarushinkarane garbhavaas soshisi ॥\nVeda nele choruni Brahma aanuniya desi ॥\nMatsyarupin Narayan saptahi sagar dhundisi ॥\nHasta lagatan Shankhasura tujha vara desi ॥ 1 ॥"],
  ["2", "Rasatalasi jatan pruthvi pathivar ghesi ॥\nParopakarasathi deva kansava jhalasi ॥\nDadhen dharuni pruthvi neta Varaharupa hosi ॥\nPralhadakarane stambhin Narahari gurgursi ॥ 2 ॥"],
  ["3", "Panchave avatari Balichya dvarala jasi ॥\nBhikshe sthala maguni Balila patalin nesi ॥\nSarva samarpana kele mhanauni prasanna tya hosi ॥\nVamanarupa dharuni Balichya dvarin tishthasi ॥ 3 ॥"],
  ["4", "Sahasrarjuna matala Jamadagnicha vadha kela ॥\nKashti te Renuka mhanauni Sahasrarjuna vadhila ॥\nNihkshatri pruthvi dana didhali viprala ॥\nSahava avatara Parashurama pragatala ॥ 4 ॥"],
  ["5", "Matala Ravana sarvan upadrava kela ॥\nTehatis koti deva bandin harale Sitela ॥\nPitruvachanalagin Ramen vanavasa kela ॥\nMiloni vanara sahita Rajarama pragatala ॥ 5 ॥"],
  ["6", "Devaki-Vasudeva bandimochana tvan kele ॥\nNandagharin jauna nijasukha Gokula didhale ॥\nGorasachori karitan navalaksha Gopala milavile ॥\nGopikanche prema dekhuni Shrikrishna bhulale ॥ 6 ॥"],
  ["7", "Bauddha Kalanki Kaliyugi jhala adharma ha avagha ॥\nSanduni nityadharma soduni Nandachi seva ॥\nMlenchchhamardana karisi mhanauni Kalanki Keshava ॥\nBahiravi Janhavi ghavi nijasukhanandaseva ॥ 7 ॥"]
];

const copy = {
  mr: {
    eyebrow: "पारंपरिक आरती · मूळ छापील प्रतीवरून", title: "आरतीचा क्रम निवडा", intro: "दुपार किंवा संध्याकाळची वेळ निवडा आणि क्रमाने आरती म्हणा.",
    all: "सर्व", afternoon: "दुपार", evening: "संध्याकाळ", search: "नाव किंवा आरती क्रमांक शोधा…", count: "आरत्या",
    empty: "या शोधासाठी आरती सापडली नाही.", clear: "शोध मिटवा", credit: "संकलन · Hardik Malekar · परीक्षण · Rohit Malekar",
    back: "← सर्व आरत्या", scanShow: "मूळ प्रत पहा", scanHide: "मूळ प्रत लपवा", print: "छापा", scan: "मूळ छापील प्रत", scanNote: "तपासणीसाठी",
    read: "वाचा →", pending: "प्रतिलेखन पडताळणीमध्ये", pendingTitle: "प्रतिलेखनाची पडताळणी सुरू आहे", pendingCopy: "तोपर्यंत मूळ छापील प्रत पाहता येईल.", aartiNo: "आरती क्र.",
    aboutEyebrow: "या संग्रहाविषयी", aboutTitle: "छापील परंपरा, सहज वाचन", aboutOne: "हा संग्रह जुन्या आरती-सागरमधील स्कॅनवरून तयार केला आहे. मूळ शब्दरचना आणि कडव्यांचा क्रम जपला आहे.", aboutTwo: "प्रत्येक आरतीसोबत तिची मूळ प्रत दिली आहे. प्रतीत अस्पष्ट असलेले शब्द पिवळ्या रंगात दाखवले आहेत, जेणेकरून जाणकार त्यांची पडताळणी करू शकतील.", aboutCredit: "संकलन आणि प्रस्तुती · Hardik Malekar · परीक्षण · Rohit Malekar", languageLabel: "लिपी निवडा", searchLabel: "आरती शोधा", aboutLabel: "या संग्रहाविषयी", scanLabel: "मूळ छापील प्रत", siteTitle: "आरती संग्रह"
  },
  en: {
    eyebrow: "Traditional aartis · From the original printed pages", title: "Choose the recitation order", intro: "Select afternoon or evening, then follow the aartis in order.",
    all: "All", afternoon: "Afternoon", evening: "Evening", search: "Search by name or aarti number…", count: "aartis",
    empty: "No aarti matches this search.", clear: "Clear search", credit: "Curated by Hardik Malekar · Reviewed by Rohit Malekar",
    back: "← All aartis", scanShow: "View original", scanHide: "Hide original", print: "Print", scan: "Original printed page", scanNote: "For reference",
    read: "Read →", pending: "Transcription under review", pendingTitle: "Transcription is being verified", pendingCopy: "The original printed page is available in the meantime.", aartiNo: "Aarti no.",
    aboutEyebrow: "About this collection", aboutTitle: "Printed tradition, easier reading", aboutOne: "This collection is prepared from scans of the old Aarti-Sagar. The original wording and verse order are preserved.", aboutTwo: "Every aarti includes its original printed page. Words that remain unclear in the scan are highlighted in yellow so a knowledgeable reader can check them.", aboutCredit: "Curated and presented by Hardik Malekar · Reviewed by Rohit Malekar", languageLabel: "Choose script", searchLabel: "Search aartis", aboutLabel: "About this collection", scanLabel: "Original printed page", siteTitle: "Aarti Collection"
  }
};

const devanagari = value => new Intl.NumberFormat("mr-IN", {useGrouping:false}).format(value);
const escapeHTML = value => value.replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character]));
const romanConsonants = {"क":"k","ख":"kh","ग":"g","घ":"gh","ङ":"ng","च":"ch","छ":"chh","ज":"j","झ":"jh","ञ":"ny","ट":"t","ठ":"th","ड":"d","ढ":"dh","ण":"n","त":"t","थ":"th","द":"d","ध":"dh","न":"n","प":"p","फ":"ph","ब":"b","भ":"bh","म":"m","य":"y","र":"r","ल":"l","व":"v","श":"sh","ष":"sh","स":"s","ह":"h","ळ":"l","क्ष":"ksh","ज्ञ":"dnya"};
const romanVowels = {"अ":"a","आ":"aa","इ":"i","ई":"ee","उ":"u","ऊ":"oo","ऋ":"ri","ए":"e","ऐ":"ai","ओ":"o","औ":"au"};
const romanMatras = {"ा":"aa","ि":"i","ी":"ee","ु":"u","ू":"oo","ृ":"ri","े":"e","ै":"ai","ो":"o","ौ":"au","ॅ":"a","ॉ":"o"};
const romanDigits = {"०":"0","१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9"};
function romanize(value) {
  const chars = [...value.normalize("NFC")];
  let result = "";
  for (let i = 0; i < chars.length; i += 1) {
    const pair = chars[i] + (chars[i + 1] || "");
    if (romanConsonants[pair]) { result += romanConsonants[pair]; i += 1; continue; }
    const char = chars[i];
    if (romanConsonants[char]) {
      const next = chars[i + 1];
      result += romanConsonants[char];
      if (romanMatras[next]) { result += romanMatras[next]; i += 1; }
      else if (next === "्") i += 1;
      else result += "a";
    } else if (romanVowels[char]) result += romanVowels[char];
    else if (romanDigits[char]) result += romanDigits[char];
    else if (char === "ं" || char === "ँ") result += "n";
    else if (char === "ः") result += "h";
    else if (char === "ऽ") result += "'";
    else if (char !== "़") result += char;
  }
  return result.replace(/aa([\s।॥,])/g, "a$1").replace(/a([\s।॥])([\s।॥])/g, "$1$2");
}
const formatReading = value => escapeHTML(value).replace(/\[\[([^\]]+)\]\]/g, '<mark title="Please verify this reading">$1</mark>');
const romanLabel = label => label === "ध्रुवपद" ? "Refrain" : label === "मंत्रपुष्पांजलि" ? "Mantrapushpanjali" : romanize(label);
const timingText = timing => {
  const c = copy[state.language];
  return timing === "A_E" ? `${c.afternoon} · ${c.evening}` : timing === "A" ? c.afternoon : c.evening;
};
const state = { time: "all", query: "", language: localStorage.getItem("aarti-language") || "mr" };
const $ = id => document.getElementById(id);
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

function card(aarti) {
  const c = copy[state.language];
  const tags = aarti.timing.split("_").map(t => `<span>${t === "A" ? c.afternoon : c.evening}</span>`).join("");
  const primaryTitle = state.language === "mr" ? aarti.title : aarti.roman;
  const secondaryTitle = state.language === "mr" ? aarti.roman : aarti.title;
  return `<a class="aarti-card" href="#/aarti/${aarti.sequence}" aria-label="${state.language === "mr" ? `क्रमांक ${aarti.sequence}: ${aarti.title}` : `Number ${aarti.sequence}: ${aarti.roman}`}">
    <div class="card-top"><span class="sequence">${state.language === "mr" ? devanagari(aarti.sequence).padStart(2,"०") : String(aarti.sequence).padStart(2,"0")}</span><span class="timing">${tags}</span></div>
    <h2>${primaryTitle}</h2><p class="roman">${c.aartiNo} ${state.language === "mr" ? devanagari(aarti.number) : aarti.number} · ${secondaryTitle}</p>
    <span class="status">${aarti.verified ? c.read : c.pending}</span>
  </a>`;
}

function renderList() {
  const q = state.query.trim().toLocaleLowerCase("mr");
  const list = aartis.filter(a => (state.time === "all" || a.timing.includes(state.time)) && (!q || `${a.title} ${a.roman} ${a.number} ${a.sequence}`.toLocaleLowerCase("mr").includes(q)));
  $("aartiGrid").innerHTML = list.map(card).join("");
  $("resultCount").textContent = `${state.language === "mr" ? devanagari(list.length) : list.length} ${copy[state.language].count}`;
  $("emptyState").hidden = list.length !== 0;
}

function renderReader(sequence) {
  const aarti = aartis.find(a => a.sequence === Number(sequence));
  if (!aarti) { location.hash = "#/"; return; }
  const c = copy[state.language];
  const primaryTitle = state.language === "mr" ? aarti.title : aarti.roman;
  const secondaryTitle = state.language === "mr" ? aarti.roman : aarti.title;
  document.title = `${primaryTitle} · ${c.siteTitle}`;
  $("homeView").hidden = true; $("readerView").hidden = false;
  $("readerSequence").textContent = state.language === "mr" ? devanagari(aarti.sequence) : aarti.sequence;
  $("readerMeta").textContent = `${c.aartiNo} ${state.language === "mr" ? devanagari(aarti.number) : aarti.number} · ${timingText(aarti.timing)}`;
  $("readerTitle").textContent = primaryTitle;
  $("readerRomanTitle").textContent = secondaryTitle;
  $("scanImage").src = aarti.scan;
  $("scanImage").alt = state.language === "mr" ? `आरती क्रमांक ${devanagari(aarti.number)} ची मूळ छापील प्रत` : `Original printed page for aarti number ${aarti.number}`;
  const source = transcriptions[aarti.sequence];
  const printedLines = source.reduce((total, [, text]) => total + text.split("\n").length, 0);
  $("readerView").dataset.printLayout = printedLines > 20 ? "columns" : "single";
  $("readerView").dataset.printDensity = printedLines > 35 ? "dense" : "regular";
  const verses = state.language === "mr"
    ? source
    : (aarti.sequence === 13 ? aarti234Roman : source.map(([label, text]) => [romanLabel(label), romanize(text)]));
  const hasUncertainReading = source.some(([, text]) => text.includes("[["));
  $("transcription").innerHTML = `${hasUncertainReading ? `<p class="uncertain-note">${state.language === "mr" ? "पिवळ्या रंगातील शब्द मूळ प्रतीत अस्पष्ट आहेत आणि तपासण्याची गरज आहे." : "Words highlighted in yellow are unclear in the scan and need checking."}</p>` : ""}${verses.map(([label,text]) => `<section class="verse"><span class="verse-label">${formatReading(String(label))}</span>${formatReading(text)}</section>`).join("")}`;
  const prev = aartis[aarti.sequence - 2], next = aartis[aarti.sequence];
  $("previousAarti").hidden = !prev; $("nextAarti").hidden = !next;
  if (prev) { $("previousAarti").href = `#/aarti/${prev.sequence}`; $("previousAarti").textContent = `← ${state.language === "mr" ? devanagari(prev.sequence) : prev.sequence}. ${state.language === "mr" ? prev.title : prev.roman}`; }
  if (next) { $("nextAarti").href = `#/aarti/${next.sequence}`; $("nextAarti").textContent = `${state.language === "mr" ? devanagari(next.sequence) : next.sequence}. ${state.language === "mr" ? next.title : next.roman} →`; }
  setTimeout(() => window.scrollTo(0, 0), 0);
}

function applyLanguage() {
  const c = copy[state.language];
  document.documentElement.lang = state.language === "mr" ? "mr" : "en";
  $("creditText").textContent = c.credit; $("introEyebrow").textContent = c.eyebrow; $("introTitle").textContent = c.title; $("introCopy").textContent = c.intro;
  $("allTab").textContent = c.all; $("afternoonTab").textContent = c.afternoon; $("eveningTab").textContent = c.evening; $("searchInput").placeholder = c.search;
  $("emptyCopy").textContent = c.empty; $("clearSearch").textContent = c.clear; $("backLink").textContent = c.back; $("printButton").textContent = c.print;
  $("scanToggle").textContent = $("scanPanel").classList.contains("open") ? c.scanHide : c.scanShow; $("scanHeading").textContent = c.scan; $("scanNote").textContent = c.scanNote;
  $("aboutEyebrow").textContent = c.aboutEyebrow; $("aboutTitle").textContent = c.aboutTitle; $("aboutCopyOne").textContent = c.aboutOne; $("aboutCopyTwo").textContent = c.aboutTwo; $("aboutCredit").textContent = c.aboutCredit;
  $("languageSwitch").setAttribute("aria-label", c.languageLabel); $("searchLabel").textContent = c.searchLabel; $("aboutButton").setAttribute("aria-label", c.aboutLabel); $("scanPanel").setAttribute("aria-label", c.scanLabel);
  document.querySelectorAll(".language-option").forEach(button => { const active = button.dataset.language === state.language; button.classList.toggle("active", active); button.setAttribute("aria-pressed", active); });
  route();
}

function route() {
  const match = location.hash.match(/^#\/aarti\/(\d+)/);
  if (match) renderReader(match[1]);
  else { document.title = copy[state.language].siteTitle; $("readerView").hidden = true; $("homeView").hidden = false; renderList(); }
}

document.querySelectorAll(".time-tab").forEach(button => button.addEventListener("click", () => {
  state.time = button.dataset.time;
  document.querySelectorAll(".time-tab").forEach(b => { b.classList.toggle("active", b === button); b.setAttribute("aria-selected", b === button); });
  renderList();
}));
$("searchInput").addEventListener("input", event => { state.query = event.target.value; renderList(); });
document.querySelectorAll(".language-option").forEach(button => button.addEventListener("click", () => { state.language = button.dataset.language; localStorage.setItem("aarti-language", state.language); applyLanguage(); }));
$("clearSearch").addEventListener("click", () => { state.query = ""; $("searchInput").value = ""; renderList(); $("searchInput").focus(); });
$("printButton").addEventListener("click", () => window.print());
$("scanToggle").addEventListener("click", event => { const open = $("scanPanel").classList.toggle("open"); event.currentTarget.setAttribute("aria-pressed", open); event.currentTarget.textContent = open ? copy[state.language].scanHide : copy[state.language].scanShow; });
$("aboutButton").addEventListener("click", () => $("aboutDialog").showModal());
$("closeAbout").addEventListener("click", () => $("aboutDialog").close());
$("aboutDialog").addEventListener("click", event => { if (event.target === $("aboutDialog")) $("aboutDialog").close(); });
window.addEventListener("hashchange", route);
applyLanguage();
