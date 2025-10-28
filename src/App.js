import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const themeParams = urlParams.get("theme");
  const langParams = urlParams.get("lang") || "id";

  const [theme, setTheme] = useState(null);

  const fetchData = async (color = "", lang = "id") => {
    const theme = {
      a: "https://api.jsonbin.io/v3/qs/69006a0c43b1c97be9869b18",
      b: "https://api.jsonbin.io/v3/qs/69006a7cd0ea881f40c194f2",
    };

    const themeDefault =
      "https://api.jsonbin.io/v3/qs/69009be843b1c97be986f129";

    let urlTheme = theme[color] ? theme[color] : themeDefault;

    const fetchData = await fetch(urlTheme);
    const data = await fetchData.json();

    if (data) {
      const newData = {
        ...data.record,
        head: data.record.head[lang],
        content: data.record.content[lang],
        blogPosts: data.record.blogPosts[lang],
        footer: data.record.footer[lang],
      };

      setTheme(newData);

      document.documentElement.style.setProperty(
        "--primary-color",
        data.record.primaryColor
      );
    }
  };

  useEffect(() => {
    fetchData(themeParams, langParams);
  }, [themeParams, langParams]);

  const changeLang = (lang = "id") => {
    let baseUrl = window.location.origin + window.location.pathname;
    let newParams = "?theme=" + themeParams + "&lang=" + lang;
    let newUrl = baseUrl + newParams;
    window.location.href = newUrl;
  };

  return (
    <>
      <meta name="title" content={theme?.head?.title || ""} />
      <meta name="description" content={theme?.head?.metaDescription || ""} />
      <div className="App">
        <header>
          <div className="header-container">
            <div className="logo">
              <img
                src={
                  theme?.logo
                    ? theme.logo
                    : "https://placehold.co/250x80/CCCCCC/555/PNG?text=GenericBrand"
                }
                alt="Logo GenericBrand"
              />
            </div>

            <div className="lang-div">
              <button
                className={
                  "lang-child " + (langParams === "en" ? "active" : "")
                }
                onClick={() => changeLang("en")}
              >
                EN
              </button>
              <label className="separator">|</label>
              <button
                className={"lang-child " + (langParams === "id" ? "active" : "")}
                onClick={() => changeLang("id")}
              >
                ID
              </button>
            </div>
          </div>
        </header>

        <div className="carousel-wrapper">
          <div className="owl-carousel owl-theme">
            {theme?.banners ? (
              theme?.banners?.map((e) => (
                <div className="item">
                  <img src={e.image} alt={e.alt} />
                </div>
              ))
            ) : (
              <div className="item">
                <img
                  src="https://placehold.co/960x320/DDD/555/PNG?text=Solusi+Digital"
                  alt="Banner 1"
                />
              </div>
            )}
          </div>
        </div>

        <main>
          {!!theme?.content ? (
            <>
              <h1>{theme?.content.heading}</h1>
              <p>{theme?.content.description}</p>
              <a href="/about" className="button">
                {theme?.content.ctaText}
              </a>
            </>
          ) : (
            <>
              <h1>Selamat datang di GenericBrand</h1>
              <p>
                Kami membantu bisnis tumbuh dengan pendekatan modern, efisien,
                dan berbasis data.
              </p>
              <a href="/about" className="button">
                Lihat Solusi Kami
              </a>
            </>
          )}

          {!!theme?.blogPosts ? (
            <section className="blog-list">
              {theme?.blogPosts?.map((e) => (
                <div className="blog-post">
                  <h2>{e.title}</h2>
                  <p>{e.summary}</p>
                </div>
              ))}
            </section>
          ) : (
            <section className="blog-list">
              <div className="blog-post">
                <h2>Strategi Bisnis di Era Digital</h2>
                <p>
                  Bagaimana bisnis bisa beradaptasi dan berkembang di tengah
                  transformasi digital global.
                </p>
              </div>
              <div className="blog-post">
                <h2>Optimasi Operasional dengan Teknologi</h2>
                <p>
                  Langkah-langkah praktis untuk meningkatkan efisiensi dan
                  produktivitas bisnis Anda.
                </p>
              </div>
              <div className="blog-post">
                <h2>Studi Kasus: UKM yang Sukses Berinovasi</h2>
                <p>
                  Kisah nyata dari pelaku usaha yang berhasil memanfaatkan
                  teknologi untuk pertumbuhan.
                </p>
              </div>
            </section>
          )}
        </main>

        {!!theme?.footer ? (
          <footer>
            <div className="footer-container">
              <div className="footer-section">
                <h3>{theme.footer.about.title}</h3>
                <p>{theme.footer.about.text}</p>
              </div>
              <div className="footer-section">
                <h3>{theme.footer.contact.title}</h3>
                <p>
                  Email: {theme.footer.contact.email}
                  <br />
                  Telepon: {theme.footer.contact.phone}
                  <br />
                  Alamat: {theme.footer.contact.address}
                </p>
              </div>
              <div className="footer-section">
                <h3>{theme.footer.articles.title}</h3>
                <ul>
                  {theme.footer.articles.links.map((e) => (
                    <li>
                      <a href="#">{e}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-bottom">
                <p>{theme.footer.copyright}</p>
              </div>
            </div>
          </footer>
        ) : (
          <footer>
            <div className="footer-container">
              <div className="footer-section">
                <h3>Tentang Kami</h3>
                <p>
                  GenericBrand adalah mitra strategis untuk bisnis yang ingin
                  berkembang di era digital. Kami menyediakan solusi berbasis
                  teknologi, data, dan pengalaman industri untuk membantu Anda
                  mencapai tujuan bisnis secara berkelanjutan.
                </p>
              </div>
              <div className="footer-section">
                <h3>Kontak</h3>
                <p>
                  Email: info@genericbrand.co
                  <br />
                  Telepon: +62 811 1234 5678
                  <br />
                  Alamat: Jl. Bisnis No. 1, Jakarta, Indonesia
                </p>
              </div>
              <div className="footer-section">
                <h3>Artikel Terbaru</h3>
                <ul>
                  <li>
                    <a href="#">Tren Digitalisasi 2025</a>
                  </li>
                  <li>
                    <a href="#">Tips Memilih Platform Bisnis</a>
                  </li>
                  <li>
                    <a href="#">Manfaat Data untuk Keputusan Strategis</a>
                  </li>
                  <li>
                    <a href="#">Kolaborasi Tim di Era Remote Work</a>
                  </li>
                </ul>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2025 GenericBrand. Semua hak dilindungi.</p>
              </div>
            </div>
          </footer>
        )}
      </div>
    </>
  );
}

export default App;
