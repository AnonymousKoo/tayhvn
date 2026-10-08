export const dynamic = "force-dynamic";

const logo01 =
  "https://th.webtestsdev.com/tns-lab/wp-content/uploads/2026/10/TAYHVN-Athletic-Logo-01.png";
const logo02 =
  "https://th.webtestsdev.com/tns-lab/wp-content/uploads/2026/10/TAYHVN-Athletic-Logo-02.png";

const MEDIA_ENDPOINT =
  "https://th.webtestsdev.com/tns-lab/wp-json/wp/v2/pages?slug=tayhvn-media&_fields=content";

const categories = ["Tees", "Hoodies", "Shorts", "Sets", "Performance", "Accessories"];

const featured = [
  { name: "Drop 01 — Tee", label: "Coming soon" },
  { name: "Drop 01 — Short", label: "Coming soon" },
  { name: "Drop 01 — Hoodie", label: "Coming soon" },
  { name: "Drop 01 — Set", label: "Coming soon" },
];

function decodeUrl(value = "") {
  return value.replaceAll("&amp;", "&");
}

function imageFromTag(tag = "") {
  const srcset = tag.match(/srcset=["']([^"']+)["']/i)?.[1];

  if (srcset) {
    const candidates = srcset
      .split(",")
      .map((candidate) => {
        const match = candidate.trim().match(/^(\S+)\s+(\d+)w$/);
        return match ? { url: decodeUrl(match[1]), width: Number(match[2]) } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.width - a.width);

    if (candidates[0]?.url) return candidates[0].url;
  }

  return decodeUrl(tag.match(/src=["']([^"']+)["']/i)?.[1] || "");
}

function extractSlot(html, slot) {
  const escaped = slot.replace(/[.*+?^$()|[\]\\{}]/g, "\\$&");
  const figure = html.match(
    new RegExp(
      `<figure[^>]*id=["']${escaped}["'][^>]*>[\\s\\S]*?<img[^>]*>`,
      "i",
    ),
  )?.[0];

  if (!figure) return null;

  const url = imageFromTag(figure);
  if (!url || url.includes("TAYHVN-Athletic-Logo-01")) return null;

  return url;
}

async function getMedia() {
  try {
    const response = await fetch(MEDIA_ENDPOINT, {
      cache: "no-store",
    });

    if (!response.ok) return {};

    const pages = await response.json();
    const html = pages?.[0]?.content?.rendered || "";

    return {
      hero: extractSlot(html, "tayhvn-hero"),
      men: extractSlot(html, "tayhvn-men"),
      women: extractSlot(html, "tayhvn-women"),
      drops: [
        extractSlot(html, "tayhvn-drop-1"),
        extractSlot(html, "tayhvn-drop-2"),
        extractSlot(html, "tayhvn-drop-3"),
        extractSlot(html, "tayhvn-drop-4"),
      ],
      lookbook: [
        extractSlot(html, "tayhvn-lookbook-1"),
        extractSlot(html, "tayhvn-lookbook-2"),
        extractSlot(html, "tayhvn-lookbook-3"),
      ],
    };
  } catch {
    return {};
  }
}

function photoStyle(url, overlay) {
  if (!url) return undefined;

  return {
    backgroundImage: `${overlay}, url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export default async function Home() {
  const media = await getMedia();
  const dropImages = media.drops || [];
  const lookbookImages = media.lookbook || [];

  return (
    <main>
      <div className="announcement">NEW DROP COMING SOON · TAYHVN ATHLETIC</div>

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="TAYHVN Athletic home">
          <span className="brandWord">TAYHVN</span>
          <span className="brandSub">ATHLETIC</span>
        </a>

        <nav className="mainNav" aria-label="Primary navigation">
          <a href="#featured">New Drops</a>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#collections">Collections</a>
          <a href="#story">Our Story</a>
        </nav>

        <div className="utilities" aria-label="Store utilities">
          <button type="button">Search</button>
          <button type="button">Account</button>
          <button type="button">Bag (0)</button>
        </div>
      </header>

      <section
        className={`hero${media.hero ? " heroWithPhoto" : ""}`}
        id="top"
        style={photoStyle(
          media.hero,
          "linear-gradient(90deg, rgba(3,3,3,.92) 0%, rgba(3,3,3,.72) 42%, rgba(3,3,3,.28) 70%, rgba(3,3,3,.45) 100%)",
        )}
      >
        <div className="heroTexture" aria-hidden="true" />
        <div className="heroEmblem" aria-hidden="true">
          <div className="heroEmblemRing" />
          <img className="heroEmblemLogo" src="/th-monogram.svg" alt="" />
          <span className="heroEmblemIndex">™</span>
          <span className="heroEmblemLabel">TAYHVN / ATHLETIC</span>
        </div>
        <div className="heroContent">
          <p className="eyebrow">TAYHVN ATHLETIC · CAMPAIGN 001</p>
          <h1>
            <span>BUILT FOR</span>
            <span>THE WORK</span>
            <span>NO ONE SEES.</span>
          </h1>
          <p className="heroCopy">
            Athletic essentials shaped by discipline, movement, and the standard
            you carry into everything.
          </p>
          <div className="ctaRow">
            <a className="button buttonGold" href="#men">Shop Men</a>
            <a className="button buttonOutline" href="#women">Shop Women</a>
          </div>
        </div>
        <div className="heroStatus">
          <span>CAMPAIGN 001</span>
          <span>{media.hero ? "WORDPRESS CAMPAIGN" : "IMAGE / VIDEO SLOT"}</span>
        </div>
      </section>

      <section className="section sectionLight" id="featured">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow dark">LATEST DROP</p>
            <h2>THE FIRST EDIT.</h2>
          </div>
          <a className="textLink" href="#collections">View the drop →</a>
        </div>

        <div className="productGrid">
          {featured.map((item, index) => (
            <article className="productCard" key={item.name}>
              <div
                className={`productVisual${dropImages[index] ? " productVisualPhoto" : ""}`}
                style={photoStyle(
                  dropImages[index],
                  "linear-gradient(to top, rgba(0,0,0,.48), rgba(0,0,0,.05) 55%)",
                )}
              >
                <span>0{index + 1}</span>
                {!dropImages[index] && <strong>TAYHVN</strong>}
              </div>
              <div className="productMeta">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.label}</p>
                </div>
                <span>—</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionBlack" id="collections">
        <div className="sectionHeading inverted">
          <div>
            <p className="eyebrow">SHOP BY CATEGORY</p>
            <h2>FIND YOUR UNIFORM.</h2>
          </div>
          <p className="sectionNote">Built to move. Designed to live in.</p>
        </div>

        <div className="categoryGrid">
          {categories.map((category, index) => (
            <a className="categoryCard" href="#featured" key={category}>
              <span className="categoryIndex">0{index + 1}</span>
              <span className="categoryName">{category}</span>
              <span className="categoryArrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="splitShop">
        <article
          className={`splitPanel${media.men ? " splitPanelPhoto" : ""}`}
          id="men"
          style={photoStyle(
            media.men,
            "linear-gradient(to top, rgba(0,0,0,.78), rgba(0,0,0,.10) 70%)",
          )}
        >
          <div className="splitNoise" aria-hidden="true" />
          <div className="splitContent">
            <p className="eyebrow">MEN</p>
            <h2>TRAIN. MOVE. REPEAT.</h2>
            <a className="button buttonLight" href="#featured">Shop Men</a>
          </div>
          {!media.men && <span className="imageSlot">MEN CAMPAIGN IMAGE</span>}
        </article>

        <article
          className={`splitPanel splitPanelGold${media.women ? " splitPanelPhoto" : ""}`}
          id="women"
          style={photoStyle(
            media.women,
            "linear-gradient(to top, rgba(0,0,0,.62), rgba(0,0,0,.08) 70%)",
          )}
        >
          <div className="splitNoise" aria-hidden="true" />
          <div className={`splitContent${media.women ? "" : " darkText"}`}>
            <p className={`eyebrow${media.women ? "" : " dark"}`}>WOMEN</p>
            <h2>OWN THE STANDARD.</h2>
            <a className={`button ${media.women ? "buttonLight" : "buttonDark"}`} href="#featured">
              Shop Women
            </a>
          </div>
          {!media.women && <span className="imageSlot darkText">WOMEN CAMPAIGN IMAGE</span>}
        </article>
      </section>

      <section className="lookbook section">
        <div className="lookbookIntro">
          <p className="eyebrow">CAMPAIGN / LOOKBOOK</p>
          <h2>THE LOOK.</h2>
          <p>
            This space is ready for the first TAYHVN training story, lifestyle
            shoot, or seasonal campaign.
          </p>
          <a className="textLink goldLink" href="#story">View lookbook →</a>
        </div>

        <div className="lookbookFrames" aria-label="Campaign imagery">
          <div
            className={`frame frameTall${lookbookImages[0] ? " framePhoto" : ""}`}
            style={photoStyle(
              lookbookImages[0],
              "linear-gradient(to top, rgba(0,0,0,.22), rgba(0,0,0,.02))",
            )}
          >
            <span>01</span>
          </div>
          <div
            className={`frame${lookbookImages[1] ? " framePhoto" : ""}`}
            style={photoStyle(
              lookbookImages[1],
              "linear-gradient(to top, rgba(0,0,0,.22), rgba(0,0,0,.02))",
            )}
          >
            <span>02</span>
          </div>
          <div
            className={`frame frameWide${lookbookImages[2] ? " framePhoto" : ""}`}
            style={photoStyle(
              lookbookImages[2],
              "linear-gradient(to top, rgba(0,0,0,.22), rgba(0,0,0,.02))",
            )}
          >
            <span>03</span>
          </div>
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyLogo">
          <img src={logo02} alt="TAYHVN Athletic brand mark" />
        </div>
        <div className="storyCopy">
          <p className="eyebrow dark">OUR STORY</p>
          <h2>DISCIPLINE IS AN IDENTITY.</h2>
          <p>
            TAYHVN is being built for people who carry a standard into training,
            work, and everyday life. The founder story and meaning behind the
            name will live here once finalized.
          </p>
          <a className="textLink" href="#newsletter">Our story →</a>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <p className="eyebrow">DROP ACCESS</p>
        <h2>GET FIRST ACCESS.</h2>
        <p>New drops, campaign releases, and TAYHVN updates.</p>
        <form className="emailForm">
          <label className="srOnly" htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="Email address" />
          <button type="submit">Join</button>
        </form>
        <small>Signup connection will be enabled with the approved email system.</small>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <img src={logo01} alt="TAYHVN Athletic" />
          <p>Built for the work no one sees.</p>
        </div>
        <div className="footerLinks">
          <div>
            <strong>SHOP</strong>
            <a href="#featured">New Drops</a>
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#collections">Collections</a>
          </div>
          <div>
            <strong>BRAND</strong>
            <a href="#story">Our Story</a>
            <a href="#newsletter">Contact</a>
            <a href="#newsletter">Instagram</a>
            <a href="#newsletter">TikTok</a>
          </div>
          <div>
            <strong>SUPPORT</strong>
            <a href="#newsletter">Shipping</a>
            <a href="#newsletter">Returns</a>
            <a href="#newsletter">Privacy</a>
            <a href="#newsletter">Terms</a>
          </div>
        </div>
        <div className="footerBottom">
          <span>© 2026 TAYHVN ATHLETIC</span>
          <span>STORE PREVIEW · COMMERCE COMING LATER</span>
        </div>
      </footer>
    </main>
  );
}
