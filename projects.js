// Site content lives here. To add a work:
// 1. Make a folder assets/works/<id>/ and put its photos in it.
// 2. Append one object to PROJECTS below:
//    - `date`: shown on the detail page, "YYYY-MM".
//    - `tags`: shown under the grid title and on the detail page. Purely
//      informational — there's no filtering/sorting by tag.
//    - `thumbnail`: the filename (in that folder) used as the grid
//      thumbnail. Must be an image or gif — not a video.
//    - `images`: the filenames shown on its detail page, in order.
// Image paths are always assets/works/<id>/<filename> — folder name + file
// name is all that's needed, nothing else references the file system.

var PROJECTS = [
  {
    id: "manual-phase-shifter",
    title: "수동위상변환장치",
    description: "“수동위상변환장치”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["interaction", "installation", "graphic"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "okdk-supporters",
    title: "[기본소득당] 오키도키 서포터즈!",
    description: "“오키도키 서포터즈”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic", "identity"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "green-onion-picket",
    title: "[기본소득당] 대파 퍼포먼스 피켓",
    description: "“대파 퍼포먼스 피켓”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "path-of-literature",
    title: "메가스터디 러셀 — 고도연, 〈문학의도〉",
    description: "“문학의도”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["editorial"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "path-of-literature-detail-1",
    title: "〈문학의도〉 — 상세",
    description: "“문학의도”의 상세 이미지 페이지입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["editorial"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "path-of-literature-detail-2",
    title: "〈문학의도〉 — 상세",
    description: "“문학의도”의 또 다른 상세 이미지 페이지입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["editorial"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "queer-parade-fan",
    title: "[기본소득당] 2024 서울퀴어퍼레이드 부채",
    description: "“서울퀴어퍼레이드 부채”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "queer-parade-booth-poster",
    title: "[기본소득당] 2024 서울퀴어퍼레이드 부스 포스터",
    description: "“서울퀴어퍼레이드 부스 포스터”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic", "motion"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "queer-parade-poster",
    title: "[기본소득당] 2024 서울퀴어퍼레이드 포스터",
    description: "“서울퀴어퍼레이드 포스터”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "new-order-archiving",
    title: "[새로운 질서] 장소 아카이빙",
    description: "“새로운 질서 장소 아카이빙”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["web"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "foundation-design",
    title: "기초디자인",
    description: "“기초디자인”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic", "motion"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "ornaments",
    title: "오너먼츠",
    description: "“오너먼츠”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["graphic", "motion"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "lookbook",
    title: "룩북",
    description: "“룩북”에 대한 프로젝트 설명입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["editorial", "photography"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "lookbook-detail-1",
    title: "룩북 — 상세",
    description: "“룩북”의 상세 이미지 페이지입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["photography"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "lookbook-detail-2",
    title: "룩북 — 상세",
    description: "“룩북”의 또 다른 상세 이미지 페이지입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["photography"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    id: "lookbook-detail-3",
    title: "룩북 — 상세",
    description: "“룩북”의 세 번째 상세 이미지 페이지입니다. 이 텍스트를 실제 작업 설명으로 교체해 주세요.",
    date: "20XX-XX",
    tags: ["photography"],
    thumbnail: "01.jpg",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  }
];
