import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AXES = [
  {
    key: 'owner',
    label: 'Owner\nDependence',
    score: 32,
    buyerPrices: 'Whether the business can operate, retain customers and make decisions without the current owner present.',
    riskNote: 'The most common regime-determining constraint. A low score signals key-person risk — buyers price this heavily or walk away.',
  },
  {
    key: 'commercial',
    label: 'Commercial\nConcentration',
    score: 68,
    buyerPrices: 'The spread of revenue across customers, sectors and routes to market — and what happens if the top accounts leave.',
    riskNote: 'High concentration (one client over 25% of revenue) creates a structural discount or deal condition regardless of profitability.',
  },
  {
    key: 'financial',
    label: 'Financial Scrutiny\nReadiness',
    score: 44,
    buyerPrices: 'Quality of earnings, normalised EBITDA, clean management accounts, and defensibility under professional due diligence.',
    riskNote: 'Weak financial readiness delays deals, inflates professional fees and invites re-trades on price after heads of terms.',
  },
  {
    key: 'management',
    label: 'Management\nDepth',
    score: 71,
    buyerPrices: 'Whether the second tier of management is capable of running the business through a transition without the founder.',
    riskNote: 'Buyers acquiring for growth need a team in place. Absence of management depth caps multiples and increases earn-out risk.',
  },
  {
    key: 'systems',
    label: 'Systems &\nData Integrity',
    score: 58,
    buyerPrices: 'Whether operational data, customer records, contracts and processes are documented, retrievable and auditable.',
    riskNote: 'Poor systems create due diligence drag and raise questions about scalability — a proxy for how professionally the business is run.',
  },
]

// Geometry constants
const SVG_SIZE  = 320
const CX        = SVG_SIZE / 2   // 160
const CY        = SVG_SIZE / 2   // 160
const MAX_R     = 110
const LABEL_R   = 170            // outside SVG box edge (160), so labels are clear of the chart card
const RINGS     = [0.25, 0.5, 0.75, 1.0]
const N         = AXES.length

// Wrapper dimensions — wide enough to absorb label overhang on both sides
const PAD_X     = 110   // (540 - 320) / 2
const PAD_Y     = 50    // top room for "Owner Dependence" label
const WRAP_W    = 540
const WRAP_H    = 420   // PAD_Y + SVG_SIZE + bottom room for lower labels

function polar(angleDeg, r) {
  const rad = (angleDeg - 90) * (Math.PI / 180)
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

function polygon(scores) {
  return scores.map((s, i) => {
    const p = polar((360 / N) * i, (s / 100) * MAX_R)
    return `${p.x},${p.y}`
  }).join(' ')
}

// Per-axis CSS transform to anchor the label correctly around its position point
// 0 = top-centre, 1 = upper-right, 2 = lower-right, 3 = lower-left, 4 = upper-left
const LABEL_ALIGN = [
  { textAlign: 'center',  transform: 'translate(-50%, -100%)' },  // 0 top
  { textAlign: 'left',    transform: 'translate(0,    -50%)'  },  // 1 upper-right
  { textAlign: 'left',    transform: 'translate(0,     0)'    },  // 2 lower-right
  { textAlign: 'right',   transform: 'translate(-100%, 0)'    },  // 3 lower-left
  { textAlign: 'right',   transform: 'translate(-100%, -50%)' },  // 4 upper-left
]

const SpiderDiagram = () => {
  const [active, setActive] = useState(null)
  const activeData = active !== null ? AXES[active] : null
  const [scale, setScale] = useState(1)
  const outerRef = useRef(null)

  useEffect(() => {
    const update = () => {
      if (outerRef.current) {
        const available = outerRef.current.offsetWidth
        setScale(Math.min(1, available / WRAP_W))
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const toggle = (i) => setActive(active === i ? null : i)

  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 w-full">

      {/* ── Left: diagram wrapper ── */}
      <div ref={outerRef} className="flex-shrink-0 w-full lg:w-auto">
        {/* Outer container sized to scaled dimensions */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{ width: WRAP_W * scale, height: WRAP_H * scale }}
        >
        {/* Inner content scaled down */}
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: WRAP_W, height: WRAP_H, position: 'absolute', top: 0, left: 0 }}>
        {/* Relative container — labels are absolute children, SVG is absolute child */}
        <div
          className="relative mx-auto"
          style={{ width: WRAP_W, height: WRAP_H }}
        >
          {/* SVG — chart card, no text labels */}
          <svg
            width={SVG_SIZE}
            height={SVG_SIZE}
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{
              position: 'absolute',
              left: PAD_X,
              top:  PAD_Y,
              background: '#0F1F3D',
              borderRadius: '1rem',
              display: 'block',
            }}
          >
            {/* Rings */}
            {RINGS.map(pct => (
              <polygon
                key={pct}
                points={AXES.map((_, i) => {
                  const p = polar((360/N)*i, MAX_R*pct)
                  return `${p.x},${p.y}`
                }).join(' ')}
                fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1"
              />
            ))}

            {/* Axis spokes */}
            {AXES.map((_, i) => {
              const end = polar((360/N)*i, MAX_R)
              return <line key={i} x1={CX} y1={CY} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            })}

            {/* Score polygon */}
            <polygon
              points={polygon(AXES.map(a => a.score))}
              fill="rgba(13,148,136,0.20)"
              stroke="#0D9488"
              strokeWidth="2"
            />

            {/* Dots with pulse rings */}
            {AXES.map((axis, i) => {
              const dot = polar((360/N)*i, (axis.score/100)*MAX_R)
              const isActive = active === i

              return (
                <g key={i} style={{ cursor: 'pointer' }} onClick={() => toggle(i)}>
                  {/* Pulse ring — only when nothing selected */}
                  {active === null && (
                    <circle cx={dot.x} cy={dot.y} r="6" fill="none" stroke="#2DD4BF" strokeWidth="2">
                      <animate attributeName="r"       values="6;18;6"     dur="3s" begin={`${i*0.6}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8"  dur="3s" begin={`${i*0.6}s`} repeatCount="indefinite" />
                    </circle>
                  )}
                  {/* Dot */}
                  <circle
                    cx={dot.x} cy={dot.y}
                    r={isActive ? 8 : 5}
                    fill={isActive ? '#2DD4BF' : '#0D9488'}
                    stroke={isActive ? '#fff' : 'rgba(255,255,255,0.35)'}
                    strokeWidth={isActive ? 2 : 1}
                  />
                  {/* Invisible hit area */}
                  <circle cx={dot.x} cy={dot.y} r={22} fill="transparent" />
                </g>
              )
            })}
          </svg>

          {/* HTML labels — absolutely positioned outside SVG card, clear of the rounded rect */}
          {AXES.map((axis, i) => {
            const pos   = polar((360/N)*i, LABEL_R)
            const htmlX = PAD_X + pos.x
            const htmlY = PAD_Y + pos.y
            const align = LABEL_ALIGN[i]
            const isActive = active === i
            const lines = axis.label.split('\n')

            return (
              <button
                key={axis.key}
                onClick={() => toggle(i)}
                style={{
                  position:  'absolute',
                  left:      htmlX,
                  top:       htmlY,
                  transform: align.transform,
                  textAlign: align.textAlign,
                  cursor:    'pointer',
                  background: 'none',
                  border:    'none',
                  padding:   0,
                  lineHeight: 1.35,
                }}
                className={`text-[11px] font-medium transition-colors duration-150 ${
                  isActive ? 'text-teal' : 'text-white/75 hover:text-white'
                }`}
              >
                {lines.map((line, li) => (
                  <span key={li} style={{ display: 'block' }}>{line}</span>
                ))}
              </button>
            )
          })}
        </div>
        </div>
        </div>

        {/* Click hint */}
        <p className="text-center text-gray-500 text-xs mt-2">
          Click a label or dot to explore what a buyer sees
        </p>
      </div>

      {/* ── Right: info panel ── */}
      <div className="flex-1 min-w-0 pt-4 lg:pt-[50px]">
        <AnimatePresence mode="wait">
          {activeData ? (
            <motion.div
              key={activeData.key}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-teal flex-shrink-0" />
                <h3 className="text-base font-bold text-white leading-tight">
                  {activeData.label.replace('\n', ' ')}
                </h3>
                <span className="ml-auto text-3xl font-bold text-teal">{activeData.score}</span>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                <span className="text-white font-semibold">What a buyer prices: </span>
                {activeData.buyerPrices}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-teal/40 pl-3">
                {activeData.riskNote}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                The five lenses represent what a professional buyer analyses when pricing a transaction.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Click any label or dot to see what a buyer prices in that dimension and what a weak score means for your deal.
              </p>
              <p className="text-gray-600 text-xs">
                Profile shown is illustrative — a typical Constraint regime.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}

export default SpiderDiagram
