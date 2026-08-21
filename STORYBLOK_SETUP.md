# Storyblok setup – NYHETER

För varje block: fyll i **Display name**, **Technical name** och **Block type** exakt som nedan.

Koden följer uppgiften **global Header/Footer via Config-story** (hämtas i `layout.js`).

---

## Del 1 – Config, Header, Footer (gör detta först)

### Blockhierarki

```
Config (Content type)          ← Story: slug `config`
├── header: Blocks → [Header]
│       Header (Nestable)
│       ├── logo: Asset
│       └── navigation: Blocks → [nav-link, ...]
│               nav-link (Nestable)
│               ├── label: Text
│               └── link: Link
│
└── footer: Blocks → [Footer]
        Footer (Nestable)
        ├── copyright: Text
        └── description: Textarea
```

Skapa blocken i **denna ordning** (eftersom `header` refererar till `nav-link`).

---

### 1. `nav-link` (Nestable block)

| Setting | Value |
|---|---|
| **Display name** | Nav Link |
| **Technical name** | `nav-link` |
| **Block type** | **Nestable block** |

| Fält | Name | Type |
|---|---|---|
| Label | `label` | Text |
| Link | `link` | Link |

---

### 2. `header` (Nestable block)

| Setting | Value |
|---|---|
| **Display name** | Header |
| **Technical name** | `header` |
| **Block type** | **Nestable block** |

| Fält | Name | Type | Inställning |
|---|---|---|---|
| Logo | `logo` | Asset | Valfritt |
| Navigation | `navigation` | Blocks | Begränsa till **`nav-link`** |

**Begränsa Blocks:** öppna fältet → **Manage access to nestable blocks** → välj `Nav Link` (`nav-link`).

---

### 3. `footer` (Nestable block)

| Setting | Value |
|---|---|
| **Display name** | Footer |
| **Technical name** | `footer` |
| **Block type** | **Nestable block** |

| Fält | Name | Type |
|---|---|---|
| Copyright | `copyright` | Text |
| Description | `description` | Textarea |

---

### 4. `config` (Content type)

| Setting | Value |
|---|---|
| **Display name** | Config |
| **Technical name** | `config` |
| **Block type** | **Content type** |

| Fält | Name | Type | Inställning |
|---|---|---|---|
| Header | `header` | Blocks | Begränsa till **`header`** |
| Footer | `footer` | Blocks | Begränsa till **`footer`** |

---

### 5. Skapa Config-storyn

```
Content → + New Story
```

| Setting | Value |
|---|---|
| **Name** | Config |
| **Slug** | `config` |
| **Content type** | Config |

#### Header-block (i fältet `header`)

Lägg till **ett** Header-block.

- `logo` — ladda upp bild, eller lämna tomt (då visas texten NYHETER)
- `navigation` — lägg till `nav-link`:

| `label` | `link` |
|---|---|
| HEM | Intern länk till `home`, eller URL `/` |
| SVERIGE | URL `/` |
| VÄRLDEN | URL `/` |
| EKONOMI | URL `/` |
| TEKNIK | URL `/` |
| KONTAKT | URL `/` |

#### Footer-block (i fältet `footer`)

| Fält | Klistra in |
|---|---|
| `copyright` | © 2025 NYHETER |
| `description` | Senaste nytt från Sverige och världen. |

**Spara och publicera** Config-storyn.

> Next.js hämtar den i `src/app/layout.js` via `cdn/stories/config` och renderar Header + Footer på **alla** sidor. Header ska **inte** ligga i `home`-sidans `body`.
>
> Config är **inte** en publik sida. `/config` redirectar till `/`. I Storyblok: öppna Config-storyn → **Config** (story settings) → **Real path** = `/` så Visual Editor förhandsvisar startsidan (där header/footer syns via layout).

---

## Del 2 – Datasource: Categories

**Settings** → **Datasources** → **New Datasource**

| Setting | Value |
|---|---|
| **Name** | Categories |
| **Slug** | `categories` |

| Name | Value |
|---|---|
| Sverige | SVERIGE |
| Världen | VÄRLDEN |
| Ekonomi | EKONOMI |
| Teknik | TEKNIK |
| Kultur | KULTUR |

- Article-fältet `category` → Single-Option → Datasource **`categories`**
- Sidebar-blocket `categories` läser samma datasource via API  
- Skapa **inte** något `category_item`-block

---

## Del 3 – Content types för nyheter

### `author` (Content type)

| Setting | Value |
|---|---|
| **Display name** | Author |
| **Technical name** | `author` |
| **Block type** | **Content type** |

| Fält | Name | Type |
|---|---|---|
| Name | `name` | Text |
| Bio | `bio` | Textarea (valfritt) |

Stories t.ex. `authors/erik-sundin`.

---

### `article` (Content type)

| Setting | Value |
|---|---|
| **Display name** | Article |
| **Technical name** | `article` |
| **Block type** | **Content type** |

| Fält | Name | Type | Inställning |
|---|---|---|---|
| Title | `title` | Text | Required |
| Image | `image` | Asset | |
| Category | `category` | **Single-Option** | Source: **Datasource** → `categories` |
| Date | `date` | Date/Time | |
| Author | `author` | **Single-Option** | Source: **Stories** → endast `author` |
| Excerpt | `excerpt` | Textarea | |
| Comments count | `comments_count` | Number | Valfritt |
| Body | `body` | Richtext | |

Stories t.ex. `articles/ny-teknik-stockholm`.

---

### `page` (Content type — finns redan)

| Fält | Name | Type | Tillåtna block i `body` |
|---|---|---|---|
| Body | `body` | Blocks | `featured_article`, `with_sidebar`, `newsletter` |

**Inte** `header` / `footer` här — de kommer från Config.

---

## Del 4 – Nestable blocks för startsidan

### `featured_article`

| Setting | Value |
|---|---|
| **Technical name** | `featured_article` |
| **Block type** | Nestable block |

| Fält | Name | Type |
|---|---|---|
| Article | `article` | Single-Option → Stories → `article` |

---

### `latest_news`

| **Technical name** | `latest_news` |
| **Block type** | Nestable |

| Fält | Name | Type |
|---|---|---|
| Title | `title` | Text |
| Articles | `articles` | Multi-Options → Stories → `article` |

---

### `popular_item`

| **Technical name** | `popular_item` |
| **Block type** | Nestable |

| Fält | Name | Type | Inställning |
|---|---|---|---|
| Title | `title` | Text | |
| Link | `link` | Link | |
| Icon | `icon` | Single-Option (Self) | `flame`, `chart`, `globe` |

---

### `popular`

| **Technical name** | `popular` |
| **Block type** | Nestable |

| Fält | Name | Type |
|---|---|---|
| Title | `title` | Text |
| Items | `items` | Blocks → endast `popular_item` |

---

### `categories` (sidebar — läser Datasource)

| **Technical name** | `categories` |
| **Block type** | Nestable |

| Fält | Name | Type | Default |
|---|---|---|---|
| Title | `title` | Text | Kategorier |
| Datasource | `datasource` | Text | `categories` |

Inga nested items.

---

### `with_sidebar`

| **Technical name** | `with_sidebar` |
| **Block type** | Nestable |

| Fält | Name | Type | Tillåt |
|---|---|---|---|
| Main | `main` | Blocks | `latest_news` |
| Sidebar | `sidebar` | Blocks | `popular`, `categories` |

---

### `newsletter`

| **Technical name** | `newsletter` |
| **Block type** | Nestable |

| Fält | Name | Type |
|---|---|---|
| Title | `title` | Text |
| Description | `description` | Text |
| Placeholder | `placeholder` | Text |
| Button text | `button_text` | Text |

---

## Del 5 – Home-story (`page`)

I **`home`** → `body`, **i denna ordning** (ingen header):

1. `featured_article`
2. `with_sidebar` → main: `latest_news` · sidebar: `popular` + `categories`
3. `newsletter`

---

## Del 6 – Sample data

### Authors (`authors/…`)

| Story name / slug | `name` | `bio` |
|---|---|---|
| Erik Sundin / `erik-sundin` | Erik Sundin | Teknikreporter med fokus på innovation och digitalisering. |
| Anna Karlsson / `anna-karlsson` | Anna Karlsson | Bevakar svensk politik och samhällsfrågor. |
| Johan Berg / `johan-berg` | Johan Berg | Skriver om ekonomi, börs och företagande. |

### Articles (`articles/…`)

**Article 1** — slug `ny-teknik-stockholm` (featured)

| Fält | Värde |
|---|---|
| `title` | Ny teknik förändrar vardagen i Stockholm |
| `category` | → Teknik (`TEKNIK`) |
| `date` | 2024-05-12 |
| `author` | → Erik Sundin |
| `comments_count` | 3 |
| `excerpt` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. |

`body`:

```
Stockholm tar täten i den digitala omställningen. Nya lösningar inom mobilitet, energi och stadsplanering rullas ut i allt snabbare takt.

Experter menar att tekniken inte bara effektiviserar vardagen utan också skapar nya möjligheter för invånare och företag.

Samtidigt växer behoven av tydliga riktlinjer kring integritet och säkerhet.
```

**Article 2** — slug `nya-klimatmal`

| Fält | Värde |
|---|---|
| `title` | Regeringen presenterar nya klimatmål |
| `category` | → Sverige (`SVERIGE`) |
| `date` | 2024-05-11 |
| `author` | → Anna Karlsson |
| `comments_count` | 5 |
| `excerpt` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. |

**Article 3** — slug `borsen-stiger`

| Fält | Värde |
|---|---|
| `title` | Börsen stiger efter starka kvartalsrapporter |
| `category` | → Ekonomi (`EKONOMI`) |
| `date` | 2024-05-10 |
| `author` | → Johan Berg |
| `comments_count` | 2 |
| `excerpt` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. |

**Article 4** — slug `ai-i-klassrum`

| Fält | Värde |
|---|---|
| `title` | AI-verktyg får fäste i svenska klassrum |
| `category` | → Teknik (`TEKNIK`) |
| `date` | 2024-05-09 |
| `author` | → Erik Sundin |
| `comments_count` | 8 |
| `excerpt` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. |

### Home-block

| Block | Fält |
|---|---|
| `featured_article` | → article **Ny teknik förändrar vardagen i Stockholm** |
| `latest_news` | `title`: Senaste nytt · övriga 3 artiklar |
| `popular` | `title`: Populärt |
| popular items | se tabell nedan |
| `categories` | `title`: Kategorier · `datasource`: `categories` |
| `newsletter` | se tabell nedan |

**popular_item:**

| `title` | `icon` |
|---|---|
| Fem saker du måste veta om AI just nu | `flame` |
| Så påverkas din ekonomi av räntebeskedet | `chart` |
| Vad händer i världen den här veckan? | `globe` |

**newsletter:**

| Fält | Värde |
|---|---|
| `title` | Håll dig uppdaterad |
| `description` | Följ oss för de senaste nyheterna. |
| `placeholder` | Din e-post |
| `button_text` | Prenumerera |

---

## Quick reference

| Kind | Technical names |
|---|---|
| **Config content type** | `config` |
| **Global nestables** | `nav-link`, `header`, `footer` |
| **Datasource** | `categories` |
| **News content types** | `author`, `article`, `page` |
| **Page nestables** | `featured_article`, `latest_news`, `popular_item`, `popular`, `categories`, `with_sidebar`, `newsletter` |

**Kod (redan i projektet):**
- Komponenter: `NavLink.jsx`, `Header.jsx`, `Footer.jsx`
- Registrering: `'nav-link'`, `header`, `footer` i `src/lib/storyblok.js`
- Global render: `src/app/layout.js` hämtar `cdn/stories/config`
