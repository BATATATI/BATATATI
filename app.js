(function () {
  "use strict";

  var T = {
    ar: {
      proto: "نسخة تجريبية: لا يتم إرسال أو حفظ أي بيانات.", proto2: "نسخة تجريبية: لا يتم إرسال أو حفظ أي بيانات.",
      n_home: "الرئيسية", n_how: "كيف أحجز؟", n_points: "نقاط البيع", n_cond: "شروط الحجز", n_contact: "اتصل بنا", citizen: "فضاء المواطن",
      h_title: "بطاطتي", h_slogan: "احجز <em>حصتك</em> بكل سهولة", h_sub: "منصة رقمية لتسهيل عملية حجز البطاطا للمواطنين عبر الإنترنت.",
      h_cta: "احجز بطاطتي", b_title: "احجز بطاطتك بكل طمأنينة", b_text: "منصة مصممة للمواطن يمكن من إجراء حجز البطاطا مباشرة عبر هذا الموقع بكل سهولة",
      f_title: "استمارة حجز البطاطا", s1: "المعلومات الشخصية", s2: "معلومات الحجز", s3: "اختيار نقطة البيع",
      l_prenom: "الاسم", l_nom: "اللقب", l_dob: "تاريخ الميلاد", l_pob: "مكان الميلاد", l_nin: "رقم بطاقة التعريف الوطنية", l_tel: "رقم الهاتف", l_mail: "البريد الإلكتروني",
      r_prod: "المنتوج", r_prodv: "البطاطا", r_qty: "الكمية", r_unit: "سعر الوحدة", r_total: "المبلغ الإجمالي",
      l_wilaya: "الولاية", l_commune: "البلدية", l_sp: "نقطة البيع", ex: "قائمة توضيحية للتجربة فقط.",
      agree: "أوافق على شروط واستعمال البيانات الشخصية.", confirm: "تأكيد الحجز",
      how_t: "كيف أحجز؟", how1t: "املأ بياناتك", how1: "أدخل معلوماتك الشخصية كما هي في بطاقة التعريف الوطنية.",
      how2t: "اختر الكمية", how2: "حدّد الكمية بالكيلوغرام ويُحسب المبلغ تلقائيا.",
      how3t: "اختر نقطة البيع", how3: "اختر الولاية والبلدية ثم نقطة البيع الأقرب إليك وأكّد الحجز.",
      pts_t: "نقاط البيع", cond_t: "شروط الحجز",
      cond1: "حجز واحد لكل مواطن في كل فترة.", cond2: "الحد الأقصى للكمية: 10 كغ لكل حجز.", cond3: "يجب أن تكون المعلومات المدخلة صحيحة ومطابقة لبطاقة التعريف.", cond4: "الدفع عند الاستلام في نقطة البيع المختارة.",
      ct_t: "اتصل بنا", ct_n: "بيانات الاتصال أمثلة توضيحية، يجب استبدالها بالبيانات الحقيقية.",
      f_terms: "شروط الاستخدام", f_priv: "سياسة الخصوصية", f_legal: "ملاحظات قانونية", copy: "BATATATI © 2026 · نسخة تجريبية غير رسمية",
      kg: "كغ", unit: "DA / كغ", choose: "اختر", c_wilaya: "اختر الولاية", c_commune: "اختر البلدية", c_sp: "اختر نقطة البيع",
      e_req: "هذا الحقل مطلوب.", e_nin: "يجب أن يتكون الرقم من 18 رقما.", e_tel: "رقم هاتف جزائري غير صالح.", e_mail: "بريد إلكتروني غير صالح.", e_agree: "يجب الموافقة على الشروط.",
      d_title: "تم تسجيل الحجز التجريبي", d_ref: "المرجع", d_p: "هذا عرض تجريبي: لم يتم إرسال أي بيانات ولم يتم حفظ أي شيء.", d_again: "حجز جديد", d_sum: "{q} كغ · {t} DA · {p}",
      citizen_msg: "فضاء المواطن غير متاح في النسخة التجريبية."
    },
    fr: {
      proto: "Prototype : aucune donnée n'est envoyée ni enregistrée.", proto2: "Prototype : aucune donnée n'est envoyée ni enregistrée.",
      n_home: "Accueil", n_how: "Comment réserver ?", n_points: "Nos points de vente", n_cond: "Conditions de réservation", n_contact: "Contact", citizen: "Espace citoyen",
      h_title: "Batatati", h_slogan: "Réservez <em>votre part</em> en toute simplicité", h_sub: "Plateforme numérique pour faciliter la réservation de pommes de terre en ligne.",
      h_cta: "Réserver mes patates", b_title: "Réservez vos pommes de terre en toute sérénité", b_text: "Une plateforme conçue pour le citoyen, qui permet de réserver ses pommes de terre directement sur ce site, en toute simplicité",
      f_title: "Formulaire de réservation", s1: "Informations personnelles", s2: "Informations de réservation", s3: "Choix du point de vente",
      l_prenom: "Prénom", l_nom: "Nom", l_dob: "Date de naissance", l_pob: "Lieu de naissance", l_nin: "N° de carte d'identité nationale", l_tel: "Téléphone", l_mail: "E-mail",
      r_prod: "Produit", r_prodv: "Pommes de terre", r_qty: "Quantité", r_unit: "Prix unitaire", r_total: "Montant total",
      l_wilaya: "Wilaya", l_commune: "Commune", l_sp: "Point de vente", ex: "Liste d'exemple, pour essai uniquement.",
      agree: "J'accepte les conditions et le traitement de mes données personnelles.", confirm: "Confirmer la réservation",
      how_t: "Comment réserver ?", how1t: "Renseignez vos informations", how1: "Saisissez vos informations personnelles telles qu'elles figurent sur votre carte d'identité nationale.",
      how2t: "Choisissez la quantité", how2: "Indiquez la quantité en kilogrammes ; le montant se calcule automatiquement.",
      how3t: "Choisissez le point de vente", how3: "Sélectionnez la wilaya, la commune puis le point de vente le plus proche, et confirmez.",
      pts_t: "Nos points de vente", cond_t: "Conditions de réservation",
      cond1: "Une seule réservation par citoyen et par période.", cond2: "Quantité maximale : 10 kg par réservation.", cond3: "Les informations saisies doivent être exactes et conformes à la carte d'identité.", cond4: "Paiement à la remise, au point de vente choisi.",
      ct_t: "Contact", ct_n: "Coordonnées d'exemple, à remplacer par les vraies.",
      f_terms: "Conditions d'utilisation", f_priv: "Politique de confidentialité", f_legal: "Mentions légales", copy: "BATATATI © 2026 · Prototype non officiel",
      kg: "kg", unit: "DA / kg", choose: "Choisir", c_wilaya: "Choisir la wilaya", c_commune: "Choisir la commune", c_sp: "Choisir le point de vente",
      e_req: "Ce champ est obligatoire.", e_nin: "Le numéro doit comporter 18 chiffres.", e_tel: "Numéro de téléphone algérien invalide.", e_mail: "Adresse e-mail invalide.", e_agree: "Vous devez accepter les conditions.",
      d_title: "Réservation d'essai enregistrée", d_ref: "Référence", d_p: "Ceci est une démonstration : aucune donnée n'a été envoyée ni conservée.", d_again: "Nouvelle réservation", d_sum: "{q} kg · {t} DA · {p}",
      citizen_msg: "L'espace citoyen n'est pas disponible dans ce prototype."
    }
  };

  // sample geography: [ar, fr]
  var GEO = [
    { id: "16", n: ["الجزائر", "Alger"], c: [["باب الوادي", "Bab El Oued"], ["حسين داي", "Hussein Dey"]] },
    { id: "09", n: ["البليدة", "Blida"], c: [["بوفاريك", "Boufarik"], ["أولاد يعيش", "Ouled Yaïch"]] },
    { id: "31", n: ["وهران", "Oran"], c: [["السانية", "Es Senia"], ["بئر الجير", "Bir El Djir"]] },
    { id: "25", n: ["قسنطينة", "Constantine"], c: [["الخروب", "El Khroub"], ["حامة بوزيان", "Hamma Bouziane"]] },
    { id: "42", n: ["تيبازة", "Tipaza"], c: [["القليعة", "Koléa"], ["شرشال", "Cherchell"]] }
  ];
  var SP = [["السوق البلدي", "Marché municipal"], ["نقطة البيع الجوارية", "Point de vente de proximité"]];
  var PRICE = 60;

  var lang = "ar";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var L = function (pair) { return pair[lang === "ar" ? 0 : 1]; };
  var t = function (k) { return T[lang][k]; };

  var wilaya = $("#wilaya"), commune = $("#commune"), sp = $("#sp"), qty = $("#qty");

  function fillQty() {
    var cur = qty.value || "5";
    qty.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
      var o = document.createElement("option");
      o.value = i; o.textContent = i + " " + t("kg");
      qty.appendChild(o);
    }
    qty.value = cur;
    updateTotal();
  }
  function updateTotal() {
    var q = +qty.value || 0;
    $("#unit").textContent = PRICE + " " + t("unit");
    $("#total").textContent = (q * PRICE) + " DA";
  }
  function opt(sel, value, text) { var o = document.createElement("option"); o.value = value; o.textContent = text; sel.appendChild(o); }
  function fillWilaya() {
    var cur = wilaya.value;
    wilaya.innerHTML = ""; opt(wilaya, "", t("c_wilaya"));
    GEO.forEach(function (w) { opt(wilaya, w.id, w.id + " - " + L(w.n)); });
    wilaya.value = cur;
    fillCommune();
  }
  function fillCommune() {
    var cur = commune.value;
    commune.innerHTML = ""; opt(commune, "", t("c_commune"));
    var w = GEO.filter(function (x) { return x.id === wilaya.value; })[0];
    if (w) w.c.forEach(function (c, i) { opt(commune, String(i), L(c)); });
    commune.value = cur;
    if (commune.value !== cur) commune.value = "";
    fillSp();
  }
  function fillSp() {
    var cur = sp.value;
    sp.innerHTML = ""; opt(sp, "", t("c_sp"));
    if (commune.value !== "") SP.forEach(function (s, i) { opt(sp, String(i), L(s)); });
    sp.value = cur;
    if (sp.value !== cur) sp.value = "";
  }
  function fillPoints() {
    var box = $("#pointsList"); box.innerHTML = "";
    GEO.forEach(function (w) {
      var d = document.createElement("div"); d.className = "pt";
      d.innerHTML = "<span></span><small></small>";
      d.firstChild.textContent = w.id + " - " + L(w.n);
      d.lastChild.textContent = w.c.map(L).join(" · ");
      box.appendChild(d);
    });
  }

  function applyLang(l) {
    lang = l;
    var h = document.documentElement;
    h.lang = l; h.dir = l === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(function (e) { e.textContent = t(e.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (e) { e.innerHTML = t(e.getAttribute("data-i18n-html")); });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === l ? "true" : "false"); });
    document.title = "BATATATI " + (l === "ar" ? "بطاطتي" : "Batatati");
    fillQty(); fillWilaya(); fillPoints();
    $$(".f.bad").forEach(function (f) { f.classList.remove("bad"); $("[data-err]", f).textContent = ""; });
    try { localStorage.setItem("batatati-lang", l); } catch (e) {}
  }

  // validation
  function setErr(key, msgKey) {
    var f = $('.f[data-k="' + key + '"]'); if (!f) return;
    var m = $("[data-err]", f);
    if (msgKey) { f.classList.add("bad"); m.textContent = t(msgKey); } else { f.classList.remove("bad"); m.textContent = ""; }
  }
  function validate() {
    var ok = true, first = null;
    function chk(key, cond, msg) { var bad = !cond; setErr(key, bad ? msg : ""); if (bad) { ok = false; if (!first) first = $('.f[data-k="' + key + '"] input, .f[data-k="' + key + '"] select'); } }
    var v = function (id) { return $("#" + id).value.trim(); };
    chk("prenom", v("prenom"), "e_req");
    chk("nom", v("nom"), "e_req");
    chk("dob", v("dob"), "e_req");
    chk("pob", v("pob"), "e_req");
    chk("nin", /^\d{18}$/.test(v("nin")), v("nin") ? "e_nin" : "e_req");
    chk("tel", /^(0|\+?213)[5-7]\d{8}$/.test(v("tel").replace(/[\s.-]/g, "")), v("tel") ? "e_tel" : "e_req");
    chk("mail", !v("mail") || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("mail")), "e_mail");
    chk("wilaya", wilaya.value, "e_req");
    chk("commune", commune.value !== "", "e_req");
    chk("sp", sp.value !== "", "e_req");
    var agree = $("#agree").checked;
    $("#agreeBox").classList.toggle("bad", !agree);
    if (!agree) { ok = false; if (!first) first = $("#agree"); }
    if (first) first.focus();
    return ok;
  }

  var savedForm = null;
  function showDone() {
    var w = GEO.filter(function (x) { return x.id === wilaya.value; })[0];
    var place = L(SP[+sp.value]) + " - " + L(w.c[+commune.value]) + " (" + L(w.n) + ")";
    var q = +qty.value;
    var ref = "PT-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    var body = $("#formBody");
    savedForm = body.innerHTML;
    body.innerHTML = '<div class="done" role="status"><div class="ok"><svg aria-hidden="true"><use href="#i-check"/></svg></div>' +
      '<h3></h3><div><small></small><div class="ref"></div></div><p class="sm"></p><p class="np"></p><button type="button" class="again"></button></div>';
    $("h3", body).textContent = t("d_title");
    $("small", body).textContent = t("d_ref");
    $(".ref", body).textContent = ref;
    $(".sm", body).textContent = t("d_sum").replace("{q}", q).replace("{t}", q * PRICE).replace("{p}", place);
    $(".np", body).textContent = t("d_p");
    var again = $(".again", body); again.textContent = t("d_again");
    again.addEventListener("click", function () {
      body.innerHTML = savedForm; bindForm(); applyLang(lang);
    });
    $(".done", body).scrollIntoView({ block: "nearest" });
  }

  function bindForm() {
    wilaya = $("#wilaya"); commune = $("#commune"); sp = $("#sp"); qty = $("#qty");
    qty.addEventListener("change", updateTotal);
    wilaya.addEventListener("change", fillCommune);
    commune.addEventListener("change", fillSp);
    $("#nin").addEventListener("input", function (e) { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 18); });
    $("#form").addEventListener("submit", function (e) {
      e.preventDefault();
      if (validate()) showDone();
    });
    $$("#form input, #form select").forEach(function (el) {
      el.addEventListener("input", function () { var f = el.closest(".f"); if (f) { f.classList.remove("bad"); var m = $("[data-err]", f); if (m) m.textContent = ""; } });
    });
    $("#agree").addEventListener("change", function () { $("#agreeBox").classList.remove("bad"); });
    qty.value = "5";
  }

  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); }); });
  $("#cta").addEventListener("click", function () {
    var f = $("#reserver"); f.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(function () { var p = $("#prenom"); if (p) p.focus({ preventScroll: true }); }, 400);
  });
  $("#citizen").addEventListener("click", function () { var m = $(".proto"); m.textContent = t("citizen_msg"); setTimeout(function () { m.textContent = t("proto"); }, 3500); });
  $$(".nav a").forEach(function (a) {
    a.addEventListener("click", function () { $$(".nav a").forEach(function (x) { x.classList.remove("on"); }); a.classList.add("on"); });
  });

  bindForm();
  var start = "ar";
  try { start = localStorage.getItem("batatati-lang") || "ar"; } catch (e) {}
  applyLang(start === "fr" ? "fr" : "ar");
})();
