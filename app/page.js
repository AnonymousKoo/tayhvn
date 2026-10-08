const logo01 =
  "https://th.webtestsdev.com/tns-lab/wp-content/uploads/2026/10/TAYHVN-Athletic-Logo-01.png";
const logo02 =
  "https://th.webtestsdev.com/tns-lab/wp-content/uploads/2026/10/TAYHVN-Athletic-Logo-02.png";

const categories = ["Tees", "Hoodies", "Shorts", "Sets", "Performance", "Accessories"];

const featured = [
  { name: "Drop 01 — Tee", label: "Coming soon" },
  { name: "Drop 01 — Short", label: "Coming soon" },
  { name: "Drop 01 — Hoodie", label: "Coming soon" },
  { name: "Drop 01 — Set", label: "Coming soon" },
];

export default function Home() {
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

      <section className="hero" id="top">
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
          <span>IMAGE / VIDEO SLOT</span>
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
              <div className="productVisual">
                <span>0{index + 1}</span>
                <strong>TAYHVN</strong>
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
        <article className="splitPanel" id="men">
          <div className="splitNoise" aria-hidden="true" />
          <div className="splitContent">
            <p className="eyebrow">MEN</p>
            <h2>TRAIN. MOVE. REPEAT.</h2>
            <a className="button buttonLight" href="#featured">Shop Men</a>
          </div>
          <span className="imageSlot">MEN CAMPAIGN IMAGE</span>
        </article>

        <article className="splitPanel splitPanelGold" id="women">
          <div className="splitNoise" aria-hidden="true" />
          <div className="splitContent darkText">
            <p className="eyebrow dark">WOMEN</p>
            <h2>OWN THE STANDARD.</h2>
            <a className="button buttonDark" href="#featured">Shop Women</a>
          </div>
          <span className="imageSlot darkText">WOMEN CAMPAIGN IMAGE</span>
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

        <div className="lookbookFrames" aria-label="Campaign image placeholders">
          <div className="frame frameTall"><span>01</span></div>
          <div className="frame"><span>02</span></div>
          <div className="frame frameWide"><span>03</span></div>
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
