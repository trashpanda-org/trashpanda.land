import type React from "react"
import "./rapsheet.css"

// The clerk's red pencil: three hand-drawn strokes, drawn under a host or an associate on hover and keyboard focus.
const strokes = [
  "M1 6.5C22 4.6 47 7.4 72 5.2 82 4.4 92 5.6 99 4.4",
  "M2 5.2C25 6.8 51 3.9 76 5.6 86 6.2 93 4.8 98 5.4",
  "M1 5.8C28 4.2 55 7 80 5 88 4.4 94 5.2 99 6",
]

function Pen({ n }: { n: number }) {
  return (
    <svg className="pen" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d={strokes[n]} />
    </svg>
  )
}

// The height chart, in inches: a rule every inch, heavier at 30 and 24, the odd inches labelled from 820 px up only.
const inches = [31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20]
const ruleClass = (k: number) => (k === 30 || k === 24 ? "m" : k % 2 ? "o" : undefined)

const ext = { target: "_blank", rel: "noopener" }

const hosts = [
  { href: "https://huggingface.co/trashpanda-org", own: "huggingface.co", shared: "/trashpanda-org" },
  { href: "https://github.com/trashpanda-org", own: "github.com", shared: "/trashpanda-org" },
  { href: "https://models.trashpanda.land", own: "models", shared: ".trashpanda.land" },
  { href: "https://sucker.trashpanda.land", own: "sucker", shared: ".trashpanda.land" },
]

const associates = [
  { href: "https://huggingface.co/finis-est", name: "severian" },
  { href: "https://huggingface.co/Hasnonname", name: "hasnonname" },
  { href: "https://huggingface.co/myscellus", name: "myscell" },
  { href: "https://huggingface.co/0mggg", name: "bbq" },
]

export default function Home() {
  return (
    <main className="page">
      <section className="mug" aria-label="Booking photo">
        <div className="plate">
          {/* decoded with the page, so the photo is in the first paint rather than popping in a frame later */}
          <img
            className="shot"
            src="/assets/mugshot-960.webp"
            srcSet="/assets/mugshot-640.webp 640w, /assets/mugshot-960.webp 960w, /assets/mugshot-1200.webp 1200w"
            sizes="(max-width: 819px) 100vw, max(38vw, 100vh)"
            width={1200}
            height={1200}
            fetchPriority="high"
            decoding="sync"
            alt="The trashpanda raccoon, red-furred and red-eyed, glaring into the camera from the rim of a bin"
          />
          <div className="chart" aria-hidden="true">
            {inches.map((k) => (
              <i key={k} className={ruleClass(k)} style={{ "--k": k } as React.CSSProperties}>
                <b>{k} in</b>
              </i>
            ))}
          </div>
        </div>
        <div className="gutter" aria-hidden="true"></div>
      </section>

      <div className="col">
        <section className="sheet" aria-label="Charge sheet">
          <p className="formhead">charge sheet</p>
          <div className="form">
            <div className="box b-subj">
              <span className="lbl">subject</span>
              <h1 className="wm"><span className="t">trash</span>panda</h1>
            </div>
            <div className="box b-chg">
              <span className="lbl">charge</span>
              <p className="charge">committing crimes against large language models since 2025</p>
            </div>
            <div className="box b-addr">
              <span className="lbl" id="addr-l">addresses</span>
              <ul className="addr" id="addr" aria-labelledby="addr-l">
                {hosts.map((h, i) => (
                  <li key={h.href}>
                    <a href={h.href} {...ext}>
                      <span className="host"><b>{h.own}</b>{h.shared}<Pen n={i % 3} /></span>
                    </a>
                  </li>
                ))}
                <li className="sealed">
                  <a href="https://avaritia.trashpanda.land" {...ext} aria-label="avaritia.trashpanda.land, locked">
                    <span className="host">
                      <b>avaritia</b>.trashpanda.land
                      <svg className="lock" viewBox="0 0 16 18" width="14" height="16" aria-hidden="true">
                        <path d="M4 8V5.5a4 4 0 0 1 8 0V8" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <rect x="1.5" y="8" width="13" height="9" rx="1" fill="currentColor" />
                        <rect x="7.2" y="11" width="1.6" height="3.2" fill="#070606" />
                      </svg>
                      <Pen n={1} />
                    </span>
                  </a>
                  <span className="stamp">sealed</span>
                </li>
              </ul>
            </div>
            <div className="box b-assoc">
              <span className="lbl" id="assoc-l">associates</span>
              <ul className="assoc" aria-labelledby="assoc-l">
                {associates.map((m, i) => (
                  <li key={m.href}>
                    <a className="an" href={m.href} {...ext}><span className="nm">{m.name}<Pen n={i % 3} /></span></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <footer className="foot">
          {/* one text node, so the font swap does not shift the name past the year */}
          <span>{`© ${new Date().getFullYear()} trashpanda-org`}</span>
          <a href="https://severian.dev" {...ext}>severian.dev</a>
        </footer>
      </div>
    </main>
  )
}
