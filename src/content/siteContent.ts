export type WorkSize = "large-l" | "tall-r" | "small" | "wide";

export type WorkItem = {
  size: WorkSize;
  badge: string;
  cat: string;
  title: string;
  img: string;
  modalImg?: string;
  desc: string;
};

export type ServiceItem = {
  n: string;
  name: string;
  desc: string;
  tags: string[];
};

export type ProcessItem = {
  n: string;
  title: string;
  desc: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export const siteContent = {
  name: "Reo Tōyama",
  email: "hello@reotoyama.com",
  copyright: "© 2026 Reo Tōyama",

  hero: {
    line1: "Reo",
    line2: "Tōyama",
    desc1:
      "タイポグラフィと視覚言語を手がかりに、ブランディング・エディトリアル・タイプデザインを中心に活動するグラフィックデザイナー。",
    desc2: "2026年4月よりフリーランス。",
    avail: "新規のご相談、受け付けています",
  },

  marquee: [
    "Typography",
    "Branding",
    "Editorial Design",
    "Type Design",
    "Visual Identity",
    "Art Direction",
    "Zine & Print",
  ],

  work: [
    {
      size: "large-l",
      badge: "Client Work",
      cat: "Editorial / Identity",
      title: "Brand Book Design",
      img: "https://picsum.photos/seed/brand-book-editorial/900/675",
      modalImg: "",
      desc: "ブランドのコンセプトから視覚言語を組み立て、ブランドブックとして制作したプロジェクト。タイポグラフィシステムとカラーパレットの設計を担当。",
    },
    {
      size: "tall-r",
      badge: "Personal",
      cat: "Typography / Poster",
      title: "Type Poster Series",
      img: "https://picsum.photos/seed/type-poster-series/600/800",
      modalImg: "",
      desc: "文字の構造と視覚的な緊張感を探るポスターシリーズ。グリッドとタイポグラフィだけで構成し、装飾を一切排除したアプローチ。",
    },
    {
      size: "small",
      badge: "Personal",
      cat: "Zine / Print",
      title: "Concrete Poetry Zine",
      img: "https://picsum.photos/seed/zine-concrete-poetry/640/480",
      modalImg: "",
      desc: "コンクリートポエトリーをテーマにしたジン。言語としての文字と、視覚的なオブジェクトとしての文字の間を探った制作物。",
    },
    {
      size: "small",
      badge: "Client Work",
      cat: "Logo / Identity",
      title: "Visual Identity",
      img: "https://picsum.photos/seed/visual-identity-logo/640/480",
      modalImg: "",
      desc: "ロゴ・カラー・タイポグラフィを軸にしたブランドのビジュアルアイデンティティシステム。複数のアプリケーションへの展開まで担当。",
    },
    {
      size: "small",
      badge: "Research",
      cat: "Type Design / Study",
      title: "Variable Typeface Study",
      img: "https://picsum.photos/seed/variable-font-study/640/480",
      modalImg: "",
      desc: "可変書体の軸設計と表現の可能性を探るリサーチ。ウェイト・ウィズス・オプティカルサイズの相互作用を軸に進めた実験的な制作。",
    },
    {
      size: "wide",
      badge: "Exhibition",
      cat: "Installation / Exhibition",
      title: "Ambigrammic Text",
      img: "https://picsum.photos/seed/ambigram-installation-dark/900/675",
      modalImg: "",
      desc: "アンビグラミックテキストを用いたグループ展示のインスタレーション作品。視点や方向によって意味が変化するテキストの性質を空間的に表現した。",
    },
    {
      size: "wide",
      badge: "Research",
      cat: "Generative / Web",
      title: "Generative Typography",
      img: "https://picsum.photos/seed/generative-typography-web/900/675",
      modalImg: "",
      desc: "文字をデータとして扱い、アルゴリズムによって生成されるタイポグラフィの実験。規則と偶然性の間で、文字がどのように振る舞うかを探った。",
    },
  ] satisfies WorkItem[],

  about: {
    photo: "https://picsum.photos/seed/designer-reo-studio/600/750",
    photoAlt: "Reo Tōyama",
    title1: "文字で、",
    title2: "考えている。",
    subtitle: "タイポグラフィは、意味と形が交差する場所だと思っています。",
    bio: [
      "グラフィックデザインを学ぶなかで、アンビグラミックテキスト・コンクリートポエトリー・可変書体など、文字の構造と意味の関係を探ってきました。書体設計は独学で続けています。",
      "フリーランスとして活動を始めた今も、デザインへの問いは変わりません。一つひとつのプロジェクトに丁寧に向き合いながら、一緒に考えられるクライアントを探しています。",
      "得意なことも、まだ模索中のことも正直に伝えながら働きたいと思っています。",
    ],
    skills: [
      "Typography & Type Design",
      "Branding & Identity",
      "Editorial & Jacket Design",
      "Poster",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "Glyphs / Figma",
    ],
  },

  services: [
    {
      n: "01",
      name: "Visual Identity",
      desc: "ロゴ・カラー・タイポグラフィを軸にしたブランドの視覚システムを設計します。コンセプトから一緒に考えます。",
      tags: ["Logo", "Brand System", "Guidelines"],
    },
    {
      n: "02",
      name: "Editorial & Print",
      desc: "冊子・カタログ・ジン・ポスターなど印刷物のアートディレクションとデザイン。グリッドとタイポグラフィで構成します。",
      tags: ["Booklet", "Poster", "Zine"],
    },
    {
      n: "03",
      name: "Typography",
      desc: "タイポグラフィを中心に据えたビジュアル制作。オリジナル書体の設計や、文字を使った表現の相談も受け付けます。",
      tags: ["Type Design", "Lettering", "Layout"],
    },
    {
      n: "04",
      name: "Art Direction",
      desc: "写真・コピー・レイアウトを統合したビジュアルコミュニケーションの方向性を設計します。小規模なプロジェクトから対応しています。",
      tags: ["Direction", "Layout", "Concept"],
    },
  ] satisfies ServiceItem[],

  process: [
    {
      n: "01",
      title: "ヒアリング",
      desc: "プロジェクトの目的・ターゲット・スケジュール・予算を確認します。分からないことは遠慮なく聞きます。",
    },
    {
      n: "02",
      title: "リサーチ & 構想",
      desc: "市場・競合・参考事例を調べながら、コンセプトとビジュアルの方向性を一緒に探ります。",
    },
    {
      n: "03",
      title: "提案 & 調整",
      desc: "複数案を見せながら話し合います。フィードバックをもとに、納得できる形に仕上げていきます。",
    },
    {
      n: "04",
      title: "納品",
      desc: "必要なフォーマットでデータを納品します。ブランドガイドラインの作成にも対応しています。",
    },
  ] satisfies ProcessItem[],

  contact: {
    heading: "まず、",
    headingEm: "話しましょう。",
    intro:
      "ブランディング・エディトリアル・タイポグラフィなど、デザインのことはなんでもご相談ください。小さなものから始めて構いません。",
    avail: "現在、新規のご依頼を受け付けています",
    social: [
      { label: "X / Twitter", url: "https://twitter.com/" },
      { label: "Behance", url: "https://www.behance.net/" },
      { label: "Instagram", url: "https://www.instagram.com/" },
    ] satisfies SocialLink[],
    formTypes: [
      "Visual Identity / Branding",
      "Editorial / Print Design",
      "Typography / Type Design",
      "Art Direction",
      "その他・まずは相談したい",
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
