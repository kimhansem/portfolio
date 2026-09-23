// Site content lives here. To add a work, append one object to PROJECTS —
// the filter nav, the grid, and each work's detail page are all generated
// from this data. `id` must be unique: it's the work.html?id=... slug.

var CATEGORIES = [
  { id: "graphic", en: "Graphic", ko: "그래픽" },
  { id: "editorial", en: "Editorial", ko: "에디토리얼" },
  { id: "motion", en: "Motion", ko: "모션" },
  { id: "identity", en: "Identity", ko: "아이덴티티" },
  { id: "web", en: "Web", ko: "웹" },
  { id: "interaction", en: "Interaction", ko: "인터랙션" },
  { id: "installation", en: "Installation", ko: "설치" },
  { id: "photography", en: "Photography", ko: "포토그래피" }
];

var PLACEHOLDER_DESC = {
  en: "Detail description for this project goes here — replace this placeholder with your own write-up (concept, role, tools, year).",
  ko: "이 프로젝트에 대한 상세 설명이 들어갈 자리입니다. 실제 내용(컨셉, 역할, 사용 도구, 연도 등)으로 교체하세요."
};

function placeholderImages() {
  var args = Array.prototype.slice.call(arguments);
  return args.map(function (n) {
    return "assets/placeholders/placeholder-" + String(n).padStart(2, "0") + ".svg";
  });
}

var PROJECTS = [
  {
    id: "manual-phase-shifter",
    images: placeholderImages(1, 5, 10),
    title: { en: "Manual Phase Shifter", ko: "수동위상변환장치" },
    description: PLACEHOLDER_DESC,
    tags: ["interaction", "installation", "graphic"]
  },
  {
    id: "okdk-supporters",
    images: placeholderImages(2, 6, 11),
    title: { en: "[Basic Income Party] OKDK Supporters", ko: "[기본소득당] 오키도키 서포터즈!" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic", "identity"]
  },
  {
    id: "green-onion-picket",
    images: placeholderImages(3, 7, 12),
    title: { en: "[Basic Income Party] Green Onion Performance Picket", ko: "[기본소득당] 대파 퍼포먼스 피켓" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic"]
  },
  {
    id: "path-of-literature",
    images: placeholderImages(4, 8, 13),
    title: { en: "Megastudy Russel — Doyun Ko, ⟨The Path of Literature⟩", ko: "메가스터디 러셀 — 고도연, 〈문학의도〉" },
    description: PLACEHOLDER_DESC,
    tags: ["editorial"]
  },
  {
    id: "path-of-literature-detail-1",
    images: placeholderImages(5, 9, 14),
    title: { en: "⟨The Path of Literature⟩ — detail", ko: "〈문학의도〉 — 상세" },
    description: PLACEHOLDER_DESC,
    tags: ["editorial"]
  },
  {
    id: "path-of-literature-detail-2",
    images: placeholderImages(6, 10, 15),
    title: { en: "⟨The Path of Literature⟩ — detail", ko: "〈문학의도〉 — 상세" },
    description: PLACEHOLDER_DESC,
    tags: ["editorial"]
  },
  {
    id: "queer-parade-fan",
    images: placeholderImages(7, 11, 16),
    title: { en: "[Basic Income Party] 2024 Seoul Queer Parade — fan", ko: "[기본소득당] 2024 서울퀴어퍼레이드 부채" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic"]
  },
  {
    id: "queer-parade-booth-poster",
    images: placeholderImages(8, 12, 1),
    title: { en: "[Basic Income Party] 2024 Seoul Queer Parade — booth poster", ko: "[기본소득당] 2024 서울퀴어퍼레이드 부스 포스터" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic", "motion"]
  },
  {
    id: "queer-parade-poster",
    images: placeholderImages(9, 13, 2),
    title: { en: "[Basic Income Party] 2024 Seoul Queer Parade — poster", ko: "[기본소득당] 2024 서울퀴어퍼레이드 포스터" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic"]
  },
  {
    id: "new-order-archiving",
    images: placeholderImages(10, 14, 3),
    title: { en: "[New Order] place archiving", ko: "[새로운 질서] 장소 아카이빙" },
    description: PLACEHOLDER_DESC,
    tags: ["web"]
  },
  {
    id: "foundation-design",
    images: placeholderImages(11, 15, 4),
    title: { en: "Foundation design", ko: "기초디자인" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic", "motion"]
  },
  {
    id: "ornaments",
    images: placeholderImages(12, 16, 5),
    title: { en: "Ornaments", ko: "오너먼츠" },
    description: PLACEHOLDER_DESC,
    tags: ["graphic", "motion"]
  },
  {
    id: "lookbook",
    images: placeholderImages(13, 1, 6),
    title: { en: "Lookbook", ko: "룩북" },
    description: PLACEHOLDER_DESC,
    tags: ["editorial", "photography"]
  },
  {
    id: "lookbook-detail-1",
    images: placeholderImages(14, 2, 7),
    title: { en: "Lookbook — detail", ko: "룩북 — 상세" },
    description: PLACEHOLDER_DESC,
    tags: ["photography"]
  },
  {
    id: "lookbook-detail-2",
    images: placeholderImages(15, 3, 8),
    title: { en: "Lookbook — detail", ko: "룩북 — 상세" },
    description: PLACEHOLDER_DESC,
    tags: ["photography"]
  },
  {
    id: "lookbook-detail-3",
    images: placeholderImages(16, 4, 9),
    title: { en: "Lookbook — detail", ko: "룩북 — 상세" },
    description: PLACEHOLDER_DESC,
    tags: ["photography"]
  }
];
